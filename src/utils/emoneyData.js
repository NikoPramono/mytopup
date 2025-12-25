const emoneyData = [
    // --- PRODUK E-WALLET UTAMA ---
    {
        id: 'shopeepay',
        name: "ShopeePay",
        image: "/assets/Emoney/shopeepay.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxx (Terdaftar di Shopee)",
        instructions: "Masukkan nomor telepon yang terdaftar di akun ShopeePay Anda. Proses pengisian saldo instan.",
        prices: [
            { id: 101, denomination: "10.000", price: 10800 },
            { id: 103, denomination: "50.000", price: 50700, best: true },
            { id: 106, denomination: "500.000", price: 500500, promo: "Promo" },
        ]
    },
    {
        id: 'dana',
        name: "DANA",
        image: "/assets/Emoney/dana.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0857xxxxxx (Terdaftar di DANA)",
        instructions: "Masukkan nomor telepon yang terdaftar di akun DANA Anda. Saldo DANA akan bertambah setelah pembayaran berhasil.",
        prices: [
            { id: 111, denomination: "10.000", price: 10900 },
            { id: 113, denomination: "50.000", price: 50700 },
            { id: 114, denomination: "100.000", price: 100700, best: true },
        ]
    },
    {
        id: 'gojek-driver',
        name: "Gojek Driver", // <--- PERUBAHAN NAMA
        image: "/assets/Emoney/gojek.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0813xxxxxx (Terdaftar Driver Gojek)",
        instructions: "Khusus untuk top up saldo **Gojek Driver**. Pastikan nomor tujuan benar.", // <--- PERUBAHAN INSTRUCTIONS
        prices: [
            { id: 121, denomination: "25.000", price: 26000 },
            { id: 122, denomination: "50.000", price: 50800 },
            { id: 125, denomination: "200.000", price: 200500, promo: "Hemat" },
        ]
    },
    {
        id: 'ovo',
        name: "OVO",
        image: "/assets/Emoney/ovo.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0811xxxxxx (Terdaftar di OVO)",
        instructions: "Isi ulang saldo OVO Anda dengan cepat. Mohon periksa kembali nomor telepon sebelum *checkout*.",
        prices: [
            { id: 131, denomination: "20.000", price: 20750 },
            { id: 132, denomination: "50.000", price: 50700 },
            { id: 133, denomination: "100.000", price: 100700, best: true },
        ]
    },

    // --- BARIS 1 (PRODUK BARU) ---
    {
        id: 'grab-driver', // <--- PERUBAHAN ID
        name: "Grab Driver", // <--- PERUBAHAN NAMA
        image: "/assets/Emoney/grabdriver.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx (Terdaftar Driver Grab)",
        instructions: "Masukkan nomor telepon yang terdaftar di akun **Grab Driver** Anda.", // <--- PERUBAHAN INSTRUCTIONS
        prices: [
            { id: 141, denomination: "20.000", price: 20700 },
            { id: 142, denomination: "50.000", price: 50700 },
            { id: 143, denomination: "100.000", price: 100700 },
        ]
    },
    {
        id: 'mandiri-etoll',
        name: "Mandiri E-Toll",
        image: "/assets/Emoney/mandiri.jpg",
        inputType: "Nomor Kartu",
        inputPlaceholder: "16 Digit Nomor Kartu E-Money",
        instructions: "Masukkan 16 digit nomor kartu Mandiri E-Money Anda. Jangan lupa update saldo di ATM/Indomaret setelah pembayaran.",
        prices: [
            { id: 151, denomination: "50.000", price: 52000 },
            { id: 152, denomination: "100.000", price: 102000 },
        ]
    },
    {
        id: 'bri-brizzi',
        name: "BRI Brizzi",
        image: "/assets/Emoney/brizzi.jpeg",
        inputType: "Nomor Kartu",
        inputPlaceholder: "16 Digit Nomor Kartu Brizzi",
        instructions: "Masukkan 16 digit nomor kartu Brizzi Anda. Lakukan *tap* (update saldo) melalui aplikasi BRImo atau mesin ATM.",
        prices: [
            { id: 161, denomination: "50.000", price: 52000 },
            { id: 162, denomination: "100.000", price: 102000 },
        ]
    },
    {
        id: 'shopee-food-driver',
        name: "Shopee Food Driver",
        image: "/assets/Emoney/shopeefood.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxx (Terdaftar Driver)",
        instructions: "Khusus untuk top up saldo Shopee Food/Shopee Express Driver.",
        prices: [
            { id: 171, denomination: "25.000", price: 26000 },
            { id: 172, denomination: "50.000", price: 50800 },
        ]
    },
    {
        id: 'mtix',
        name: "M-Tix",
        image: "/assets/Emoney/mtix.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx",
        instructions: "Top up saldo M-Tix untuk pembelian tiket bioskop di XXI/21.",
        prices: [
            { id: 181, denomination: "50.000", price: 53000 },
            { id: 182, denomination: "100.000", price: 103000 },
        ]
    },

    // --- BARIS 2 (PRODUK BARU) ---
    {
        id: 'linkaja',
        name: "LinkAja",
        image: "/assets/Emoney/linkaja.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxx (Terdaftar di LinkAja)",
        instructions: "Top up saldo LinkAja Anda. Proses pengisian instan.",
        prices: [
            { id: 201, denomination: "20.000", price: 20700 },
            { id: 202, denomination: "50.000", price: 50700 },
        ]
    },
    {
        id: 'tixid',
        name: "TIX ID",
        image: "/assets/Emoney/tixid.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx",
        instructions: "Top up saldo TIX ID untuk pembelian tiket bioskop di CGV/Cinema 21.",
        prices: [
            { id: 191, denomination: "50.000", price: 53000 },
            { id: 192, denomination: "100.000", price: 103000 },
        ]
    },
    {
        id: 'tapcash-bni',
        name: "TapCash BNI",
        image: "/assets/Emoney/tapcash-bni.jpeg",
        inputType: "Nomor Kartu",
        inputPlaceholder: "16 Digit Nomor Kartu TapCash",
        instructions: "Masukkan 16 digit nomor kartu TapCash BNI Anda. Lakukan *tap* (update saldo) melalui mesin ATM atau aplikasi BNI.",
        prices: [
            { id: 211, denomination: "50.000", price: 52000 },
            { id: 212, denomination: "100.000", price: 102000 },
        ]
    },
    
    // --- BARIS 3 (PRODUK BARU) ---
    {
        id: 'maxim',
        name: "Maxim",
        image: "/assets/Emoney/maxim.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx (Terdaftar di Maxim)",
        instructions: "Top up saldo Maxim (untuk pengemudi atau pengguna) melalui nomor telepon.",
        prices: [
            { id: 221, denomination: "20.000", price: 20700 },
            { id: 222, denomination: "50.000", price: 50700 },
        ]
    },
    {
        id: 'astrapay',
        name: "AstraPay",
        image: "/assets/Emoney/astrapay.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx (Terdaftar di AstraPay)",
        instructions: "Top up saldo AstraPay Anda melalui nomor telepon yang terdaftar.",
        prices: [
            { id: 231, denomination: "25.000", price: 25700 },
            { id: 232, denomination: "50.000", price: 50700 },
        ]
    },
    {
        id: 'isaku',
        name: "i.saku",
        image: "/assets/Emoney/isaku.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx (Terdaftar di i.saku)",
        instructions: "Top up saldo i.saku (Indomaret) melalui nomor telepon.",
        prices: [
            { id: 241, denomination: "25.000", price: 25700 },
            { id: 242, denomination: "50.000", price: 50700 },
        ]
    },
    {
        id: 'sakuku',
        name: "Sakuku",
        image: "/assets/Emoney/sakuku.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx (Terdaftar di Sakuku)",
        instructions: "Top up saldo Sakuku (BCA) melalui nomor telepon yang terdaftar.",
        prices: [
            { id: 251, denomination: "25.000", price: 25700 },
            { id: 252, denomination: "50.000", price: 50700 },
        ]
    },
    {
        id: 'doku',
        name: "DOKU",
        image: "/assets/Emoney/doku.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx (Terdaftar di DOKU)",
        instructions: "Isi ulang saldo DOKU Anda. Saldo dapat digunakan untuk pembayaran online dan merchant.",
        prices: [
            { id: 261, denomination: "25.000", price: 25700 },
            { id: 262, denomination: "50.000", price: 50700 },
        ]
    },
    {
        id: 'kaspro',
        name: "KasPro",
        image: "/assets/Emoney/kaspro.jpeg",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 081xxxxxxx (Terdaftar di KasPro)",
        instructions: "Top up saldo KasPro melalui nomor telepon.",
        prices: [
            { id: 271, denomination: "25.000", price: 25700 },
            { id: 272, denomination: "50.000", price: 50700 },
        ]
    },
];

export default emoneyData;