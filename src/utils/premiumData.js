const premiumGamesData = [
  {
    id: "mlbb-diamond-2010",
    name: "Mobile Legends",
    image: "/assets/PremiumPrice/mobilelegends.jpeg", 
    premiumItem: "2010 Diamond",
    newPrice: 432170, // Harga diskon (number)
    oldPrice: 479799, // Harga normal (number)
    rating: 4.2,
    seller: "Ruli Gaming dan Reload",
    isSpecialOffer: true,
    gameName: "Mobile Legends",
    requiresZoneId: true // MLBB memerlukan Zone ID
  },
  {
    id: "genshin-crystal-330",
    name: "Genshin Impact",
    image: "/assets/PremiumPrice/genshin.jpeg", 
    premiumItem: "330 Crystal",
    newPrice: 70000, 
    oldPrice: 77000, 
    rating: 4.8,
    seller: "Paimon Store",
    isSpecialOffer: true,
    gameName: "Genshin Impact",
    requiresZoneId: true // Genshin memerlukan Server (Zone) ID
  },
  {
    id: "codm-cp-800",
    name: "Call of Duty Mobile",
    image: "/assets/PremiumPrice/cod.jpeg", 
    premiumItem: "800 CP",
    newPrice: 145000, 
    oldPrice: 160000, 
    rating: 4.5,
    seller: "WarZone TopUp",
    isSpecialOffer: true,
    gameName: "Call of Duty Mobile",
    requiresZoneId: false // CODM umumnya hanya butuh User ID
  },
  {
    id: "ragnarok-m-zeny-100k", // ID unik untuk Ragnarok
    name: "Ragnarok M: Eternal Love",
    image: "/assets/PremiumPrice/ragnarok.jpeg", // Placeholder Image
    premiumItem: "100K Zeny",
    newPrice: 15000, // Contoh harga
    oldPrice: 17000, // Contoh harga lama
    rating: 4.8,
    seller: "Gepard Topup",
    isSpecialOffer: true,
    gameName: "Ragnarok M: Eternal Love",
    requiresZoneId: true // Ragnarok M memerlukan Server (Zone) ID
  },
  {
    id: "pubg-uc-16x",
    name: "PUBG Mobile",
    image: "/assets/PremiumPrice/pubg.jpeg", 
    premiumItem: "16x PUBG UC",
    newPrice: 298270,
    oldPrice: 331411,
    rating: 4.2,
    seller: "Topup Digital",
    isSpecialOffer: true,
    gameName: "PUBG Mobile",
    requiresZoneId: false // PUBG umumnya hanya butuh User ID
  },
    
// --- PENAMBAHAN CLASH OF CLANS ---
  {
    id: "coc-gem-2500", 
    name: "Clash of Clans",
    image: "/assets/PremiumPrice/coc.jpeg", // Pastikan path ini benar
    premiumItem: "2500 Gems",
    newPrice: 340000, 
    oldPrice: 380000, 
    rating: 4.7,
    seller: "Chief TopUp",
    isSpecialOffer: true,
    gameName: "Clash of Clans",
    requiresZoneId: false // CoC hanya membutuhkan Player Tag
  },

// --- PENAMBAHAN FREE FIRE ---
  {
    id: "ff-diamond-720", 
    name: "Free Fire",
    image: "/assets/PremiumPrice/freefire.jpeg", // Pastikan path ini benar
    premiumItem: "720 Diamond",
    newPrice: 105000, 
    oldPrice: 120000, 
    rating: 4.6,
    seller: "Garena TopUp",
    isSpecialOffer: true,
    gameName: "Free Fire",
    requiresZoneId: false // Free Fire hanya membutuhkan User ID
  },
];

export default premiumGamesData;