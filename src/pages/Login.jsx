// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, Lock, Eye, EyeOff, ArrowLeft, LogIn } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Logo from "../assets/nexcent.png"; 
import { useLanguage } from "../context/LanguageContext";

const DUMMY_USER = {
    username: 'user',
    password: '123',
    id: 'user-001',
};

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { lang } = useLanguage();

    const searchParams = new URLSearchParams(location.search);
    const redirectTo = searchParams.get("redirect") || "/";

    // Kamus Bahasa
    const t = {
        ID: {
            title: "MASUK AKUN",
            subtitle: "Akses dashboard PPOB Nexcent Anda",
            userPlaceholder: "Username (Tes: user)",
            passPlaceholder: "Password (Tes: 123)",
            btn: "MASUK SEKARANG",
            loading: "MEMPROSES...",
            noAccount: "Belum punya akun?",
            register: "Daftar",
            back: "Beranda",
            success: "Login Berhasil!",
            error: "Username/Password Salah!"
        },
        EN: {
            title: "LOGIN ACCOUNT",
            subtitle: "Access your Nexcent PPOB dashboard",
            userPlaceholder: "Username (Try: user)",
            passPlaceholder: "Password (Try: 123)",
            btn: "LOGIN NOW",
            loading: "PROCESSING...",
            noAccount: "No account yet?",
            register: "Register",
            back: "Home",
            success: "Login Success!",
            error: "Wrong Credentials!"
        }
    };

    const currentT = t[lang];

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const username = e.target.username.value;
        const password = e.target.password.value;

        setTimeout(() => {
            if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
                localStorage.setItem("isLoggedIn", 'true');
                localStorage.setItem("activeUserId", DUMMY_USER.id);
                localStorage.setItem("user", JSON.stringify({ username, id: DUMMY_USER.id }));
                
                toast.success(currentT.success);
                navigate(redirectTo);
            } else {
                toast.error(currentT.error);
            }
            setLoading(false);
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3] px-4 font-primary"> 
            <Toaster position="top-center" />
            
            <div className="w-full max-w-md relative">
                {/* Dekorasi Aksen Neo-Brutalism */}
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl"></div>

                <div className="relative bg-white border-4 border-black rounded-2xl p-8 md:p-10">
                    {/* LOGO */}
                    <div className="flex justify-center mb-8">
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

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Input Username */}
                        <div className="relative group">
                            <label className="block text-[10px] font-black uppercase mb-1 ml-1">Username</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                                <input
                                    name="username"
                                    type="text"
                                    placeholder={currentT.userPlaceholder}
                                    className="w-full border-4 border-black rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:bg-[#B9FF66]/10 font-bold transition-colors"
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        {/* Input Password */}
                        <div className="relative group">
                            <label className="block text-[10px] font-black uppercase mb-1 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder={currentT.passPlaceholder}
                                    className="w-full border-4 border-black rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:bg-[#B9FF66]/10 font-bold transition-colors"
                                    required
                                    disabled={loading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:scale-110 transition-transform"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 mt-4 rounded-xl font-black text-lg border-4 border-black shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 ${
                                loading 
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#B9FF66] text-[#191A23] hover:bg-[#a2ff3d]'
                            }`}
                        >
                            {loading ? currentT.loading : (
                                <>
                                    {currentT.btn} <LogIn size={20} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200 flex flex-col items-center gap-3">
                        <p className="text-xs font-bold text-gray-500 italic">
                            {currentT.noAccount}{" "}
                            <Link to="/register" className="text-black underline font-black uppercase hover:text-blue-600 transition-colors">
                                {currentT.register}
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