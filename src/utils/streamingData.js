const streamingData = [
    // --- LAYANAN UTAMA YANG ADA DI GAMBAR ---
    {
        id: 'wetv',
        name: "WeTV",
        image: "/assets/Streaming/wetv.jpeg", // Path ke logo WeTV
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxx",
        instructions: "Langganan akan dikirimkan ke akun WeTV Anda yang terdaftar dengan nomor ini. Pastikan nomor sudah benar.",
        category: "Streaming",
        prices: [
            { id: 401, denomination: "VIP 1 Bulan", price: 35000, promo: "Baru" },
            { id: 402, denomination: "VIP 3 Bulan", price: 95000, best: true },
            { id: 403, denomination: "Koin WeTV 10.000", price: 15000 },
        ]
    },
    {
        id: 'telkomsel-stream',
        name: "Telkomsel Kuota Nonton",
        image: "/assets/Streaming/telkomsel.jpeg", // Path ke logo Telkomsel
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxx (Kartu Telkomsel)",
        instructions: "Kuota Nonton akan diisikan ke nomor Telkomsel Anda. Kuota berlaku untuk Viu, Disney+ Hotstar, dan platform lainnya.",
        category: "Streaming",
        prices: [
            { id: 411, denomination: "Kuota Nonton 5GB (7 Hari)", price: 15000 },
            { id: 412, denomination: "Kuota Nonton 15GB (30 Hari)", price: 30000, best: true },
            { id: 413, denomination: "Voucher Disney+ Hotstar 1 Bulan", price: 45000 },
        ]
    },

    // --- LAYANAN STREAMING POPULER LAINNYA ---
    {
        id: 'spotify',
        name: "Spotify Premium",
        image: "/assets/Streaming/spotify.jpeg",
        inputType: "Kode Voucher (via Email)",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Kode voucher akan dikirimkan ke email Anda untuk di-redeem menjadi langganan Premium.",
        category: "Streaming",
        prices: [
            { id: 421, denomination: "Premium Individual 1 Bulan", price: 55000 },
            { id: 422, denomination: "Voucher Premium 3 Bulan", price: 160000 },
        ]
    },
    {
        id: 'youtube-premium',
        name: "YouTube Premium",
        image: "/assets/Streaming/youtube.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxx",
        instructions: "Langganan akan diaktifkan ke akun YouTube yang terhubung dengan nomor ini (metode *inject*).",
        category: "Streaming",
        prices: [
            { id: 431, denomination: "Premium 1 Bulan (Individual)", price: 65000 },
            { id: 432, denomination: "Premium 3 Bulan (Family Share)", price: 180000 },
        ]
    },
    {
        id: 'netflix',
        name: "Netflix Voucher",
        image: "/assets/Streaming/netflix.jpeg",
        inputType: "Email Pengiriman Voucher",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Kode Voucher Gift Card Netflix akan dikirimkan ke email Anda.",
        category: "Streaming",
        prices: [
            { id: 441, denomination: "Voucher Rp 100.000", price: 105000 },
            { id: 442, denomination: "Voucher Rp 200.000", price: 205000 },
        ]
    },
    {
        id: 'viu',
        name: "Viu Premium",
        image: "/assets/Streaming/viu.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxx",
        instructions: "Aktivasi langganan akan langsung masuk ke akun Viu yang terdaftar dengan nomor ini.",
        category: "Streaming",
        prices: [
            { id: 451, denomination: "Premium 30 Hari", price: 30000 },
            { id: 452, denomination: "Premium 90 Hari", price: 85000, best: true },
        ]
    },
];

export default streamingData;