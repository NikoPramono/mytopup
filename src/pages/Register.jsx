import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Mail, Edit } from "lucide-react";
import Logo from "../assets/nexcent.png"; // ganti path sesuai lokasi

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-lg text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="logo" className="h-16 w-auto object-contain" />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800">
          Buat Akun Baru
        </h2>
        <p className="text-gray-500 mt-1 mb-8 text-sm">
          Daftar untuk mulai menggunakan PPOB
        </p>

        {/* FORM */}
        <form className="space-y-5">

          {/* Nama Lengkap */}
          <div className="relative">
            <Edit className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              required
            />
          </div>

          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Konfirmasi Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Konfirmasi Password"
              className="w-full border border-gray-300 rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mr-2 accent-[#B9FF66]"
              required
            />
            Saya setuju dengan{" "}
            <Link
              to="/terms"
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#B9FF66] to-black font-semibold mx-1"
            >
              Terms and Conditions
            </Link>
            dan
            <Link
              to="/privacy"
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#B9FF66] to-black font-semibold ml-1"
            >
              Privacy Policy
            </Link>
          </div>

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            disabled={!agree}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              agree
                ? "bg-[#B9FF66] text-[#191A23] hover:brightness-110"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Daftar →
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6 text-gray-400 text-sm">
          <hr className="flex-1 border-gray-300" />
          Atau
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* LOGIN LINK */}
        <p className="text-gray-600 text-sm">
          Sudah punya akun?
          <Link
            to="/login"
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#B9FF66] to-black font-semibold ml-1"
          >
            Masuk Sekarang
          </Link>
        </p>

        {/* BACK TO HOME */}
        <Link
          to="/"
          className="block mt-6 text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#B9FF66] to-black font-semibold"
        >
          ← Kembali ke beranda
        </Link>
      </div>
    </div>
  );
}
