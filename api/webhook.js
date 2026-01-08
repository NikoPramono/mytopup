import midtransClient from 'midtrans-client';
import { createClient } from '@supabase/supabase-js';

// Inisialisasi Supabase (Pastikan URL & KEY sudah ada di Environment Variables Vercel)
const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const apiClient = new midtransClient.Snap({
    isProduction: false, // Set ke true jika sudah live (Production)
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.VITE_MIDTRANS_CLIENT_KEY
  });

  try {
    const notification = req.body;
    const statusResponse = await apiClient.transaction.notification(notification);

    const orderId = statusResponse.order_id;
    const transactionStatus = statusResponse.transaction_status;
    const fraudStatus = statusResponse.fraud_status;
    const grossAmount = statusResponse.gross_amount;

    console.log(`Notifikasi diterima: Order ${orderId} statusnya ${transactionStatus}`);

    // Logika jika pembayaran berhasil
    if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
      if (fraudStatus === 'accept') {
        
        /** * LOGIKA TAMBAH SALDO:
         * Asumsi: order_id Anda diawali dengan USERID, misal: "123-ABC-456"
         */
        const userId = orderId.split('-')[0]; 
        const amountToAdd = parseInt(grossAmount);

        // Update saldo di tabel 'profiles' (atau tabel user Anda)
        const { data, error } = await supabase
          .rpc('increment_balance', { 
            user_id_input: userId, 
            amount_input: amountToAdd 
          });

        if (error) {
          console.error("Gagal update database:", error.message);
        } else {
          console.log(`Saldo berhasil ditambahkan ke User ${userId}: Rp${amountToAdd}`);
        }
      }
    } 
    // Logika jika pembayaran gagal/expired
    else if (['cancel', 'deny', 'expire'].includes(transactionStatus)) {
      console.log(`Transaksi ${orderId} gagal atau kedaluwarsa.`);
    }

    // Beritahu Midtrans bahwa notifikasi sudah diterima dengan sukses
    res.status(200).send('OK');

  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}