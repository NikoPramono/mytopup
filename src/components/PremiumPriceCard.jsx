import { Link } from "react-router-dom";
import { Star } from 'lucide-react'; 

/**
 * Fungsi utilitas untuk memformat angka menjadi string mata uang Rupiah.
 */
const formatRupiah = (amount) => {
    // Menghapus karakter non-digit dan mengonversi ke float, jika input adalah string
    const number = typeof amount === 'string' 
        ? parseFloat(amount.replace(/[^0-9]/g, '')) 
        : amount;
    
    if (isNaN(number)) return amount;

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    // Menggunakan Intl.NumberFormat untuk format Rp dan titik ribuan, lalu menambahkan spasi setelah 'Rp'
    return formatter.format(number).replace('Rp', 'Rp ');
};

// =========================================================
// Definisi Komponen StarRating
// =========================================================
const StarRating = ({ rating, size = "text-base" }) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    // Helper untuk render bintang
    const renderStars = (count, isFilled) => 
        Array.from({ length: count }).map((_, i) => (
            <Star 
                key={`${isFilled ? 'filled' : 'empty'}-${i}`} 
                className={`w-4 h-4 ${size} ${isFilled ? 'text-[#FBBF24]' : 'text-gray-300'}`} 
                fill={isFilled ? '#FBBF24' : 'none'}
                stroke={isFilled ? '#FBBF24' : '#D1D5DB'}
            />
        ));

    return (
        <div className="flex items-center space-x-0.5">
            {renderStars(fullStars, true)}
            {renderStars(emptyStars, false)}
        </div>
    );
};
// =========================================================


export default function PremiumPriceCard({ premium }) {
    const { 
        id, 
        name, // Nama Game Utama
        image, 
        newPrice, 
        oldPrice, 
        rating, 
        seller, 
        premiumItem // Item Premium
    } = premium // Menghapus 'gameName' dari destructuring

    return (
        <Link 
            to={`/premium/${id}`} 
            // PERUBAHAN: Menambahkan w-full eksplisit dan memastikan responsifitas (jika tidak ada batasan lain)
            // Walaupun 'block' secara default w-full, penambahan ini memperjelas.
            className="block w-full border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-[#F3F3F3]"
        >
            
            {/* Image Section - UKURAN TINGGI DIPERBESAR DARI h-56 MENJADI h-64 */}
            <div className="relative h-64 w-full overflow-hidden"> 
                
                {/* 🏷️ WRAPPER BADGE: HOT ITEM & DISKON 10% */}
                <div className="absolute top-0 right-0 flex space-x-1 z-10">

                    <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">
                        10%
                    </div>

                </div>
                
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Content Section */}
            <div className="p-4">
                
                {/* 🎯 WRAPPER TINGGI TETAP (h-[105px]) untuk semua konten deskriptif 🎯 */}
                <div className="h-[105px]"> 
                
                    {/* Nama Produk Utama - Dibagi menjadi dua baris */}
                    <h3 className="text-gray-900 line-clamp-2 min-h-[40px] leading-tight">
                        {/* LINE 1: NAMA GAME UTAMA (Menggunakan 'name') */}
                        <span className="font-bold text-base block text-[#191A23]">
                            {name}
                        </span>
                        {/* LINE 2: ITEM PREMIUM (Menggunakan 'premiumItem') */}
                        <span className="font-normal text-sm block text-gray-700">
                            {premiumItem}
                        </span>
                    </h3>

                    {/* ⭐️ Rating Visual + Angka */}
                    <div className="flex items-center mt-2">
                        <StarRating rating={rating} size="text-sm" /> 
                        <span className="text-sm text-gray-700 font-bold ml-1.5">
                            {rating}
                        </span>
                    </div>

                    {/* 👤 Nama Penjual - TRUNCATE */}
                    <p className="text-sm text-gray-800 truncate mt-1">
                        <span className="font-semibold text-[#191A23]">{seller}</span>
                    </p>
                
                </div> {/* 🎯 TUTUP WRAPPER TINGGI TETAP 🎯 */}

                {/* Price Section with Logo - Tambahkan mt-3 di sini untuk jarak */}
                <div className="flex flex-col mt-3">
                    {/* OLD PRICE - Diformat dengan formatRupiah */}
                    <span className="text-sm text-gray-400 line-through">
                        {formatRupiah(oldPrice)}
                    </span>
                    
                    {/* HARGA BARU + LOGO KECIL - Diformat dengan formatRupiah */}
                    <div className="flex items-center space-x-7">
                        <span className="text-lg font-extrabold text-[#191A23] text-green-600">
                            {formatRupiah(newPrice)}
                        </span>
                        
                        <img
                            src={"assets/nexcent.png"}
                            alt="Logo Partner"
                            className="h-3 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}