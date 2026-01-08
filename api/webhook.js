import midtransClient from 'midtrans-client';

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

    console.log(`Transaction notification received. Order ID: ${orderId}. Status: ${transactionStatus}`);

    if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
      if (fraudStatus === 'accept') {
        // --- LOGIKA TAMBAH SALDO DISINI ---
        // Contoh: await db.user.update({ where: { id: userId }, data: { saldo: increment } })
        console.log(`Pembayaran Berhasil untuk Order: ${orderId}`);
      }
    } else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
        console.log(`Pembayaran Gagal/Expired untuk Order: ${orderId}`);
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(500).json({ error: error.message });
  }
}