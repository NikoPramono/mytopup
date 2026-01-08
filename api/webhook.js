import midtransClient from 'midtrans-client';
import { createClient } from '@supabase/supabase-js';

// Inisialisasi Supabase
const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const apiClient = new midtransClient.Snap({
    isProduction: false, 
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

    // Logika jika pembayaran berhasil (Settlement)
    if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
      if (fraudStatus === 'accept') {
        
        // Mengambil User ID dari Order ID (Pastikan format saat checkout adalah: USERID-TIMESTAMP)
        const userId = orderId.split('-')[0]; 
        const amountToAdd = parseInt(grossAmount);

        // 1. UPDATE SALDO (Memanggil fungsi SQL yang sudah Anda buat)
        const { error: balanceError } = await supabase
          .rpc('increment_balance', { 
            user_id_input: userId, 
            amount_input: amountToAdd 
          });

        if (balanceError) {
          console.error("Gagal update saldo:", balanceError.message);
        } else {
          console.log(`Saldo berhasil ditambahkan ke User ${userId}: Rp${amountToAdd}`);
        }

        // 2. CATAT KE TABEL ORDERS (Agar muncul di Riwayat Pesanan)
        const { error: orderError } = await supabase
          .from('orders')
          .insert([{ 
            order_id: orderId, 
            user_id: userId, 
            amount: amountToAdd, 
            status: 'Success' 
          }]);

        if (orderError) {
          console.error("Gagal mencatat riwayat pesanan:", orderError.message);
        } else {
          console.log(`Riwayat pesanan berhasil dicatat untuk Order ${orderId}`);
        }
      }
    } 
    // Logika jika pembayaran gagal/expired
    else if (['cancel', 'deny', 'expire'].includes(transactionStatus)) {
      console.log(`Transaksi ${orderId} gagal atau kedaluwarsa.`);
      
      // Opsional: Update status di tabel orders menjadi 'Failed'
      await supabase
        .from('orders')
        .update({ status: 'Failed' })
        .eq('order_id', orderId);
    }

    // Beritahu Midtrans bahwa notifikasi sudah diterima
    res.status(200).send('OK');

  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}