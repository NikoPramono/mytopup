import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  // Perbaikan utama: Mencegah TypeError dengan memastikan properti 'game' dan 'id' ada.
  if (!game || !game.id) {
    return null;
  }
  
  return (
    <Link to={`/game/${game.id}`}>
      <div
        className="
          group
          flex justify-between items-center
          
          bg-bg-card rounded-3xl
          
          border-2 border-brand-dark
          shadow-[6px_6px_0_0_#191A23]
          hover:shadow-[8px_8px_0_0_#191A23]
          transition-all duration-200
          p-5 md:p-6
          
          /* 1. KOTAK UTAMA: Berubah menjadi warna hijau solid saat di-hover (sesuai gambar) */
          hover:bg-brand-green 
        "
      >
        {/* LEFT TEXT */}
        <div className="flex flex-col w-1/2 bg-transparent rounded-2xl">
          
          {/* TITLE WITH BADGE */}
          <h3 className="text-lg md:text-xl font-semibold mb-6">
            <span
              className="
                /* Warna Awal */
                bg-brand-green text-brand-dark
                px-3 py-1
                border-2 border-brand-dark
                rounded-xl2
                shadow-[4px_4px_0_0_#191A23]
                inline-block
                transition-all duration-200
                
                /* 2. BADGE JUDUL: Berubah menjadi putih saat di-hover (sesuai gambar) */
                group-hover:bg-white
              "
            >
              {game.name}
            </span>
          </h3>

          {/* CTA TEXT WITH HOVER EFFECT */}
          <div
            className="
              flex items-center gap-2
              text-brand-dark
              font-medium
              transition-all duration-200
            "
          >
            <span className="text-sm md:text-base">Top Up Sekarang</span>

            {/* Panah dengan lingkaran dan hover scale */}
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className="
                absolute w-6 h-6 rounded-full
                
                /* 3. LINGKARAN CTA: Latar belakang berubah hitam solid saat di-hover */
                bg-[#B9FF66]/30 
                opacity-0
                transition-all duration-300
                group-hover:opacity-100
                group-hover:scale-125
                group-hover:bg-brand-dark /* Latar belakang hitam */
              "></span>
              <span className="
                relative text-xl transition-transform duration-300
                group-hover:scale-125
                
                /* 4. PANAH CTA: Warna teks berubah menjadi putih saat di-hover */
                group-hover:text-white 
              ">
                ↗
              </span>
            </span>
          </div>
        </div>

        {/* GAME IMAGE */}
        <div className="w-1/2 pl-4 flex justify-end">
          <img
            src={game.image}
            alt={game.name}
            className="
              w-28 h-28 md:w-36 md:h-36
              object-cover rounded-2xl
              shadow-[4px_4px_0_0_#191A23]
            "
          />
        </div>
      </div>
    </Link>
  );
}