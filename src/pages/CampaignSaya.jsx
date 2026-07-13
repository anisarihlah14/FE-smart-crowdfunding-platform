import React from 'react';
import { Link } from 'react-router-dom';

const CampaignSaya = () => {
  return (
    <>
      
    
    <div className="flex h-screen overflow-hidden">
        


<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col flex-shrink-0 z-10 shadow-sm">
    <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <i className="ph-fill ph-hand-heart text-primary-600 text-3xl mr-2"></i>
        <span className="text-xl font-bold text-slate-800 tracking-tight">CrowdFund</span>
    </div>

    <div className="p-4 flex-1 overflow-y-auto">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Menu Utama</p>
        <nav className="space-y-1">
            <Link to="/dashboard" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                <i className="ph ph-squares-four text-xl mr-3"></i> Dashboard
            </Link>
            <Link to="/buat-campaign" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                <i className="ph ph-plus-circle text-xl mr-3"></i> Buat Campaign
            </Link>
            <Link to="/campaign-saya" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors bg-primary-50 text-primary-700">
                <i className="ph ph-megaphone text-xl mr-3"></i> Campaign Saya
            </Link>
            <Link to="/riwayat-donasi" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                <i className="ph ph-wallet text-xl mr-3"></i> Riwayat Donasi
            </Link>
        </nav>

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-4 px-2">Pengaturan</p>
        <nav className="space-y-1">
            <Link to="/pengaturan-sistem" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                <i className="ph ph-gear text-xl mr-3"></i> Pengaturan Sistem
            </Link>
            
        </nav>
    </div>

    <div className="p-4 border-t border-slate-200">
        <div className="flex items-center w-full p-2 rounded-lg">
            <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm mr-3">
                <span>BS</span>
            </div>
            <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Profil Saya</p>
                <p className="text-xs text-slate-500">Budi Santoso</p>
            </div>
        </div>
        <Link to="/logout" className="mt-2 block text-xs font-semibold text-slate-500 hover:text-primary-600">Logout</Link>
    </div>
</aside>


        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shadow-sm">
    <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
        <i className="ph ph-list text-2xl"></i>
    </button>

    <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-96 transition-all focus-within:ring-2 focus-within:ring-primary-500 focus-within:bg-white">
        <i className="ph ph-magnifying-glass text-slate-400 text-lg"></i>
        <input type="text" placeholder="Cari campaign atau donatur..." className="bg-transparent border-none focus:outline-none ml-2 w-full text-sm text-slate-700 placeholder-slate-400" />
    </div>

    <div className="flex items-center space-x-4">
        <div className="relative">
            <button id="notificationButton" className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors" aria-haspopup="true" aria-expanded="false">
                <i className="ph ph-bell text-xl"></i>
                <span id="notificationDot" className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div id="notificationPanel" className="hidden absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-20">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-900">Notifikasi</p>
                        <p className="text-xs text-slate-500">Update terbaru untuk akunmu</p>
                    </div>
                    <button id="notificationMarkRead" className="text-xs font-semibold text-primary-600 hover:text-primary-700">Tandai dibaca</button>
                </div>
                <div id="notificationList" className="max-h-72 overflow-y-auto">
                    <div className="px-4 py-3 border-b border-slate-100 bg-primary-50/40">
                        <p className="text-sm font-semibold text-slate-900">Donasi baru masuk</p>
                        <p className="text-xs text-slate-500">Rp 50.000 untuk campaign Bantuan Medis</p>
                        <p className="text-[11px] text-slate-400 mt-1">Baru saja</p>
                    </div>
                    <div className="px-4 py-3 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-900">Campaign disetujui</p>
                        <p className="text-xs text-slate-500">Campaign kamu sudah aktif di halaman utama.</p>
                        <p className="text-[11px] text-slate-400 mt-1">2 jam lalu</p>
                    </div>
                    <div className="px-4 py-3">
                        <p className="text-sm font-semibold text-slate-900">Pengingat campaign</p>
                        <p className="text-xs text-slate-500">Sisa 3 hari untuk campaign Pendidikan.</p>
                        <p className="text-[11px] text-slate-400 mt-1">Kemarin</p>
                    </div>
                </div>
                <div className="px-4 py-3 border-t border-slate-100 bg-slate-50">
                    <Link to="/riwayat-donasi" className="text-xs font-semibold text-slate-600 hover:text-primary-600">Lihat semua aktivitas</Link>
                </div>
            </div>
        </div>
        <Link to="/logout" className="text-sm font-semibold text-slate-600 hover:text-primary-600">Logout</Link>
        <div className="h-8 w-px bg-slate-200"></div>
        <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-slate-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xs">BS</div>
            <span className="text-sm font-medium text-slate-700 hidden sm:block">Budi Santoso</span>
            <i className="ph ph-caret-down text-slate-400 text-xs hidden sm:block"></i>
        </button>
    </div>
</header>


            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Campaign Saya</h1>
                        <p className="text-sm text-slate-500 mt-1">Kelola dan pantau campaign yang Anda buat.</p>
                    </div>
                    <button onclick="window.location.href='/buat-campaign'" className="mt-4 sm:mt-0 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm flex items-center justify-center space-x-2">
                        <i className="ph ph-plus-circle text-lg"></i>
                        <span>Buat Campaign</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Total Campaign</p>
                                <h3 className="text-3xl font-bold text-slate-900" id="my-campaign-total">0</h3>
                            </div>
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                                <i className="ph ph-megaphone text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Dana Terkumpul</p>
                                <h3 className="text-3xl font-bold text-slate-900" id="my-campaign-dana">Rp 0</h3>
                            </div>
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                <i className="ph ph-wallet text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Total Donatur</p>
                                <h3 className="text-3xl font-bold text-slate-900" id="my-campaign-donatur">0</h3>
                            </div>
                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                <i className="ph ph-users text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-slate-900">Daftar Campaign</h2>
                            <div className="flex items-center space-x-2 text-sm text-slate-500">
                                <i className="ph ph-info"></i>
                                <span>Data diperbarui otomatis dari server.</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="myCampaignGrid">
                            <div className="col-span-full text-center py-10 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary-500 border-t-transparent mx-auto mb-3"></div>
                                <p className="text-slate-500 font-medium">Memuat campaign Anda...</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Tips Pengelolaan</h2>
                        <div className="space-y-4 text-sm text-slate-600">
                            <div className="flex items-start space-x-3">
                                <i className="ph ph-check-circle text-primary-600 text-lg mt-0.5"></i>
                                <p>Perbarui cerita campaign secara berkala agar donatur tetap terlibat.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <i className="ph ph-chart-line text-primary-600 text-lg mt-0.5"></i>
                                <p>Bagikan progress penggalangan dana di media sosial.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <i className="ph ph-clock text-primary-600 text-lg mt-0.5"></i>
                                <p>Pastikan deadline jelas untuk meningkatkan urgensi.</p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-primary-50 border border-primary-100">
                            <p className="text-sm font-semibold text-primary-700">Butuh bantuan?</p>
                            <p className="text-xs text-primary-700/80 mt-1">Hubungi admin untuk pengaturan campaign lanjutan.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    

    </>
  );
};

export default CampaignSaya;
