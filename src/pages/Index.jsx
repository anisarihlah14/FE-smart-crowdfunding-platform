import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      
    
    
<nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 top-0 border-b border-slate-100 transition-all">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
                <i className="ph-fill ph-hand-heart text-primary-600 text-3xl"></i>
                <span className="text-xl font-bold tracking-tight text-slate-900">CrowdFund</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-sm font-medium text-slate-900 hover:text-primary-600 transition-colors">Beranda</Link>
                <a href="#campaigns" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Campaign</a>
                <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Tentang Kami</a>
                <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Bantuan</a>
            </div>

            
            <div className="hidden md:flex items-center space-x-3">
                <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-primary-600 px-3 py-2 transition-colors">Masuk</Link>
                <Link to="/register" className="text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors">Daftar</Link>
            </div>
            

            <div className="md:hidden flex items-center">
                <button className="text-slate-600 hover:text-slate-900 focus:outline-none">
                    <i className="ph ph-list text-2xl"></i>
                </button>
            </div>
        </div>
    </div>
</nav>


    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-primary-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm mb-6">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-slate-600">Lebih dari 1,000 Campaign Aktif</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                    Menebar Kebaikan,<br />Mewujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-emerald-700">Harapan</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    Platform penggalangan dana terpercaya (Project Kelompok 5). Bantu mereka yang membutuhkan pendidikan, biaya medis, dan pembangunan infrastruktur dengan mudah dan transparan.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a href="#campaigns" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-sm transition-all hover:shadow-md">
                        Mulai Berdonasi
                    </a>
                    <Link to="/login" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-semibold px-8 py-3.5 rounded-xl transition-all">
                        Buat Campaign
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-20">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="pt-4 md:pt-0">
                    <p className="text-3xl font-bold text-slate-900 mb-1">Rp 12.5 M+</p>
                    <p className="text-sm text-slate-500 font-medium">Donasi Terkumpul</p>
                </div>
                <div className="pt-6 md:pt-0">
                    <p className="text-3xl font-bold text-slate-900 mb-1">45.000+</p>
                    <p className="text-sm text-slate-500 font-medium">Donatur Terdaftar</p>
                </div>
                <div className="pt-6 md:pt-0">
                    <p className="text-3xl font-bold text-slate-900 mb-1">1.250+</p>
                    <p className="text-sm text-slate-500 font-medium">Campaign Berhasil</p>
                </div>
            </div>
        </div>
    </div>

    <section id="campaigns" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Campaign Mendesak</h2>
                    <p className="text-slate-500">Bantuan Anda sangat berarti bagi mereka hari ini.</p>
                </div>
                <a href="#" className="hidden sm:flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Lihat Semua <i className="ph ph-arrow-right ml-1"></i>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col transition-all duration-300 group">
                    <div className="h-52 bg-slate-200 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=60" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center shadow-sm">
                            <i className="ph-fill ph-clock-countdown mr-1"></i> Sisa 3 Hari
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs font-bold tracking-wider text-primary-600 mb-2 uppercase">Bantuan Medis</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">Bantu Biaya Operasi Jantung Dek Nisa</h3>
                        <div className="mt-auto pt-4">
                            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-3 overflow-hidden">
                                <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex justify-between text-sm mb-5">
                                <div>
                                    <p className="text-slate-500 text-xs mb-0.5">Terkumpul</p>
                                    <p className="font-bold text-slate-900">Rp 65.000.000</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-500 text-xs mb-0.5">Target</p>
                                    <p className="font-medium text-slate-700">Rp 100.000.000</p>
                                </div>
                            </div>
                            <Link to="/login" className="block w-full text-center bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-700 font-semibold py-3 rounded-xl border border-slate-200 hover:border-primary-200 transition-colors">
                                Donasi Sekarang
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col transition-all duration-300 group">
                    <div className="h-52 bg-slate-200 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=60" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs font-bold tracking-wider text-blue-600 mb-2 uppercase">Pendidikan</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">Renovasi Sekolah Dasar di Pelosok Desa</h3>
                        <div className="mt-auto pt-4">
                            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-3 overflow-hidden">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                            <div className="flex justify-between text-sm mb-5">
                                <div>
                                    <p className="text-slate-500 text-xs mb-0.5">Terkumpul</p>
                                    <p className="font-bold text-slate-900">Rp 21.000.000</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-500 text-xs mb-0.5">Target</p>
                                    <p className="font-medium text-slate-700">Rp 50.000.000</p>
                                </div>
                            </div>
                            <Link to="/login" className="block w-full text-center bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-700 font-semibold py-3 rounded-xl border border-slate-200 hover:border-primary-200 transition-colors">
                                Donasi Sekarang
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col transition-all duration-300 group">
                    <div className="h-52 bg-slate-200 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs font-bold tracking-wider text-amber-600 mb-2 uppercase">Sosial & Kemanusiaan</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">Bantuan Pangan untuk Panti Asuhan Harapan</h3>
                        <div className="mt-auto pt-4">
                            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-3 overflow-hidden">
                                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <div className="flex justify-between text-sm mb-5">
                                <div>
                                    <p className="text-slate-500 text-xs mb-0.5">Terkumpul</p>
                                    <p className="font-bold text-slate-900">Rp 8.500.000</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-500 text-xs mb-0.5">Target</p>
                                    <p className="font-medium text-slate-700">Rp 10.000.000</p>
                                </div>
                            </div>
                            <Link to="/login" className="block w-full text-center bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-700 font-semibold py-3 rounded-xl border border-slate-200 hover:border-primary-200 transition-colors">
                                Donasi Sekarang
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                    <i className="ph-fill ph-hand-heart text-primary-500 text-3xl"></i>
                    <span className="text-xl font-bold tracking-tight text-white">CrowdFund</span>
                </div>
                <p className="text-sm text-slate-400 max-w-sm">Platform crowdfunding tugas final project Kelompok 5. Membangun transparansi dan kemudahan dalam berdonasi secara digital.</p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/" className="hover:text-primary-400 transition-colors">Beranda</Link></li>
                    <li><a href="#campaigns" className="hover:text-primary-400 transition-colors">Daftar Campaign</a></li>
                    <li><Link to="/login" className="hover:text-primary-400 transition-colors">Masuk</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li>Kelompok 5</li>
                    <li>Email: <Link to="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="137a7d757c5370617c647775667d773e78767f263d707c7e">[email&#160;protected]</Link></li>
                </ul>
            </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            © 2024 Final Project Kelompok 5. All rights reserved.
        </div>
    </div>
</footer>


    

    </>
  );
};

export default Index;
