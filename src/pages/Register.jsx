import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Mail, Edit, ArrowLeft, UserPlus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Logo from "../assets/nexcent.png"; 
import { useLanguage } from "../context/LanguageContext";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { lang } = useLanguage();

    // Kamus Bahasa (Seragam dengan Login)
    const t = {
        ID: {
            title: "DAFTAR AKUN",
            subtitle: "Bergabung dengan ekosistem PPOB Nexcent",
            nameLabel: "Nama Lengkap",
            userLabel: "Username",
            emailLabel: "Email",
            passLabel: "Password",
            confirmLabel: "Konfirmasi Password",
            terms: "Saya setuju dengan Syarat & Ketentuan",
            btn: "DAFTAR SEKARANG",
            loading: "MEMPROSES...",
            hasAccount: "Sudah punya akun?",
            login: "Masuk",
            back: "Beranda",
            success: "Pendaftaran Berhasil!",
        },
        EN: {
            title: "REGISTER ACCOUNT",
            subtitle: "Join the Nexcent PPOB ecosystem",
            nameLabel: "Full Name",
            userLabel: "Username",
            emailLabel: "Email",
            passLabel: "Password",
            confirmLabel: "Confirm Password",
            terms: "I agree to the Terms & Conditions",
            btn: "REGISTER NOW",
            loading: "PROCESSING...",
            hasAccount: "Already have an account?",
            login: "Login",
            back: "Home",
            success: "Registration Success!",
        }
    };

    const currentT = t[lang];

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulasi proses pendaftaran
        setTimeout(() => {
            toast.success(currentT.success);
            navigate("/login");
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3] py-12 px-4 font-primary"> 
            <Toaster position="top-center" />
            
            <div className="w-full max-w-md relative">
                {/* Dekorasi Aksen Neo-Brutalism (Shadow kaku) */}
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl"></div>

                <div className="relative bg-white border-4 border-black rounded-2xl p-8 md:p-10">
                    {/* LOGO */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#B9FF66] border-2 border-black p-3 rotate-[-3deg] shadow-[4px_4px_0_0_#000]">
                            <img src={Logo} alt="logo" className="h-10 w-auto object-contain" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-[#191A23] uppercase tracking-tighter text-center italic leading-none">
                        {currentT.title}
                    </h2>
                    <p className="text-gray-500 mt-2 mb-8 text-sm font-bold text-center">
                        {currentT.subtitle}
                    </p>

                    <form className="space-y-4" onSubmit={handleRegister}>
                        {/* Input Nama */}
                        <div className="relative">
                            <label className="block text-[10px] font-black uppercase mb-1 ml-1">{currentT.nameLabel}</label>
                            <div className="relative">
                                <Edit className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                                <input
                                    type="text"
                                    className="w-full border-4 border-black rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-[#B9FF66]/10 font-bold transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Input Username */}
                        <div className="relative">
                            <label className="block text-[10px] font-black uppercase mb-1 ml-1">{currentT.userLabel}</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                                <input
                                    type="text"
                                    className="w-full border-4 border-black rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-[#B9FF66]/10 font-bold transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Input Email */}
                        <div className="relative">
                            <label className="block text-[10px] font-black uppercase mb-1 ml-1">{currentT.emailLabel}</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                                <input
                                    type="email"
                                    className="w-full border-4 border-black rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-[#B9FF66]/10 font-bold transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Input Password */}
                        <div className="relative">
                            <label className="block text-[10px] font-black uppercase mb-1 ml-1">{currentT.passLabel}</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full border-4 border-black rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:bg-[#B9FF66]/10 font-bold transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Konfirmasi Password */}
                        <div className="relative">
                            <label className="block text-[10px] font-black uppercase mb-1 ml-1">{currentT.confirmLabel}</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    className="w-full border-4 border-black rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:bg-[#B9FF66]/10 font-bold transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
                                >
                                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Checkbox Terms */}
                        <div className="flex items-center gap-2 px-1">
                            <input type="checkbox" id="terms" className="w-4 h-4 accent-black" required />
                            <label htmlFor="terms" className="text-[10px] font-bold text-gray-600 uppercase">
                                {currentT.terms}
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 mt-2 rounded-xl font-black text-lg border-4 border-black shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 ${
                                loading 
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#B9FF66] text-[#191A23] hover:bg-[#a2ff3d]'
                            }`}
                        >
                            {loading ? currentT.loading : (
                                <>
                                    {currentT.btn} <UserPlus size={20} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200 flex flex-col items-center gap-3">
                        <p className="text-xs font-bold text-gray-500 italic">
                            {currentT.hasAccount}{" "}
                            <Link to="/login" className="text-black underline font-black uppercase hover:text-blue-600 transition-colors">
                                {currentT.login}
                            </Link>
                        </p>
                        <Link to="/" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                            <ArrowLeft size={14} /> {currentT.back}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}