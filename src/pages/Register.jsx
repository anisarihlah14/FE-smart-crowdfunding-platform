import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      

    <div className="absolute top-6 left-6">
        <Link to="/" className="flex items-center space-x-2 text-slate-900 hover:opacity-80 transition-opacity">
            <i className="ph-fill ph-hand-heart text-primary-600 text-3xl"></i>
            <span className="text-xl font-bold tracking-tight hidden sm:block">CrowdFund</span>
        </Link>
    </div>

    <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-10">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Buat Akun Baru</h1>
                <p className="text-sm text-slate-500">Bergabunglah untuk mulai menebar kebaikan.</p>
            </div>

            <form action="#" method="POST" className="space-y-4" id="registerForm">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Nama Lengkap</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="ph ph-user text-slate-400 text-lg"></i>
                        </div>
                        <input type="text" id="name" name="name" required className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 sm:text-sm transition-all outline-none" placeholder="Cth: Ahmad Rizki" />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="ph ph-envelope-simple text-slate-400 text-lg"></i>
                        </div>
                        <input type="email" id="email" name="email" required className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 sm:text-sm transition-all outline-none" placeholder="nama@email.com" />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="ph ph-lock-key text-slate-400 text-lg"></i>
                        </div>
                        <input type="password" id="password" name="password" required className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 sm:text-sm transition-all outline-none" placeholder="Buat password yang kuat" />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                            <i className="ph ph-eye-slash text-slate-400 hover:text-slate-600 text-lg"></i>
                        </div>
                    </div>
                </div>

                <div className="flex items-start mt-2">
                    <div className="flex items-center h-5">
                        <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded cursor-pointer" />
                    </div>
                    <div className="ml-2 text-sm">
                        <label htmlFor="terms" className="font-medium text-slate-600 cursor-pointer">
                            Saya setuju dengan <a href="#" className="text-primary-600 hover:underline">Syarat & Ketentuan</a> serta <a href="#" className="text-primary-600 hover:underline">Kebijakan Privasi</a>.
                        </label>
                    </div>
                </div>

                <button type="submit" className="w-full flex justify-center py-3 px-4 mt-2 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
                    Daftar Akun
                </button>
            </form>

            <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-white text-slate-500">Atau daftar dengan</span>
                </div>
            </div>

            <div className="mt-6 flex gap-3">
                <Link to="/auth/google" className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5 mr-2" alt="Google" />
                    Google
                </Link>
            </div>

            <p className="mt-8 text-center text-sm text-slate-600">
                Sudah punya akun?
                <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-700">Masuk di sini</Link>
            </p>
        </div>
    </div>
    

    </>
  );
};

export default Register;
