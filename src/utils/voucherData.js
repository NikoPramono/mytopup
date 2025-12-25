const voucherData = [
    // --- Kategori: Voucher Game / Top-Up Digital ---
    {
        id: 'voucher-pubg',
        name: "PUBG Mobile UC",
        image: "/assets/Voucher/pubg.jpeg", // Contoh: PUBG
        category: "Voucher Game",
        inputType: "ID Pemain PUBG",
        inputPlaceholder: "Cth: 512xxxxxxx",
        instructions: "Isi ulang Unknown Cash (UC) PUBG Mobile.",
        prices: [
            { id: 1001, denomination: "60 UC", price: 17000 },
        ]
    },
    {
        id: 'voucher-steam',
        name: "Steam Wallet (IDR)",
        image: "/assets/Voucher/steam.jpeg", // Contoh: Steam
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Kode Steam Wallet untuk membeli game di Steam.",
        prices: [
            { id: 1011, denomination: "Rp 12.000", price: 13000 },
        ]
    },
    {
        id: 'voucher-unipin',
        name: "UniPin Voucher",
        image: "/assets/Voucher/unipin.jpeg", // Contoh: UniPin
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Kode UniPin dikirim ke email, dapat digunakan untuk berbagai game.",
        prices: [
            { id: 1021, denomination: "10.000 UniPin Credits", price: 10500 },
        ]
    },
    {
        id: 'voucher-razergold',
        name: "Razer Gold",
        image: "/assets/Voucher/razergold.jpeg", // Contoh: Razer Gold
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Kode Razer Gold dikirim ke email.",
        prices: [
            { id: 1031, denomination: "Rp 50.000", price: 51000 },
        ]
    },
    {
        id: 'voucher-riotcash',
        name: "Riot Cash",
        image: "/assets/Voucher/riotgames.jpeg", // Contoh: Riot Games
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk game Riot Games (VALORANT, LoL).",
        prices: [
            { id: 1033, denomination: "Rp 100.000", price: 102000 },
        ]
    },
    {
        id: 'voucher-battlenet',
        name: "Battle.net Gift Card",
        image: "/assets/Voucher/battlenet.jpeg", // Contoh: Battle.net
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk game Blizzard/Activision di Battle.net.",
        prices: [
            { id: 1034, denomination: "Rp 100.000", price: 103000 },
        ]
    },
    {
        id: 'voucher-roblox',
        name: "Roblox Robux",
        image: "/assets/Voucher/roblox.jpeg", // Contoh: Roblox
        category: "Voucher Game",
        inputType: "ID Pemain Roblox",
        inputPlaceholder: "Cth: user_roblox",
        instructions: "Isi ulang Robux, mata uang virtual Roblox.",
        prices: [
            { id: 1035, denomination: "80 Robux", price: 15000 },
        ]
    },
    {
        id: 'voucher-gameon',
        name: "Game On Credits",
        image: "/assets/Voucher/gameon.jpeg", // Contoh: Game On
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher Game On Credits.",
        prices: [
            { id: 1036, denomination: "5.000 Credits", price: 5500 },
        ]
    },
    {
        id: 'voucher-wavegame',
        name: "Wave Game Voucher",
        image: "/assets/Voucher/wavegame.jpeg", // Contoh: Wave Game
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk game Wave Game.",
        prices: [
            { id: 1037, denomination: "10.000 WGC", price: 10500 },
        ]
    },
    {
        id: 'voucher-karma',
        name: "Karma Koin",
        image: "/assets/Voucher/karmakoin.jpeg", // Contoh: Karma Koin
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Kode Karma Koin dikirim ke email.",
        prices: [
            { id: 1038, denomination: "$10 USD", price: 155000 },
        ]
    },
    
    // --- Kategori: Voucher Retail & E-commerce ---
    {
        id: 'voucher-alfamart',
        name: "Alfamart A-Voucher",
        image: "/assets/Voucher/alfamart.jpeg", // Contoh: Alfamart
        category: "Voucher Retail",
        inputType: "Nomor HP / Email",
        inputPlaceholder: "Cth: 0812xxxxxxx",
        instructions: "Voucher belanja Alfamart.",
        prices: [
            { id: 1071, denomination: "Rp 25.000", price: 26000 },
        ]
    },
    {
        id: 'voucher-indomaret',
        name: "Indomaret Voucher",
        image: "/assets/Voucher/indomaret.jpeg", // Contoh: Indomaret
        category: "Voucher Retail",
        inputType: "Nomor HP / Email",
        inputPlaceholder: "Cth: 0812xxxxxxx",
        instructions: "Voucher belanja Indomaret.",
        prices: [
            { id: 1073, denomination: "Rp 25.000", price: 26000 },
        ]
    },
    {
        id: 'voucher-grab',
        name: "Grab Gift Voucher",
        image: "/assets/Voucher/grab.jpeg", // Contoh: Grab
        category: "Voucher E-Commerce",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher diskon untuk layanan Grab (Food, Bike, Car).",
        prices: [
            { id: 1081, denomination: "Rp 25.000", price: 25500 },
        ]
    },
    {
        id: 'voucher-tokopedia',
        name: "Tokopedia Gift Card",
        image: "/assets/Voucher/tokopedia.jpeg", // Contoh: Tokopedia
        category: "Voucher E-Commerce",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher belanja di Tokopedia.",
        prices: [
            { id: 1083, denomination: "Rp 50.000", price: 51000 },
        ]
    },

    // --- Kategori: Voucher Konsol/Platform/Aplikasi ---
    {
        id: 'voucher-spotify',
        name: "Spotify Premium",
        image: "/assets/Voucher/spotify.jpeg", // Contoh: Spotify
        category: "Voucher Aplikasi",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher langganan Spotify Premium.",
        prices: [
            { id: 1041, denomination: "1 Bulan", price: 55000 },
        ]
    },
    {
        id: 'voucher-googleplay',
        name: "Google Play Gift Card (ID)",
        image: "/assets/Voucher/googleplay.jpeg", // Contoh: Google Play
        category: "Voucher Aplikasi",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Kode voucher untuk di-redeem di Google Play Store.",
        prices: [
            { id: 1051, denomination: "Rp 50.000", price: 52000 },
        ]
    },
    {
        id: 'voucher-playstation',
        name: "PlayStation Store Wallet",
        image: "/assets/Voucher/playstation.jpeg", // Contoh: PlayStation
        category: "Voucher Konsol",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk isi saldo PlayStation Store (region Indonesia).",
        prices: [
            { id: 1061, denomination: "Rp 100.000", price: 105000 },
        ]
    },
    {
        id: 'voucher-nintendo',
        name: "Nintendo eShop Card",
        image: "/assets/Voucher/nintendo.jpeg", // Contoh: Nintendo
        category: "Voucher Konsol",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk isi saldo Nintendo eShop.",
        prices: [
            { id: 1063, denomination: "Rp 100.000", price: 105000 },
        ]
    },
    {
        id: 'voucher-xbox',
        name: "Xbox Live Gift Card",
        image: "/assets/Voucher/xbox.jpeg", // Contoh: XBOX
        category: "Voucher Konsol",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk isi saldo Xbox Store.",
        prices: [
            { id: 1064, denomination: "Rp 150.000", price: 155000 },
        ]
    },
    {
        id: 'voucher-itunes',
        name: "iTunes Gift Card",
        image: "/assets/Voucher/itunes.jpeg", // Contoh: iTunes/Apple
        category: "Voucher Aplikasi",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk App Store/iTunes Store.",
        prices: [
            { id: 1065, denomination: "Rp 100.000", price: 105000 },
        ]
    },
    
    // --- Kategori: Voucher Layanan & Utility Lainnya ---
    {
        id: 'voucher-wifiid',
        name: "Wi-Fi.id Voucher",
        image: "/assets/Voucher/wifiid.jpeg", // Contoh: WiFi ID
        category: "Voucher Utility",
        inputType: "Nomor HP / Email",
        inputPlaceholder: "Cth: 0812xxxxxxx",
        instructions: "Voucher akses internet Wi-Fi.id.",
        prices: [
            { id: 1091, denomination: "1 Hari", price: 6000 },
        ]
    },
    {
        id: 'voucher-emeterai',
        name: "e-Meterai",
        image: "/assets/Voucher/emeterai.jpeg", // Contoh: e-Meterai
        category: "Voucher Utility",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Pembelian e-Meterai resmi.",
        prices: [
            { id: 1092, denomination: "1 Meterai", price: 11000 },
        ]
    },
    {
        id: 'voucher-hotelmurah',
        name: "Hotelmurah Voucher",
        image: "/assets/Voucher/hotelmurah.jpeg", // Contoh: HOTELMURAH
        category: "Voucher Travel",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher diskon untuk pemesanan Hotelmurah.",
        prices: [
            { id: 1093, denomination: "Rp 50.000", price: 51000 },
        ]
    },
    {
        id: 'voucher-traveloka',
        name: "Traveloka E-Voucher",
        image: "/assets/Voucher/traveloka.jpeg", // Contoh: Traveloka
        category: "Voucher Travel",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "E-Voucher diskon untuk layanan Traveloka.",
        prices: [
            { id: 1094, denomination: "Rp 50.000", price: 51000 },
        ]
    },
    {
        id: 'voucher-megaxus',
        name: "Megaxus Voucher",
        image: "/assets/Voucher/megaxus.jpeg", // Contoh: MEGAXUS
        category: "Voucher Game", // Masuk ke Game karena biasanya untuk game Megaxus
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk game Megaxus.",
        prices: [
            { id: 1095, denomination: "10.000 MI-Cash", price: 10500 },
        ]
    },
    {
        id: 'voucher-dotaauto',
        name: "Dota Auto Chess Candy",
        image: "/assets/Voucher/dotaautochess.jpeg", // Contoh: Dota Auto Chess
        category: "Voucher Game",
        inputType: "ID Pemain",
        inputPlaceholder: "Cth: 12345678",
        instructions: "Isi ulang Candy untuk Dota Auto Chess.",
        prices: [
            { id: 1096, denomination: "100 Candy", price: 10500 },
        ]
    },
    {
        id: 'voucher-imvu',
        name: "IMVU Credits",
        image: "/assets/Voucher/imvu.jpeg", // Contoh: IMVU
        category: "Voucher Aplikasi",
        inputType: "ID Pengguna IMVU",
        inputPlaceholder: "Cth: imvu_user",
        instructions: "Isi ulang Credits untuk IMVU.",
        prices: [
            { id: 1097, denomination: "5.000 Credits", price: 55000 },
        ]
    },
    {
        id: 'voucher-map',
        name: "MAP E-Gift Voucher",
        image: "/assets/Voucher/map.jpeg", // Contoh: MAP
        category: "Voucher Retail",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher belanja MAP (Matahari Department Store).",
        prices: [
            { id: 1098, denomination: "Rp 100.000", price: 105000 },
        ]
    },
    {
        id: 'voucher-playwith',
        name: "Playwith Interactive",
        image: "/assets/Voucher/playwith.jpeg", // Contoh: Playwith
        category: "Voucher Game",
        inputType: "Email",
        inputPlaceholder: "Cth: user@email.com",
        instructions: "Voucher untuk game Playwith Interactive.",
        prices: [
            { id: 1099, denomination: "10.000 Points", price: 10500 },
        ]
    },
];

export default voucherData;