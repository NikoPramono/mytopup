const plnData = [
    // --- PLN TOKEN (Prabayar) ---
    {
        id: 'pln-token',
        name: "PLN (Prabayar)",
        image: "/assets/Pln/pln.jpeg", // Menggunakan ikon PLN
        category: "PLN",
        inputType: "Nomor Meter / ID Pelanggan",
        inputPlaceholder: "Cth: 14xxxxxxxxxx",
        instructions: "Masukkan Nomor Meter atau ID Pelanggan Anda. Token listrik akan langsung dikirim setelah pembayaran berhasil.",
        prices: [
            { id: 901, denomination: "20.000", price: 21500 },
            { id: 902, denomination: "50.000", price: 51000 },
            { id: 903, denomination: "100.000", price: 100500 },
            { id: 904, denomination: "200.000", price: 200500, promo: "Best Seller" },
            { id: 905, denomination: "500.000", price: 500500 },
            { id: 906, denomination: "1.000.000", price: 1000500 },
        ]
    },
    // --- PLN TAGIHAN (Pascabayar) ---
    {
        id: 'pln-tagihan',
        name: "PLN (Pascabayar)",
        image: "/assets/Pln/pln.jpeg", // Menggunakan ikon PLN yang sama
        category: "PLN",
        inputType: "ID Pelanggan",
        inputPlaceholder: "Cth: 51xxxxxxxx",
        instructions: "Masukkan ID Pelanggan PLN Pascabayar Anda. Sistem akan menampilkan detail tagihan yang harus dibayar.",
        // Catatan: Untuk tagihan, biasanya tidak ada daftar 'prices' (nominal) karena harganya dinamis
        // Namun, jika Anda ingin menggunakan struktur yang sama, Anda bisa mencontohkan nominal "Biaya Admin"
        prices: [
            { id: 911, denomination: "Bayar Tagihan", price: 2500, note: "Hanya Biaya Admin" },
            // Anda dapat menambahkan harga fiktif jika memang ada batasan di API Anda
        ]
    },
];

export default plnData;