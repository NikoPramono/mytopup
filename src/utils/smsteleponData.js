const smsteleponData = [
    // --- TRI (3) ---
    {
        id: 'paket-tri-telepon',
        name: "Paket Telepon & SMS Tri (3)",
        image: "/assets/SmsTelepon/tri.jpeg",
        category: "Paket SMS & Telepon",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0896xxxxxxx",
        instructions: "Beli paket telepon dan SMS untuk nomor Tri (3). Berlaku untuk semua operator.",
        prices: [
            { id: 801, denomination: "Telp 100 Menit All Operator 3 Hari", price: 6000 },
            { id: 802, denomination: "Telp 200 Menit All Operator 7 Hari", price: 10000 },
            { id: 803, denomination: "SMS 1000 All Operator 30 Hari", price: 15000 },
        ]
    },
    // --- TELKOMSEL ---
    {
        id: 'paket-telkomsel-telepon',
        name: "Paket Telepon Telkomsel",
        image: "/assets/SmsTelepon/telkomsel.jpeg",
        category: "Paket SMS & Telepon",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxxx",
        instructions: "Paket telepon ke sesama dan operator lain untuk kartu Telkomsel (Simpati, As, Loop).",
        prices: [
            { id: 811, denomination: "Telp 300 Menit All Operator 7 Hari", price: 25000 },
            { id: 812, denomination: "Telp 600 Menit Sesama 30 Hari", price: 35000 },
            { id: 813, denomination: "SMS 1000 All Operator 30 Hari", price: 20000 },
        ]
    },
    // --- AXIS ---
    {
        id: 'paket-axis-telepon',
        name: "Paket Telepon & SMS AXIS",
        image: "/assets/SmsTelepon/axis.jpeg",
        category: "Paket SMS & Telepon",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0838xxxxxxx",
        instructions: "Beli paket telepon dan SMS khusus untuk nomor AXIS.",
        prices: [
            { id: 821, denomination: "Telp 50 Menit All Operator 1 Hari", price: 3000 },
            { id: 822, denomination: "Telp 100 Menit All Operator 7 Hari", price: 7000 },
        ]
    },
    // --- INDOSAT (IM3 Ooredoo) ---
    {
        id: 'paket-indosat-telepon',
        name: "Paket Telepon Indosat",
        image: "/assets/SmsTelepon/indosat.jpeg",
        category: "Paket SMS & Telepon",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0857xxxxxxx",
        instructions: "Beli paket telepon dan SMS untuk Indosat (IM3).",
        prices: [
            { id: 831, denomination: "Telp 100 Menit + 100 SMS 3 Hari", price: 8000 },
            { id: 832, denomination: "Telp 250 Menit All Operator 30 Hari", price: 30000 },
        ]
    },
    // --- XL ---
    {
        id: 'paket-xl-telepon',
        name: "Paket Telepon XL",
        image: "/assets/SmsTelepon/xl.jpeg",
        category: "Paket SMS & Telepon",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0878xxxxxxx",
        instructions: "Beli paket telepon ke sesama dan operator lain untuk XL Prabayar.",
        prices: [
            { id: 841, denomination: "Telp 150 Menit All Operator 7 Hari", price: 15000 },
            { id: 842, denomination: "Telp Unlimited Sesama 30 Hari", price: 30000 },
        ]
    },
];

export default smsteleponData;