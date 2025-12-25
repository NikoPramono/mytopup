const masaAktifData = [
    // --- TRI (3) ---
    {
        id: 'masa-aktif-tri',
        name: "Masa Aktif Tri (3)",
        image: "/assets/MasaAktif/tri.jpeg",
        category: "Masa Aktif",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0896xxxxxxx (Nomor Tri)",
        instructions: "Perpanjangan masa aktif kartu Tri Anda. Pilih durasi yang diinginkan.",
        prices: [
            { id: 701, denomination: "Tambah Masa Aktif 4 Hari", price: 2500 },
            { id: 702, denomination: "Tambah Masa Aktif 10 Hari", price: 5000 },
            { id: 703, denomination: "Tambah Masa Aktif 30 Hari", price: 10000 },
            { id: 704, denomination: "Tambah Masa Aktif 90 Hari", price: 20000 },
        ]
    },
    // --- TELKOMSEL ---
    {
        id: 'masa-aktif-telkomsel',
        name: "Masa Aktif Telkomsel",
        image: "/assets/MasaAktif/telkomsel.jpeg",
        category: "Masa Aktif",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxxx (Nomor Telkomsel)",
        instructions: "Perpanjangan masa aktif kartu Telkomsel Anda (Simpati, As, Loop). Pilih durasi yang tersedia.",
        prices: [
            { id: 711, denomination: "Perpanjang 7 Hari", price: 5000 },
            { id: 712, denomination: "Perpanjang 30 Hari", price: 15000 },
            { id: 713, denomination: "Perpanjang 90 Hari", price: 30000 },
            { id: 714, denomination: "Perpanjang 360 Hari", price: 100000 },
        ]
    },
    // Jika di masa mendatang Anda ingin menambahkan operator lain:
    /* {
        id: 'masa-aktif-xl',
        name: "Perpanjangan Masa Aktif XL",
        image: "/assets/MasaAktif/xl.png",
        category: "Masa Aktif",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0878xxxxxxx",
        instructions: "Perpanjangan masa aktif kartu XL.",
        prices: [
             // ... daftar harga
        ]
    },
    */
];

export default masaAktifData;