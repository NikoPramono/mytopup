const midtransClient = require('midtrans-client');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Inisialisasi Snap dengan Server Key dari .env
  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.VITE_MIDTRANS_CLIENT_KEY
  });

  try {
    const { orderId, grossAmount, customerName } = req.body;

    let parameter = {
      "transaction_details": {
        "order_id": orderId,
        "gross_amount": grossAmount
      },
      "credit_card": { "secure": true },
      "customer_details": {
        "first_name": customerName
      }
    };

    const transaction = await snap.createTransaction(parameter);
    
    // Kirim snapToken kembali ke Frontend
    res.status(200).json({ token: transaction.token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}