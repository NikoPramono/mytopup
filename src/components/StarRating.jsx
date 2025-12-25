// src/components/StarRating.jsx
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

/**
 * Komponen untuk menampilkan rating numerik (misal 4.2) sebagai 5 bintang ikonik.
 *
 * @param {number} rating - Nilai rating (0.0 hingga 5.0)
 * @param {string} size - Ukuran ikon bintang (misal "text-lg", "text-sm")
 */
export default function StarRating({ rating, size = "text-md" }) {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    // 1. Tambahkan bintang penuh (Filled Stars)
    for (let i = 0; i < filledStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    // 2. Tambahkan setengah bintang (Half Star)
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // 3. Tambahkan bintang kosong (Empty Stars)
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return (
        <div className={`flex items-center space-x-[2px] ${size}`}>
            {stars}
        </div>
    );
}

// Catatan: Pastikan Anda telah menginstal 'react-icons': npm install react-icons