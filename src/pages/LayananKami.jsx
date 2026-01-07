import { Link } from "react-router-dom";
import {
  FiPhone,
  FiZap,
  FiWifi,
  FiDroplet,
  FiMail,
  FiMapPin,
  FiLock,
  FiClock,
  FiDollarSign,
  FiHeadphones,
  FiGlobe,
  FiTrendingUp,
  FiFileText,
  FiTv
} from "react-icons/fi";

export default function LayananKami() {
  const iconColor = "#B9FF66"; // hijau ikon
  const iconBg = "#191A23"; // lapisan gelap di belakang ikon

  const IconWrapper = ({ Icon }) => (
    <div className="bg-[#191A23] rounded-full p-3 flex items-center justify-center">
      <Icon size={28} color={iconColor} />
    </div>
  );

  return (
    <div className="pt-0 w-full">

      {/* HERO SECTION */}
      <section className="w-full bg-[#B9FF66] py-20 font-primary">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-p uppercase tracking-wide text-black/70 mb-3">
              Payment Point Online Bank Solution
            </p>
            <h1 className="text-h1 font-bold leading-tight text-black">
              Solusi Pembayaran Online{" "}
              <span className="bg-white px-2 border-2 border-black rounded-xl2 inline-block shadow-[4px_4px_0_0_#191A23] text-black">
                Aman & Mudah
              </span>
            </h1>
            <p className="text-p text-black/85 mt-6 max-w-md">
              Nikmati layanan PPOB lengkap, cepat, dan terpercaya untuk semua kebutuhan digital Anda.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex gap-4 mt-8">
              <Link
                to="/login"
                className="font-semibold text-p px-6 py-3 bg-white border-2 border-black rounded-xl2 shadow-[4px_4px_0_0_#191A23] hover:-translate-y-1 active:translate-y-0 transition-all"
              >
                Mulai Transaksi
              </Link>
              <Link
                to="/register"
                className="font-semibold text-p px-6 py-3 bg-black text-[#B9FF66] border-2 border-black rounded-xl2 shadow-[4px_4px_0_0_#191A23] hover:-translate-y-1 active:translate-y-0 transition-all"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* RIGHT STATISTICS CARD */}
          <div className="bg-white border-2 border-black rounded-xl3 p-8 grid grid-cols-2 gap-8 shadow-[8px_8px_0_0_#191A23]">
            <div className="text-center">
              <h3 className="text-h2 font-bold text-black">24/7</h3>
              <p className="text-p text-black/85 mt-1">Layanan Online</p>
            </div>
            <div className="text-center">
              <h3 className="text-h2 font-bold text-black">100%</h3>
              <p className="text-p text-black/85 mt-1">Aman & Terpercaya</p>
            </div>
            <div className="text-center">
              <h3 className="text-h2 font-bold text-black">Fresh</h3>
              <p className="text-p text-black/85 mt-1">Teknologi Terbaru</p>
            </div>
            <div className="text-center">
              <h3 className="text-h2 font-bold text-black">50+</h3>
              <p className="text-p text-black/85 mt-1">Produk Layanan</p>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN PPOB */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Layanan PPOB Lengkap</h2>
          <p className="mt-4 text-gray-600">
            Nikmati kemudahan bertransaksi dengan berbagai layanan pembayaran online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { icon: FiPhone, title: "Pulsa & Paket Data", desc: "Isi ulang pulsa dan paket data dengan cepat." },
              { icon: FiZap, title: "Token Listrik PLN", desc: "Token listrik tersedia 24/7 dengan proses cepat." },
              { icon: FiWifi, title: "Pembayaran Tagihan", desc: "Bayar PDAM, BPJS, Internet, TV Kabel, dan lainnya." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow p-6 rounded-xl flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconWrapper Icon={item.icon} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK & LAYANAN KAMI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Produk & Layanan Kami</h2>
          <p className="mt-2 text-gray-600 mb-12">
            Berbagai produk PPOB yang dapat Anda akses dengan mudah dan aman
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiPhone, title: "Pulsa & Data", items: ["Telkomsel","Indosat","XL Axiata","Tri","Smartfren"] },
              { icon: FiZap, title: "Token Listrik", items: ["PLN Prabayar","PLN Pascabayar","Cek Tagihan","Riwayat Token"] },
              { icon: FiWifi, title: "Internet", items: ["IndiHome","Biznet","MyRepublic","First Media"] },
              { icon: FiTv, title: "TV Kabel", items: ["Indovision","Transvision","K-Vision","Orange TV"] },
              { icon: FiDroplet, title: "PDAM", items: ["PDAM Jakarta","PDAM Tangerang","PDAM Bekasi","PDAM Bogor"] },
              { icon: FiFileText, title: "Lainnya", items: ["BPJS","Pajak","Multifinance","Asuransi"] },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border p-6 rounded-xl shadow-sm flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="bg-[#191A23] rounded-full p-3">
                  <item.icon size={28} color="#B9FF66" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="mt-2 text-left space-y-1">
                  {item.items.map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="bg-black text-[#B9FF66] rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">✔</span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA MEMILIH KAMI */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Mengapa Memilih Kami?</h2>
          <p className="mt-3 text-gray-600">Kami menyediakan layanan terbaik untuk kebutuhan PPOB Anda.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: FiLock, title: "Keamanan Terjamin", desc: "Sistem terenkripsi & data aman." },
              { icon: FiClock, title: "Layanan 24/7", desc: "Transaksi kapan saja tanpa batas." },
              { icon: FiDollarSign, title: "Harga Terbaik", desc: "Harga bersaing untuk semua layanan." },
              { icon: FiHeadphones, title: "Support Responsif", desc: "Tim CS siap membantu kapan pun." },
              { icon: FiGlobe, title: "Jangkauan Luas", desc: "Layanan kami menjangkau seluruh Indonesia." },
              { icon: FiTrendingUp, title: "Terus Berkembang", desc: "Inovasi berkelanjutan untuk layanan lebih baik." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="border p-6 rounded-xl shadow-sm flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconWrapper Icon={item.icon} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-center mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEKNOLOGI & KEAMANAN TERDEPAN */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Teknologi & Keamanan Terdepan</h2>
          <p className="text-gray-600 mb-10">
            Kami menggunakan teknologi terkini dan sistem keamanan berlapis untuk memastikan setiap transaksi Anda aman dan terpercaya.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FiLock, title: "SSL Encryption", desc: "Enkripsi 256-bit untuk melindungi data Anda" },
              { icon: FiClock, title: "Real-time Processing", desc: "Pemrosesan transaksi dalam hitungan detik" },
              { icon: FiWifi, title: "Cloud Infrastructure", desc: "Server cloud yang stabil dan handal" },
              { icon: FiHeadphones, title: "24/7 Monitoring", desc: "Pemantauan sistem sepanjang waktu" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="border p-6 rounded-xl shadow-sm flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconWrapper Icon={item.icon} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-center mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MITRA TERPERCAYA */}
      <section className="bg-[#B9FF66] text-black py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Mitra Terpercaya</h2>
          <p className="opacity-90 mb-10">Kami bekerja sama dengan berbagai provider besar.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {[
              { icon: FiPhone, title: "Telkomsel", desc: "Provider seluler terbesar di Indonesia" },
              { icon: FiZap, title: "PLN", desc: "Penyedia listrik nasional" },
              { icon: FiWifi, title: "IndiHome", desc: "Layanan internet & TV kabel" },
              { icon: FiDroplet, title: "PDAM", desc: "Penyedia air minum lokal" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 border-black p-6 rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconWrapper Icon={item.icon} />
                <div className="text-lg font-semibold">{item.title}</div>
                <p className="text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUBUNGI KAMI */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiPhone, title: "Telepon", desc: "08971727707" },
              { icon: FiMail, title: "Email", desc: "ptkodenusateknobuana@gmail.com" },
              { icon: FiMapPin, title: "Alamat", desc: "Next Office, Menara Palma Lantai 22 Unit 22 - 06, JL.H.R Rasuna Said Kavling VI No.9 Blok X2, Kuningan Timur, Kec. Setiabudi, Jakarta Selatan, 12950" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 border p-6 rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconWrapper Icon={item.icon} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN LAYANAN + KOTAK ICON */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Keunggulan Layanan Kami</h2>
            <p className="text-gray-600 mb-6">
              Dengan pengalaman bertahun-tahun di industri pembayaran digital, kami berkomitmen memberikan layanan terbaik untuk Anda.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-left">
              {[
                "Transaksi aman dan terpercaya",
                "Harga kompetitif dan transparan",
                "Layanan 24/7 tanpa henti",
                "Proses cepat dan mudah",
                "Customer service responsif",
                "Berbagai metode pembayaran"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <span className="bg-black p-1 rounded-full text-[#B9FF66] font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-8">
            {[
              { icon: FiLock, title: "Keamanan", desc: "Terjamin" },
              { icon: FiClock, title: "Proses", desc: "Instan" },
              { icon: FiHeadphones, title: "Support", desc: "24/7" },
              { icon: FiDollarSign, title: "Harga", desc: "Terbaik" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="border p-6 rounded-xl shadow-sm flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconWrapper Icon={item.icon} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-center mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIAP MEMULAI TRANSAKSI */}
      <section className="bg-[#B9FF66] py-20 px-6 text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Siap Memulai Transaksi?</h3>
          <p className="text-black mb-6">
            Bergabunglah dengan ribuan pengguna yang telah mempercayai layanan PPOB kami. Daftar sekarang dan nikmati kemudahan bertransaksi.
          </p>
          <Link
            to="/register"
            className="inline-block font-semibold text-p px-8 py-4 bg-white border-2 border-black rounded-xl2 shadow-[4px_4px_0_0_#191A23] hover:-translate-y-1 active:translate-y-0 transition-all"
          >
            Daftar Gratis
          </Link>
        </div>
      </section>

    </div>
  );
}
