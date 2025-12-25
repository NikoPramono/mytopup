// tailwind.config.js

// Import defaultTheme jika Anda ingin menambahkan font kustom di samping font default lainnya
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#B9FF66",
        "brand-dark": "#191A23",
        // Warna Kartu Anda sekarang menggunakan F3F3F3, kita beri nama bg-card
        "bg-card": "#F3F3F3", 
        // Tambahkan warna untuk Latar Belakang Halaman global (F5F5F5)
        "bg-page": "#F5F5F5", 
        // CATATAN: 'brand-light' yang lama (#F3F3F3) sekarang berganti nama menjadi 'bg-card'
      },
      fontFamily: {
        // GANTI Inter dengan Space Grotesk
        // Ini akan membuat class 'font-primary' menggunakan Space Grotesk
        primary: ["Space Grotesk", ...defaultTheme.fontFamily.sans], 
      },
      fontSize: {
        h1: ["40px", "48px"],
        h2: ["32px", "40px"],
        h3: ["24px", "32px"],
        h4: ["18px", "26px"],
        p: ["16px", "24px"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "30px",
      },
      boxShadow: {
        card: "6px 6px 0 #191A23", // shadow UI kamu
      },
    },
  },
  plugins: [],
};