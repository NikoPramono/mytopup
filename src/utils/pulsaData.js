const pulsaData = [
    // --- AXIS ---
    {
        id: 'pulsa-axis',
        name: "Pulsa AXIS",
        image: "/assets/Pulsa/axis.jpeg",
        category: "Pulsa",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0838xxxxxxx",
        instructions: "Isi ulang pulsa reguler untuk nomor AXIS. Pastikan nomor tujuan benar.",
        prices: [
            { id: 601, denomination: "5.000", price: 6000 },
            { id: 602, denomination: "10.000", price: 10800 },
            { id: 603, denomination: "25.000", price: 25700 },
            { id: 604, denomination: "50.000", price: 50500 },
            { id: 605, denomination: "100.000", price: 100300, promo: "Hemat" },
        ]
    },
    // --- TELKOMSEL (Simpati, Loop, AS) ---
    {
        id: 'pulsa-telkomsel',
        name: "Pulsa Telkomsel",
        image: "/assets/Pulsa/telkomsel.jpeg",
        category: "Pulsa",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0812xxxxxxx",
        instructions: "Isi ulang pulsa reguler untuk Simpati, Kartu AS, atau Loop. Nomor harus aktif.",
        prices: [
            { id: 611, denomination: "5.000", price: 6500 },
            { id: 612, denomination: "10.000", price: 11000 },
            { id: 613, denomination: "25.000", price: 26000 },
            { id: 614, denomination: "50.000", price: 50800 },
            { id: 615, denomination: "100.000", price: 100500, best: true },
        ]
    },
    // --- SMARTFREN ---
    {
        id: 'pulsa-smartfren',
        name: "Pulsa Smartfren",
        image: "/assets/Pulsa/smartfren.jpeg",
        category: "Pulsa",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0881xxxxxxx",
        instructions: "Isi ulang pulsa reguler untuk nomor Smartfren. Pulsa berlaku untuk semua layanan.",
        prices: [
            { id: 621, denomination: "5.000", price: 5800 },
            { id: 622, denomination: "10.000", price: 10500 },
            { id: 623, denomination: "25.000", price: 25300 },
            { id: 624, denomination: "50.000", price: 50200 },
            { id: 625, denomination: "100.000", price: 100000 },
        ]
    },
    // --- TRI (3) ---
    {
        id: 'pulsa-tri',
        name: "Pulsa Tri (3)",
        image: "/assets/Pulsa/tri.jpeg",
        category: "Pulsa",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0896xxxxxxx",
        instructions: "Isi ulang pulsa reguler untuk nomor Tri (3).",
        prices: [
            { id: 631, denomination: "5.000", price: 6000 },
            { id: 632, denomination: "10.000", price: 10800 },
            { id: 633, denomination: "25.000", price: 25700 },
            { id: 634, denomination: "50.000", price: 50500 },
            { id: 635, denomination: "100.000", price: 100300 },
        ]
    },
    // --- XL ---
    {
        id: 'pulsa-xl',
        name: "Pulsa XL",
        image: "/assets/Pulsa/xl.jpeg",
        category: "Pulsa",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0878xxxxxxx",
        instructions: "Isi ulang pulsa reguler untuk nomor XL. Termasuk XL Prabayar dan Prioritas.",
        prices: [
            { id: 641, denomination: "5.000", price: 6000 },
            { id: 642, denomination: "10.000", price: 10800 },
            { id: 643, denomination: "25.000", price: 25700 },
            { id: 644, denomination: "50.000", price: 50500 },
            { id: 645, denomination: "100.000", price: 100300 },
        ]
    },
    // --- INDOSAT (IM3, Mentari) ---
    {
        id: 'pulsa-indosat',
        name: "Pulsa Indosat",
        image: "/assets/Pulsa/indosat.jpeg",
        category: "Pulsa",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0857xxxxxxx",
        instructions: "Isi ulang pulsa reguler untuk IM3 Ooredoo atau Mentari.",
        prices: [
            { id: 651, denomination: "5.000", price: 6000 },
            { id: 652, denomination: "10.000", price: 10800 },
            { id: 653, denomination: "25.000", price: 25700 },
            { id: 654, denomination: "50.000", price: 50500 },
            { id: 655, denomination: "100.000", price: 100300 },
        ]
    },
    // --- by.U ---
    {
        id: 'pulsa-byu',
        name: "Pulsa by.U",
        image: "/assets/Pulsa/byu.jpeg",
        category: "Pulsa",
        inputType: "Nomor Telepon",
        inputPlaceholder: "Cth: 0851xxxxxxx (Nomor by.U)",
        instructions: "Isi ulang pulsa by.U. Pulsa ini dapat digunakan untuk membeli kuota atau layanan by.U lainnya.",
        prices: [
            { id: 661, denomination: "10.000", price: 10800 },
            { id: 662, denomination: "25.000", price: 25700 },
            { id: 663, denomination: "50.000", price: 50500 },
        ]
    },
];

export default pulsaData;