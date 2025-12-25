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
          <div className="flex flex-wrap justify-start md:justify-end items-center gap-3 md:gap-6 pt-4 md:pt-0">
            <Link className="whitespace-nowrap border-b-2 border-[#b9ff66] transition" to="/tentang-kami">Tentang Kami</Link>
            <Link className="whitespace-nowrap border-b-2 border-[#b9ff66] transition" to="/layanan-kami">Layanan Kami</Link>
            <Link className="whitespace-nowrap border-b-2 border-[#b9ff66] transition" to="/layanan-kami">Syarat & Ketentuan</Link>
            <Link className="whitespace-nowrap border-b-2 border-[#b9ff66] transition" to="/layanan-kami">Kebijakan Privasi</Link>
            <Link className="whitespace-nowrap border-b-2 border-[#b9ff66] transition" to="/layanan-kami">Partnership</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 w-full"></div>

        {/* Baris 2: Deskripsi + Kontak + Jam */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 mt-4">

          {/* Deskripsi */}
          <div className="md:w-1/3 text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>

          {/* Kontak */}
          <div className="md:w-1/3 text-gray-300">
            <h4 className="flex items-center gap-2 mb-2 text-base font-bold text-white">
              <span className="px-2 py-1 bg-[#b9ff66] text-black rounded-full text-xs">Kontak Kami</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <FiMapPin size={iconSize} className="mt-1 flex-shrink-0" /> 
                <span>Address: Jalan Utama I No.1A Kota Sembarang, Daerah Kabupaten Wilayah Lainnya 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={iconSize} className="flex-shrink-0" /> Phone: 123-456-7890
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={iconSize} className="flex-shrink-0" /> Email: info@email.com
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="md:w-1/3 text-gray-300">
            <h4 className="flex items-center gap-2 mb-2 text-base font-bold text-white">
              <span className="px-2 py-1 bg-[#b9ff66] text-black rounded-full text-xs">
                Jam Operasional
              </span>
            </h4>
            <div className="flex items-start gap-2">
              <FiClock size={iconSize} className="mt-1 flex-shrink-0" />
              <ul className="space-y-2 text-sm">
                <li>Senin - Jumat: 08.00 - 17.00</li>
                <li>Sabtu: 08.00 - 15.00</li>
                <li>Minggu: Tutup</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center md:text-left text-gray-400">
          © {new Date().getFullYear()} Nexcent. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
