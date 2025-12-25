const dataData = [
    // --- TELKOMSEL ---
    {
        id: 'data-telkomsel',
        name: "Paket Data Telkomsel",
        image: "/assets/Data/telkomsel.jpeg",
        category: "Data",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxxx",
        instructions: "Beli kuota internet untuk kartu Simpati, As, atau Loop.",
        prices: [
            { id: 1101, denomination: "Kuota 1 GB (3 Hari)", price: 12000 },
            { id: 1102, denomination: "Kuota 5 GB (7 Hari)", price: 30000 },
            { id: 1103, denomination: "Kuota 15 GB (30 Hari)", price: 65000, best: true },
        ]
    },
    // --- INDOSAT ---
    {
        id: 'data-indosat',
        name: "Paket Data Indosat (IM3)",
        image: "/assets/Data/indosat.jpeg",
        category: "Data",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0857xxxxxxx",
        instructions: "Beli kuota Freedom Internet untuk Indosat (IM3 Ooredoo).",
        prices: [
            { id: 1111, denomination: "Kuota 3 GB (30 Hari)", price: 25000 },
            { id: 1112, denomination: "Kuota 8 GB (30 Hari)", price: 40000 },
            { id: 1113, denomination: "Kuota 20 GB (30 Hari)", price: 75000 },
        ]
    },
    // --- SMARTFREN ---
    {
        id: 'data-smartfren',
        name: "Paket Data Smartfren",
        image: "/assets/Data/smartfren.jpeg",
        category: "Data",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0881xxxxxxx",
        instructions: "Beli kuota data Smartfren. Pastikan perangkat Anda mendukung jaringan Smartfren.",
        prices: [
            { id: 1121, denomination: "Kuota 5 GB (7 Hari)", price: 15000 },
            { id: 1122, denomination: "Kuota 10 GB (30 Hari)", price: 35000 },
            { id: 1123, denomination: "Unlimited Harian", price: 60000 },
        ]
    },
    // --- TRI (3) ---
    {
        id: 'data-tri',
        name: "Paket Data Tri (3)",
        image: "/assets/Data/tri.jpeg",
        category: "Data",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0896xxxxxxx",
        instructions: "Beli paket kuota internet Tri. Tersedia kuota reguler dan kuota malam.",
        prices: [
            { id: 1131, denomination: "Kuota 2 GB (30 Hari)", price: 18000 },
            { id: 1132, denomination: "Kuota 6 GB (30 Hari)", price: 30000 },
            { id: 1133, denomination: "Kuota Happy 18 GB (30 Hari)", price: 50000, promo: "Hot Deal" },
        ]
    },
    // --- XL ---
    {
        id: 'data-xl',
        name: "Paket Data XL",
        image: "/assets/Data/xl.jpeg",
        category: "Data",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0878xxxxxxx",
        instructions: "Beli paket Xtra Kuota atau Combo Lite untuk XL.",
        prices: [
            { id: 1141, denomination: "Kuota 3 GB (7 Hari)", price: 20000 },
            { id: 1142, denomination: "Kuota 12 GB (30 Hari)", price: 55000 },
            { id: 1143, denomination: "Kuota Xtra Combo 20 GB", price: 85000 },
        ]
    },
    // --- by.U ---
    {
        id: 'data-byu',
        name: "Paket Data by.U",
        image: "/assets/Data/byu.jpeg",
        category: "Data",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0851xxxxxxx",
        instructions: "Beli paket kuota by.U. Kuota tanpa dibagi-bagi waktu/jaringan.",
        prices: [
            { id: 1151, denomination: "Kuota 10 GB (30 Hari)", price: 40000 },
            { id: 1152, denomination: "Kuota 25 GB (30 Hari)", price: 60000 },
        ]
    },
    // --- AXIS ---
    {
        id: 'data-axis',
        name: "Paket Data AXIS",
        image: "/assets/Data/axis.jpeg",
        category: "Data",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0838xxxxxxx",
        instructions: "Beli paket kuota AXIS. Tersedia kuota Bronet dan OWSEM.",
        prices: [
            { id: 1161, denomination: "Kuota 2 GB (7 Hari)", price: 10000 },
            { id: 1162, denomination: "Kuota 8 GB (30 Hari)", price: 35000 },
            { id: 1163, denomination: "Kuota OWSEM 16 GB", price: 65000 },
        ]
    },
];

export default dataData;