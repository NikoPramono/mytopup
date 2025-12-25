const perdanaData = [
    {
        id: 'telkomsel-data',
        name: "Telkomsel Kuota Data",
        image: "/assets/AktivasiPerdana/telkomsel.jpeg",
        inputType: "Nomor KTP/KK",
        inputPlaceholder: "Cth: 3273xxxxxxxxxxxx",
        instructions: "Setelah pembelian, kartu perdana harus diregistrasi menggunakan Nomor KTP dan KK yang valid.",
        category: "Aktivasi Perdana",
        prices: [
            { id: 301, denomination: "6GB + 5K Pulsa (30 Hari)", price: 35000, promo: "Baru" },
            { id: 302, denomination: "12GB + Kuota Lokal (30 Hari)", price: 55000, best: true },
            { id: 303, denomination: "Kartu Perdana Khusus (0 Kuota)", price: 7000 },
        ]
    },
    {
        id: 'indosat-unlimited',
        name: "Indosat Ooredoo",
        image: "/assets/AktivasiPerdana/indosat.jpeg",
        inputType: "Nomor KTP/KK",
        inputPlaceholder: "Cth: 3273xxxxxxxxxxxx",
        instructions: "Kartu perdana Indosat siap pakai, wajib registrasi setelah diaktifkan.",
        category: "Aktivasi Perdana",
        prices: [
            { id: 311, denomination: "Unlimited Kuota Apps (30 Hari)", price: 40000 },
            { id: 312, denomination: "Unlimited + 20GB Utama (30 Hari)", price: 75000, best: true },
            { id: 313, denomination: "Kartu Perdana 3GB (3 Hari)", price: 15000 },
        ]
    },
    {
        id: 'xl-combo',
        name: "XL Axiata Combo Lite",
        image: "/assets/AktivasiPerdana/xl.jpeg",
        inputType: "Nomor KTP/KK",
        inputPlaceholder: "Cth: 3273xxxxxxxxxxxx",
        instructions: "Kartu Perdana XL harus diaktivasi dan diregistrasi segera setelah diterima.",
        category: "Aktivasi Perdana",
        prices: [
            { id: 321, denomination: "10GB + Free Nelpon (30 Hari)", price: 32000 },
            { id: 322, denomination: "20GB Kuota Utama (60 Hari)", price: 60000 },
            { id: 323, denomination: "Kartu Perdana Eksklusif 50GB", price: 99000, promo: "Ekstra" },
        ]
    },
    {
        id: 'smartfren-gokil',
        name: "Smartfren Kuota Gokil",
        image: "/assets/AktivasiPerdana/smartfren.jpeg",
        inputType: "Nomor KTP/KK",
        inputPlaceholder: "Cth: 3273xxxxxxxxxxxx",
        instructions: "Kartu 4G LTE. Aktivasi dan registrasi perdana sangat mudah melalui aplikasi MySmartfren.",
        category: "Aktivasi Perdana",
        prices: [
            { id: 331, denomination: "8GB Kuota Reguler (30 Hari)", price: 25000 },
            { id: 332, denomination: "16GB Kuota Full Service (30 Hari)", price: 45000 },
        ]
    },
    {
        id: 'tri-alwayson',
        name: "Tri (3) Always On (AON)",
        image: "/assets/AktivasiPerdana/tri.jpeg",
        inputType: "Nomor KTP/KK",
        inputPlaceholder: "Cth: 3273xxxxxxxxxxxx",
        instructions: "Kartu Perdana Tri dengan masa aktif panjang. Registrasi diperlukan sebelum digunakan.",
        category: "Aktivasi Perdana",
        prices: [
            { id: 341, denomination: "Perdana AON 4GB + Bonus 4G", price: 20000 },
            { id: 342, denomination: "Perdana AON 8GB + Pulsa 5K", price: 38000, best: true },
        ]
    },
];

export default perdanaData;