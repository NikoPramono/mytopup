const tvData = [
    // --- TV KABEL DAN PARABOLA ---
    {
        id: 'kvision-gol',
        name: "K-VISION dan GOL",
        image: "/assets/Tv/k-vision-gol.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 202xxxxxxxx",
        instructions: "Masukkan Nomor Pelanggan atau Nomor ID Receiver K-VISION Anda. Pastikan nama pelanggan sudah benar.",
        prices: [
            { id: 401, denomination: "Paket Dasar 30 Hari", price: 55000 },
            { id: 402, denomination: "Paket Keluarga 30 Hari", price: 125000 },
            { id: 403, denomination: "Paket Olahraga 7 Hari", price: 35000 },
        ]
    },
    {
        id: 'matrix-tv',
        name: "Matrix Garuda",
        image: "/assets/Tv/matrix-tv.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 310xxxxxxxx",
        instructions: "Masukkan nomor pelanggan Matrix TV. Paket ini mencakup berbagai channel hiburan.",
        prices: [
            { id: 411, denomination: "Paket Movie 30 Hari", price: 75000 },
            { id: 412, denomination: "Paket Premium 30 Hari", price: 150000 },
        ]
    },
    {
        id: 'kawan-kvision',
        name: "Kawan Kvision",
        image: "/assets/Tv/kawan-kvision.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 11xxxxxxxx",
        instructions: "Masukkan ID Kawan Kvision Anda untuk top up pulsa atau paket.",
        prices: [
            { id: 421, denomination: "Pulsa 50.000", price: 50000 },
            { id: 422, denomination: "Pulsa 100.000", price: 100000 },
        ]
    },
    {
        id: 'nex-parabola',
        name: "Nex Parabola",
        image: "/assets/Tv/nex-parabola.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 60xxxxxxxx",
        instructions: "Masukkan Nomor Chip ID Nex Parabola Anda. Saldo dapat digunakan untuk membeli paket.",
        prices: [
            { id: 431, denomination: "Paket Family 30 Hari", price: 60000 },
            { id: 432, denomination: "Paket Liga 1 7 Hari", price: 40000 },
        ]
    },
    {
        id: 'transvision',
        name: "Transvision",
        image: "/assets/Tv/transvision.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 50xxxxxxxx",
        instructions: "Masukkan Nomor Pelanggan Transvision Anda. Saldo akan otomatis masuk.",
        prices: [
            { id: 441, denomination: "Paket Silver 30 Hari", price: 89000 },
            { id: 442, denomination: "Paket Gold 30 Hari", price: 159000 },
        ]
    },
    {
        id: 'jawara-vision',
        name: "Jawara Vision",
        image: "/assets/Tv/jawara-vision.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 70xxxxxxxx",
        instructions: "Masukkan ID Pelanggan Jawara Vision Anda untuk pembelian paket.",
        prices: [
            { id: 451, denomination: "Paket Bulanan", price: 50000 },
            { id: 452, denomination: "Paket Tahunan", price: 500000 },
        ]
    },
    {
        id: 'decoder-gol',
        name: "Decoder GOL",
        image: "/assets/Tv/decoder-gol.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 20xxxxxxxx",
        instructions: "Top up voucher untuk Decoder GOL K-Vision.",
        prices: [
            { id: 461, denomination: "Voucher 50.000", price: 50000 },
            { id: 462, denomination: "Voucher 100.000", price: 100000 },
        ]
    },
    {
        id: 'tanaka-voucher',
        name: "Tanaka Voucher",
        image: "/assets/Tv/tanaka-voucher.jpeg",
        category: "TV Kabel",
        inputType: "Nomor Pelanggan",
        inputPlaceholder: "Cth: 80xxxxxxxx",
        instructions: "Isi ulang voucher receiver Tanaka Anda.",
        prices: [
            { id: 471, denomination: "Voucher 25.000", price: 25000 },
            { id: 472, denomination: "Voucher 50.000", price: 50000 },
        ]
    },
];

export default tvData;