import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import Logo from "../assets/footer-logo.svg";

export default function Footer() {
  const iconSize = 20;

  return (
    <footer className="bg-[#191A23] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

        {/* Baris 1: Logo & Menu */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src={Logo} alt="logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Menu Links */}
          <div className="flex flex-wrap justify-start md:justify-end items-center gap-4 md:gap-6 pt-4 md:pt-0">
            {["Tentang Kami", "Layanan Kami", "Syarat & Ketentuan", "Kebijakan Privasi", "Partnership"].map((item) => (
              <Link 
                key={item}
                className="whitespace-nowrap text-sm md:text-base hover:text-[#b9ff66] border-b border-transparent hover:border-[#b9ff66] transition-all duration-300 pb-1" 
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 w-full"></div>

        {/* Baris 2: Deskripsi + Kontak + Jam */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4">

          {/* Deskripsi */}
          <div className="text-gray-300">
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Perusahaan</h4>
             <p className="text-sm leading-relaxed">
                PT KODENUSA TEKNO BUANA
             </p>
             <p className="mt-4 text-xs text-gray-400">
                Solusi teknologi terpercaya untuk kebutuhan bisnis dan operasional Anda.
             </p>
          </div>

          {/* Kontak */}
          <div className="text-gray-300">
            <h4 className="flex items-center gap-2 mb-4 text-base font-bold text-white">
              <span className="px-3 py-1 bg-[#b9ff66] text-black rounded-full text-xs font-black">Kontak Kami</span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin size={iconSize} className="mt-1 text-[#b9ff66] flex-shrink-0" /> 
                <span className="leading-relaxed">
                  Next Office, Menara Palma Lantai 22 Unit 22 - 06, JL.H.R Rasuna Said Kavling VI No.9 Blok X2, Kuningan Timur, Kec. Setiabudi, Jakarta Selatan, 12950
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={iconSize} className="text-[#b9ff66] flex-shrink-0" /> 
                <a href="tel:08971727707" className="hover:text-[#b9ff66] transition-colors">08971727707</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={iconSize} className="text-[#b9ff66] flex-shrink-0" /> 
                <a href="mailto:ptkodenusateknobuana@gmail.com" className="hover:text-[#b9ff66] transition-colors break-all">
                  ptkodenusateknobuana@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="text-gray-300">
            <h4 className="flex items-center gap-2 mb-4 text-base font-bold text-white">
              <span className="px-3 py-1 bg-[#b9ff66] text-black rounded-full text-xs font-black">
                Jam Operasional
              </span>
            </h4>
            <div className="flex items-start gap-3">
              <FiClock size={iconSize} className="mt-1 text-[#b9ff66] flex-shrink-0" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between gap-4"><span>Senin - Jumat</span> <span>08.00 - 17.00</span></li>
                <li className="flex justify-between gap-4"><span>Sabtu</span> <span>08.00 - 15.00</span></li>
                <li className="flex justify-between gap-4 text-red-400"><span>Minggu</span> <span>Tutup</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} PT KODENUSA TEKNO BUANA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}