import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
            <Link to="/dashboard" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors bg-primary-50 text-primary-700">
                <i className="ph ph-squares-four text-xl mr-3"></i> Dashboard
            </Link>
            <Link to="/buat-campaign" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                <i className="ph ph-plus-circle text-xl mr-3"></i> Buat Campaign
            </Link>
            <Link to="/campaign-saya" className="flex items-center px-3 py-2.5 rounded-lg font-medium transition-colors text-slate-600 hover:bg-slate-50 hover:text-slate-900">
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
                        <h1 className="text-2xl font-bold text-slate-900">Overview Dashboard</h1>
                        <p className="text-sm text-slate-500 mt-1">Pantau perkembangan donasi secara real-time.</p>
                    </div>
                    <button onclick="window.location.href='/buat-campaign'" className="mt-4 sm:mt-0 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm flex items-center justify-center space-x-2">
                        <i className="ph ph-plus-circle text-lg"></i>
                        <span>Buat Campaign</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group">
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Total Dana Terkumpul</p>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2" id="stat-total-dana">Rp 45.500.000</h3>
                                <div className="flex items-center text-sm text-emerald-600 font-medium">
                                    <i className="ph ph-trend-up mr-1"></i> +12.5% <span className="text-slate-400 ml-2 font-normal">vs bulan lalu</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                                <i className="ph ph-wallet text-2xl"></i>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Total Donatur</p>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2" id="stat-total-donatur">1,248</h3>
                                <div className="flex items-center text-sm text-emerald-600 font-medium">
                                    <i className="ph ph-trend-up mr-1"></i> +5.2% <span className="text-slate-400 ml-2 font-normal">vs bulan lalu</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <i className="ph ph-users text-2xl"></i>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Campaign Aktif</p>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2" id="stat-campaign-aktif">0</h3>
                                <div className="text-sm text-slate-500" id="stat-campaign-sub">Terverifikasi</div>
                            </div>
                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                <i className="ph ph-megaphone text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-slate-900">Analytics Pendanaan</h2>
                            <div className="flex bg-slate-100 p-1 rounded-lg">
                                <button onclick="updateChart('week')" id="btn-filter-week" className="chart-filter-btn px-3 py-1.5 text-sm font-medium rounded-md text-slate-500">1 Minggu</button>
                                <button onclick="updateChart('month')" id="btn-filter-month" className="chart-filter-btn px-3 py-1.5 text-sm font-medium rounded-md bg-white text-slate-900 shadow-sm">1 Bulan</button>
                                <button onclick="updateChart('year')" id="btn-filter-year" className="chart-filter-btn px-3 py-1.5 text-sm font-medium rounded-md text-slate-500">1 Tahun</button>
                            </div>
                        </div>
                        <div className="relative h-72 w-full">
                            <canvas id="donationChart"></canvas>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-slate-900">Donasi Terbaru</h2>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2" id="recent-transactions-list">
                            <div className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium">HN</div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900">Hamba Allah</p>
                                        <p className="text-xs text-slate-500">Bantuan Medis...</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-emerald-600">+Rp 500k</p>
                                    <p className="text-xs text-slate-400">Baru saja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                        <div className="flex-1">
                            <label htmlFor="campaignSearch" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Cari Campaign</label>
                            <div className="relative">
                                <i className="ph ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                                <input id="campaignSearch" type="search" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10" placeholder="Cari judul, kategori, atau penggalang dana..." />
                            </div>
                        </div>
                        <div className="lg:w-72">
                            <label htmlFor="campaignCategoryFilter" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Kategori</label>
                            <select id="campaignCategoryFilter" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10">
                                <option value="">Semua Kategori</option>
                                <option value="Bantuan Medis">Bantuan Medis</option>
                                <option value="Pendidikan">Pendidikan</option>
                                <option value="Infrastruktur & Pembangunan">Infrastruktur & Pembangunan</option>
                                <option value="Sosial & Kemanusiaan">Sosial & Kemanusiaan</option>
                            </select>
                        </div>
                        <button id="campaignClearFilter" type="button" className="lg:w-auto px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold flex items-center justify-center gap-2">
                            <i className="ph ph-x-circle text-lg"></i>
                            <span>Reset</span>
                        </button>
                    </div>
                    <p id="campaignFilterSummary" className="text-xs text-slate-500 mt-3">Memuat campaign aktif...</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="campaignGrid">
                    {/*  Campaign cards are rendered dynamically via JavaScript in app.js  */}
                    <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary-500 border-t-transparent mb-2"></div>
                        <p className="text-slate-500 font-medium">Memuat campaign aktif...</p>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <div id="donationModal" className="fixed inset-0 z-50 hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900/40 modal-backdrop transition-opacity" onclick="closeDonationModal()"></div>
        <div className="bg-white rounded-2xl w-full max-w-md mx-4 relative z-10 shadow-2xl transform scale-95 transition-transform duration-300" id="modalContent">
            <div className="px-6 py-4 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">Donasi Sekarang</h3>
                <button onclick="closeDonationModal()" className="text-slate-400 hover:text-slate-600"><i className="ph ph-x text-xl"></i></button>
            </div>
            <div className="p-6">
                <p className="text-sm text-slate-500 mb-1">Kampanye:</p>
                <p className="font-bold mb-5" id="modalCampaignTitle"></p>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Pilih Nominal</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                        <button onclick="setNominal(50000)" className="border rounded-lg py-2 text-sm hover:border-primary-500">50k</button>
                        <button onclick="setNominal(100000)" className="border rounded-lg py-2 text-sm hover:border-primary-500">100k</button>
                        <button onclick="setNominal(250000)" className="border rounded-lg py-2 text-sm hover:border-primary-500">250k</button>
                    </div>
                    <input type="number" id="inputNominal" className="w-full p-2.5 border rounded-lg" placeholder="Nominal lain (Min 10.000)..." />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Metode Pembayaran</label>
                    <select id="paymentMethod" className="w-full p-2.5 border rounded-lg bg-white">
                        <option value="qris">QRIS</option>
                        <option value="bni_va">BNI Virtual Account</option>
                        <option value="bri_va">BRI Virtual Account</option>
                        <option value="permata_va">Permata Virtual Account</option>
                        <option value="atm_bersama_va">ATM Bersama Virtual Account</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Doa / Komentar</label>
                    <textarea id="donorMessage" rows="3" maxlength="240" className="w-full p-2.5 border rounded-lg text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10" placeholder="Tulis doa singkat untuk campaign ini..."></textarea>
                </div>

                <button onclick="processDonation()" className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-colors">
                    Bayar Sekarang
                </button>
            </div>
        </div>
    </div>

    {/*  QRIS Payment Modal  */}
    <div id="qrisPaymentModal" className="fixed inset-0 z-50 hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900/60 modal-backdrop transition-opacity" onclick="closeQrisPaymentModal()"></div>
        <div className="bg-white rounded-2xl w-full max-w-md mx-4 relative z-10 shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300" id="qrisModalContent">
            {/*  Header  */}
            <div className="px-6 py-4 border-b flex justify-between items-center bg-slate-50">
                <div className="flex items-center space-x-2">
                    <i className="ph-fill ph-qr-code text-primary-600 text-2xl"></i>
                    <h3 className="font-bold text-lg text-slate-900">Pembayaran QRIS</h3>
                </div>
                <button onclick="closeQrisPaymentModal()" className="text-slate-400 hover:text-slate-600"><i className="ph ph-x text-xl"></i></button>
            </div>
            
            <div className="p-6 flex flex-col items-center">
                {/*  Demo Badge  */}
                <div id="qrisDemoBadge" className="hidden mb-4 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <i className="ph-fill ph-info"></i>
                    <span>Mode Demo (Project Inactive)</span>
                </div>

                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Nominal Donasi</p>
                <p className="text-2xl font-black text-slate-900 mb-4" id="qrisModalAmount">Rp 0</p>
                
                {/*  QR Code Box  */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-center w-64 h-64 shadow-inner relative overflow-hidden mb-4">
                    <img id="qrisModalImage" src="" alt="QRIS QR Code" className="w-full h-full object-contain" onload="document.getElementById('qrisModalLoader').classList.add('hidden')" />
                    <div id="qrisModalLoader" className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-4 border-primary-500 border-t-transparent mb-2"></div>
                        <p className="text-xs font-semibold text-slate-500">Membuat QRIS...</p>
                    </div>
                </div>

                <div className="text-center max-w-xs mb-6">
                    <p className="text-sm font-semibold text-slate-800" id="qrisModalCampaign">Nama Campaign</p>
                    <p className="text-xs text-slate-500 mt-1">Silakan scan kode QRIS di atas menggunakan aplikasi dompet digital Anda (Gopay, OVO, Dana, LinkAja, dll).</p>
                </div>

                {/*  Status Check Indicator  */}
                <div className="w-full bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-center space-x-3 mb-6">
                    <div className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-xs font-medium text-slate-600 animate-pulse">Menunggu pembayaran terverifikasi...</span>
                </div>

                {/*  Demo Simulation Button  */}
                <button id="qrisDemoBtn" onclick="simulateQrisSuccess()" className="hidden w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-200 flex items-center justify-center space-x-2">
                    <i className="ph ph-check-circle text-lg"></i>
                    <span>Simulasikan Pembayaran Sukses</span>
                </button>
            </div>
        </div>
    </div>

    <div id="toastContainer" className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 pointer-events-none"></div>

    
    

    </>
  );
};

export default Dashboard;
