import React from 'react';
import { Link } from 'react-router-dom';

const DetailCampaign = () => {
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
                <span className="text-sm font-semibold text-slate-700">Halo, Budi Santoso</span>
                <Link to="/dashboard" className="text-sm font-semibold text-slate-700 hover:text-primary-600 px-3 py-2 transition-colors">Dashboard</Link>
                <Link to="/logout" className="text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors">Logout</Link>
            </div>
            

            <div className="md:hidden flex items-center">
                <button className="text-slate-600 hover:text-slate-900 focus:outline-none">
                    <i className="ph ph-list text-2xl"></i>
                </button>
            </div>
        </div>
    </div>
</nav>


    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-slate-500">
            <Link to="/" className="hover:text-primary-600">Beranda</Link>
            <i className="ph ph-caret-right mx-2 text-xs"></i>
            <span className="text-slate-900 font-medium" id="campaignBreadcrumb">Bantu Biaya Operasi Jantung Dek Nisa</span>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4" id="campaignTitle">Bantu Biaya Operasi Jantung Dek Nisa</h1>

                <div className="w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden mb-8">
                    <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1000&auto=format&fit=crop" className="w-full h-full object-cover" id="campaignImage" />
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 mb-8">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Cerita Penggalangan Dana</h2>
                    <div className="prose max-w-none text-slate-600 text-sm leading-relaxed" id="campaignStory">
                        <p>Halo Orang Baik, perkenalkan ini Nisa (5 tahun). Sejak lahir, Nisa didiagnosis mengalami kelainan jantung bawaan yang membuatnya mudah sesak napas dan kulitnya membiru jika menangis terlalu lama.</p>
                        <p>Kondisi ekonomi keluarga yang pas-pasan membuat Nisa belum bisa mendapatkan tindakan operasi yang seharusnya dilakukan secepat mungkin. Ayah Nisa hanya seorang buruh harian lepas, sedangkan ibunya mengurus Nisa di rumah.</p>
                        <p>Mari kita bantu Nisa untuk mendapatkan senyum sehatnya kembali. Bantuan sekecil apapun dari teman-teman akan sangat berarti bagi kelangsungan hidup Nisa.</p>
                    </div>
                </div>

                <div id="campaignUpdatePanel" className="hidden bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 mb-8">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Tambah Update Progres</h2>
                    <p className="text-sm text-slate-500 mb-5">Bagikan perkembangan terbaru agar donatur bisa mengikuti penggunaan dana.</p>
                    <form id="campaignUpdateForm" className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Judul Update</label>
                            <input name="title" type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10" placeholder="Contoh: Tahap operasi pertama selesai" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Isi Update</label>
                            <textarea name="body" rows="4" required className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10" placeholder="Ceritakan perkembangan terbaru campaign..."></textarea>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:items-end">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Progres Penggunaan Dana (%)</label>
                                <input name="progressPercent" type="number" min="0" max="100" className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10" placeholder="Opsional" />
                            </div>
                            <button type="submit" className="px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold">
                                Simpan Update
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Update Progres</h2>
                            <p className="text-sm text-slate-500 mt-1">Timeline perkembangan dari penggalang dana.</p>
                        </div>
                        <i className="ph ph-flag-pennant text-2xl text-primary-600"></i>
                    </div>
                    <div id="campaignUpdatesList"></div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Doa Donatur</h2>
                            <p className="text-sm text-slate-500 mt-1">Komentar dan doa dari donatur terbaru.</p>
                        </div>
                        <i className="ph ph-chat-circle-heart text-2xl text-primary-600"></i>
                    </div>
                    <div id="campaignDonationMessages" className="space-y-3"></div>
                </div>
            </div>

            <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24">
                    <p className="text-sm text-slate-500 font-medium mb-1">Dana Terkumpul</p>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2" id="campaignRaised">Rp 65.000.000</h3>
                    <p className="text-sm text-slate-500 mb-4">dari target <span className="font-semibold text-slate-700" id="campaignTarget">Rp 100.000.000</span></p>

                    <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden">
                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '65%' }} id="campaignProgress"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                        <div className="bg-slate-50 rounded-xl p-3">
                            <p className="text-xl font-bold text-slate-900" id="campaignDonors">420</p>
                            <p className="text-xs text-slate-500">Donatur</p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-3">
                            <p className="text-xl font-bold text-red-600" id="campaignDaysLeft">3</p>
                            <p className="text-xs text-red-500">Hari Lagi</p>
                        </div>
                    </div>

                    
                        <button id="detailDonateButton" type="button" className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl text-center shadow-sm transition-colors mb-4">
                            Donasi Sekarang
                        </button>
                    

                    <div className="border-t border-slate-100 pt-4 mt-2">
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Penggalang Dana</p>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">YZ</div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 flex items-center">
                                    <span id="campaignOrganizer">Yayasan Zakat</span> <i className="ph-fill ph-check-circle text-blue-500 ml-1"></i>
                                </p>
                                <p className="text-xs text-slate-500">Terverifikasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

                <div className="mb-5">
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

    <div id="qrisPaymentModal" className="fixed inset-0 z-50 hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900/60 modal-backdrop transition-opacity" onclick="closeQrisPaymentModal()"></div>
        <div className="bg-white rounded-2xl w-full max-w-md mx-4 relative z-10 shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300" id="qrisModalContent">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-slate-50">
                <div className="flex items-center space-x-2">
                    <i className="ph-fill ph-qr-code text-primary-600 text-2xl"></i>
                    <h3 className="font-bold text-lg text-slate-900">Pembayaran QRIS</h3>
                </div>
                <button onclick="closeQrisPaymentModal()" className="text-slate-400 hover:text-slate-600"><i className="ph ph-x text-xl"></i></button>
            </div>

            <div className="p-6 flex flex-col items-center">
                <div id="qrisDemoBadge" className="hidden mb-4 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <i className="ph-fill ph-info"></i>
                    <span>Mode Demo (Project Inactive)</span>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Nominal Donasi</p>
                <p className="text-2xl font-black text-slate-900 mb-4" id="qrisModalAmount">Rp 0</p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-center w-64 h-64 shadow-inner relative overflow-hidden mb-4">
                    <img id="qrisModalImage" src="" alt="QRIS QR Code" className="w-full h-full object-contain" onload="document.getElementById('qrisModalLoader').classList.add('hidden')" />
                    <div id="qrisModalLoader" className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-4 border-primary-500 border-t-transparent mb-2"></div>
                        <p className="text-xs font-semibold text-slate-500">Membuat QRIS...</p>
                    </div>
                </div>
                <div className="text-center max-w-xs mb-6">
                    <p className="text-sm font-semibold text-slate-800" id="qrisModalCampaign">Nama Campaign</p>
                    <p className="text-xs text-slate-500 mt-1">Silakan scan kode QRIS di atas menggunakan aplikasi dompet digital Anda.</p>
                </div>
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

export default DetailCampaign;
