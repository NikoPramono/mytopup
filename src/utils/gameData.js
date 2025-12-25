// src/utils/gameData.js

const games = [
  // --- 1. GAME DATA DASAR/POPULER ---
  {
    id: "mlbb",
    name: "Mobile Legends",
    image: "/assets/GamePopuler/mobilelegends.jpeg", 
    requiresZoneId: true,
    currencies: [
      { id: 1, label: "86 Diamonds", price: 20000 },
      { id: 2, label: "172 Diamonds", price: 38000 },
      { id: 3, label: "258 Diamonds", price: 56000 },
    ],
  },
  {
    id: "freefire",
    name: "Free Fire",
    image: "/assets/GamePopuler/freefire.jpeg", 
    requiresZoneId: false, 
    currencies: [
      { id: 1, label: "70 Diamonds", price: 10000 },
      { id: 2, label: "140 Diamonds", price: 18000 },
    ],
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    image: "/assets/GamePopuler/pubg.jpeg", 
    requiresZoneId: false, 
    currencies: [
      { id: 1, label: "60 UC", price: 15000 },
      { id: 2, label: "300 UC", price: 75000 },
    ],
  },
  { 
    id: "aov", 
    name: "Arena of Valor", 
    image: "/assets/GamePopuler/aov.jpeg", 
    requiresZoneId: true, 
    currencies: [
      { id: 1, label: "100 Vouchers", price: 25000 },
      { id: 2, label: "200 Vouchers", price: 48000 },
    ]
  },
  { 
    id: "lordsmobile", 
    name: "Lords Mobile", 
    image: "/assets/GamePopuler/lordsmobile.jpeg", 
    requiresZoneId: false, 
    currencies: [
      { id: 1, label: "Package A (Gems)", price: 50000 },
      { id: 2, label: "Package B (Gems)", price: 95000 },
    ]
  },
  { 
    id: "pointblank", 
    name: "Point Blank", 
    image: "/assets/GamePopuler/pointblank.jpeg", 
    requiresZoneId: false, 
    currencies: [
      { id: 1, label: "1200 Cash", price: 35000 },
      { id: 2, label: "3000 Cash", price: 85000 },
    ]
  },

  // --- 2. GAME LAINNYA (Lanjutan) ---
  
    // Menggunakan path /assets/Games/ 
    { id: "mangatoon", name: "MangaToon", image: "/assets/Games/mangatoon.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "1200 Koin", price: 10000 },
            { id: 2, label: "3000 Koin", price: 25000 },
        ]
    },
    { id: "bm3d", name: "Bleach Mobile 3D", image: "/assets/Games/bm3d.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "50 Soul Ticket", price: 10500 },
            { id: 2, label: "100 Soul Ticket", price: 20000 },
        ]
    },
    { id: "8ballpool", name: "8 Ball Pool", image: "/assets/Games/8ballpool.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "25 Cash", price: 25000 },
            { id: 2, label: "50 Cash", price: 45000 },
        ]
    },
    { id: "lolwr", name: "League of Legends Wild Rift", image: "/assets/Games/lolwr.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "175 Wild Cores", price: 20000 },
            { id: 2, label: "350 Wild Cores", price: 40000 },
        ]
    },
    { id: "tof", name: "Tower of Fantasy", image: "/assets/Games/tof.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "30 Tanaman", price: 15000 },
            { id: 2, label: "150 Tanaman", price: 75000 },
        ]
    },
    { id: "muorigin", name: "MU ORIGIN 3", image: "/assets/Games/muorigin.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "50 Diamond", price: 10000 },
            { id: 2, label: "100 Diamond", price: 20000 },
        ]
    },
    { id: "stumbleguys", name: "Stumble Guys", image: "/assets/Games/stumbleguys.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "250 Gems", price: 25000 },
            { id: 2, label: "500 Gems", price: 49000 },
        ]
    },
    { id: "honkaiimpact", name: "Honkai Impact 3", image: "/assets/Games/honkaiimpact.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "120 Crystals", price: 20000 },
            { id: 2, label: "390 Crystals", price: 60000 },
        ]
    },
    { id: "ragnarok", name: "Ragnarok M: Eternal Love", image: "/assets/Games/ragnarok.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "30 BCC", price: 15000 },
            { id: 2, label: "98 BCC", price: 49000 },
        ]
    },
    { id: "honorofkings", name: "Honor of Kings", image: "/assets/Games/honorofkings.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "50 Tokens", price: 10000 },
            { id: 2, label: "200 Tokens", price: 39000 },
        ]
    },
    { id: "speedd", name: "Speed Drifters", image: "/assets/Games/speedd.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "100 Diamond", price: 10000 },
            { id: 2, label: "200 Diamond", price: 20000 },
        ]
    },
    { id: "erasurgawi", name: "Era Surgawi", image: "/assets/Games/erasurgawi.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "50 Diamond", price: 10000 },
            { id: 2, label: "100 Diamond", price: 20000 },
        ]
    },
    { id: "jadedynasty", name: "Jade Dynasty: New Fantasy", image: "/assets/Games/jadedynasty.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "30 Ingot", price: 10000 },
            { id: 2, label: "100 Ingot", price: 30000 },
        ]
    },
    { id: "jadelegends", name: "Jade Legends: Immortal Realm", image: "/assets/Games/jadelegends.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "25 Jade", price: 10000 },
            { id: 2, label: "80 Jade", price: 30000 },
        ]
    },
    { id: "sausageman", name: "Sausage Man", image: "/assets/Games/sausageman.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "60 Sausage Coins", price: 10000 },
            { id: 2, label: "150 Sausage Coins", price: 25000 },
        ]
    },
    { id: "samkok", name: "Samkok: New Force", image: "/assets/Games/samkok.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "100 Gold", price: 10000 },
            { id: 2, label: "250 Gold", price: 25000 },
        ]
    },
    { id: "coc", name: "Clash of Clans", image: "/assets/Games/coc.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "500 Gems", price: 75000 },
            { id: 2, label: "1200 Gems", price: 150000 },
        ]
    },
    { id: "gov", name: "Goddess of Victory Nikke", image: "/assets/Games/gov.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "100 Gems", price: 15000 },
            { id: 2, label: "330 Gems", price: 49000 },
        ]
    },
    { id: "cod", name: "Call of Duty: Mobile Garena", image: "/assets/Games/cod.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "60 CP", price: 10000 },
            { id: 2, label: "135 CP", price: 20000 },
        ]
    },
    { id: "dragonnest", name: "Dragon Nest", image: "/assets/Games/dragonnest.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "50 Diamond", price: 10000 },
            { id: 2, label: "100 Diamond", price: 20000 },
        ]
    },
    { id: "warewolf", name: "Werewolf-Wowgame", image: "/assets/Games/warewolf.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "100 Diamonds", price: 10000 },
            { id: 2, label: "300 Diamonds", price: 30000 },
        ]
    },
    { id: "lifeafter", name: "LifeAfter", image: "/assets/Games/lifeafter.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "60 E-Credit", price: 15000 },
            { id: 2, label: "180 E-Credit", price: 45000 },
        ]
    },
    { id: "tld", name: "The Last Dragon's Roost", image: "/assets/Games/tld.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "50 Diamond", price: 10000 },
            { id: 2, label: "100 Diamond", price: 20000 },
        ]
    },
    { id: "soo", name: "Scroll of Onmyoji", image: "/assets/Games/soo.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "50 Soul", price: 10000 },
            { id: 2, label: "100 Soul", price: 20000 },
        ]
    },
    { id: "marvel", name: "MARVEL Future Fight", image: "/assets/Games/marvel.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "100 Crystal", price: 15000 },
            { id: 2, label: "330 Crystal", price: 49000 },
        ]
    },
    { id: "hago", name: "HAGO", image: "/assets/Games/hago.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "100 Diamond", price: 10000 },
            { id: 2, label: "250 Diamond", price: 25000 },
        ]
    },
    { id: "toj", name: "Tom and Jerry: Chase", image: "/assets/Games/toj.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "100 Diamond", price: 10000 },
            { id: 2, label: "200 Diamond", price: 20000 },
        ]
    },
    { id: "opm", name: "One Punch Man: World", image: "/assets/Games/opm.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "50 Sapphire", price: 10000 },
            { id: 2, label: "100 Sapphire", price: 20000 },
        ]
    },
    { id: "honkaistarrail", name: "Honkai: Star Rail", image: "/assets/Games/honkai.jpeg", requiresZoneId: true, 
        currencies: [
            { id: 1, label: "60 Oneiric Shards", price: 15000 },
            { id: 2, label: "300 Oneiric Shards", price: 75000 },
        ]
    },
    { id: "amongus", name: "Among Us", image: "/assets/Games/amongus.jpeg", requiresZoneId: false, 
        currencies: [
            { id: 1, label: "10 Stars", price: 10000 },
            { id: 2, label: "25 Stars", price: 25000 },
        ]
    },
];

export default games;