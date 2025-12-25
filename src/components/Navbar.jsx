import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/nexcent.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md 
                    shadow-md font-primary border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-brand-dark font-medium items-center">
          <Link to="/" className="hover:text-brand-dark/60 transition">Home</Link> {/* ⬅️ Path halaman depan */}
          <Link to="/tentang-kami" className="hover:text-brand-dark/60 transition">Tentang Kami</Link>
          <Link to="/layanan-kami" className="hover:text-brand-dark/60 transition">Layanan Kami</Link>
        </div>

        {/* Login & Register */}
        <div className="hidden md:flex gap-3 items-center">
          <Link
            to="/login"
            className="px-4 py-2 border-2 border-brand-dark rounded-xl2 text-brand-dark
                       shadow-[3px_3px_0_0_#191A23] hover:-translate-y-1 transition">
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-brand-green border-2 border-brand-dark rounded-xl2
                       font-semibold text-brand-dark shadow-[3px_3px_0_0_#191A23]
                       hover:-translate-y-1 transition">
            Daftar
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-brand-dark text-3xl font-bold"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t-2 border-brand-dark py-4 px-6 font-primary">
          <div className="flex flex-col gap-4 text-brand-dark font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link> {/* ⬅️ Path halaman depan */}
            <Link to="/layanan-kami" onClick={() => setOpen(false)}>Layanan Kami</Link>
            <Link to="/tentang-kami" onClick={() => setOpen(false)}>Tentang Kami</Link>

            <hr className="my-2 border-brand-dark"/>

            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setOpen(false)}>Daftar</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
