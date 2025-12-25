import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full bg-white py-20 font-primary">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-p uppercase tracking-wide text-brand-dark/60 mb-3">
            Payment Point Online Bank Solution
          </p>

          <h1 className="text-h1 font-bold leading-tight text-brand-dark">
            Solusi Pembayaran Digital{" "}
            <span className="bg-brand-green px-2 border-2 border-brand-dark rounded-xl2 inline-block shadow-[4px_4px_0_0_#191A23]">
              Aman & Mudah
            </span>
          </h1>

          <p className="text-p text-brand-dark/70 mt-6 max-w-md">
            Hadir dengan layanan pembayaran PPOB lengkap, cepat, dan terpercaya
            bagi kebutuhan digital Anda.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mt-8">

            {/* PRIMARY BTN */}
            <Link
              to="/login"
              className="font-semibold text-p px-6 py-3 bg-brand-green border-2 border-brand-dark rounded-xl2 shadow-[4px_4px_0_0_#191A23] hover:-translate-y-1 active:translate-y-0 transition-all"
            >
              Mulai Transaksi
            </Link>

            {/* SECONDARY BTN */}
            <Link
              to="/tentang-kami"
              className="font-semibold text-p px-6 py-3 bg-white border-2 border-brand-dark rounded-xl2 shadow-[4px_4px_0_0_#191A23] hover:-translate-y-1 active:translate-y-0 transition-all"
            >
              Tentang Kami
            </Link>

          </div>
        </div>

        {/* RIGHT STATISTICS CARD */}
        <div className="bg-white border-2 border-brand-dark rounded-xl3 p-8 grid grid-cols-2 gap-8 shadow-[8px_8px_0_0_#191A23]">

          <div className="text-center">
            <h3 className="text-h2 font-bold text-brand-dark">24/7</h3>
            <p className="text-p text-brand-dark/70 mt-1">Layanan Online</p>
          </div>

          <div className="text-center">
            <h3 className="text-h2 font-bold text-brand-dark">100%</h3>
            <p className="text-p text-brand-dark/70 mt-1">Aman & Terpercaya</p>
          </div>

          <div className="text-center">
            <h3 className="text-h2 font-bold text-brand-dark">Fresh</h3>
            <p className="text-p text-brand-dark/70 mt-1">Teknologi Terbaru</p>
          </div>

          <div className="text-center">
            <h3 className="text-h2 font-bold text-brand-dark">50+</h3>
            <p className="text-p text-brand-dark/70 mt-1">Produk Layanan</p>
          </div>

        </div>

      </div>
    </section>
  );
}
