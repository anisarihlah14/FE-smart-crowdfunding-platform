// State Simulation (Dummy Data for Client-Side testing)
const currentUser = { name: "Ahmad Rizki", role: "user" };
let currentCampaignId = null;
let currentCampaignCurrentAmount = 0;
let globalTotalDana = 45500000;
let globalTotalDonatur = 1248;

const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

// Toggle Notification Panel
document.addEventListener('DOMContentLoaded', () => {
    const notifBtn = document.getElementById('notificationButton');
    const notifPanel = document.getElementById('notificationPanel');
    
    if (notifBtn && notifPanel) {
        notifBtn.addEventListener('click', () => {
            notifPanel.classList.toggle('hidden');
        });

        // Close when clicking outside
        document.addEventListener('click', (event) => {
            if (!notifBtn.contains(event.target) && !notifPanel.contains(event.target)) {
                notifPanel.classList.add('hidden');
            }
        });
    }
    
    // Init Initials if element exists
    const initialEls = document.querySelectorAll('.user-initials');
    initialEls.forEach(el => {
       const initials = currentUser.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
       el.innerText = initials;
    });
});

// Modal Logic
window.openDonationModal = (id, title, currentAmount) => {
    currentCampaignId = id;
    currentCampaignCurrentAmount = currentAmount;
    const titleEl = document.getElementById('modalCampaignTitle');
    if(titleEl) titleEl.innerText = title;
    
    const inputEl = document.getElementById('inputNominal');
    if(inputEl) inputEl.value = '';
    
    const modal = document.getElementById('donationModal');
    if(modal){
        modal.classList.remove('hidden');
        setTimeout(() => document.getElementById('modalContent').classList.remove('scale-95'), 10);
    }
};

window.closeDonationModal = () => {
    const content = document.getElementById('modalContent');
    const modal = document.getElementById('donationModal');
    if(content && modal) {
        content.classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 200);
    }
};

window.setNominal = (amount) => {
    const input = document.getElementById('inputNominal');
    if(input) input.value = amount;
};

window.processDonation = () => {
    const input = document.getElementById('inputNominal');
    if(!input) return;
    const amount = parseInt(input.value);

    if (!amount || amount < 10000) {
        if(typeof Swal !== 'undefined') Swal.fire('Oops!', 'Minimal donasi adalah Rp 10.000', 'warning');
        else alert('Minimal donasi adalah Rp 10.000');
        return;
    }

    closeDonationModal();
    
    if(typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Memproses Pembayaran...',
            timer: 1500,
            showConfirmButton: false,
            didOpen: () => Swal.showLoading()
        }).then(() => finishDonation(amount));
    } else {
        finishDonation(amount);
    }
};

function finishDonation(amount) {
    globalTotalDana += amount;
    globalTotalDonatur += 1;
    
    const statDana = document.getElementById('stat-total-dana');
    const statDonatur = document.getElementById('stat-total-donatur');
    if(statDana) statDana.innerText = formatRupiah(globalTotalDana);
    if(statDonatur) statDonatur.innerText = globalTotalDonatur.toLocaleString('id-ID');

    currentCampaignCurrentAmount += amount;
    const terkumpul = document.getElementById(`terkumpul-${currentCampaignId}`);
    if(terkumpul) terkumpul.innerText = formatRupiah(currentCampaignCurrentAmount);
    
    const target = currentCampaignId === '1' ? 100000000 : 50000000;
    let percentage = (currentCampaignCurrentAmount / target) * 100;
    const bar = document.getElementById(`progress-bar-${currentCampaignId}`);
    if(bar) bar.style.width = `${Math.min(percentage, 100)}%`;

    addRecentTransaction(amount);
    showToast(`Berhasil!`, `Donasi ${formatRupiah(amount)} diterima.`);
}

function addRecentTransaction(amount) {
    const list = document.getElementById('recent-transactions-list');
    if(!list) return;
    const itemHTML = `
        <div class="flex items-center justify-between py-3 border-b border-slate-50 bg-emerald-50/50 px-2 rounded-lg -mx-2">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xs user-initials">AR</div>
                <div><p class="text-sm font-medium text-slate-900">Donasi Baru</p></div>
            </div>
            <div class="text-right">
                <p class="text-sm font-bold text-emerald-600">+${formatRupiah(amount)}</p>
                <p class="text-xs text-emerald-500">Baru saja</p>
            </div>
        </div>`;
    list.insertAdjacentHTML('afterbegin', itemHTML);
}

function showToast(title, message) {
    const container = document.getElementById('toastContainer');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-enter bg-white border border-slate-100 shadow-lg rounded-xl p-4 flex items-start space-x-3 w-80 pointer-events-auto';
    toast.innerHTML = `
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <i class="ph-fill ph-whatsapp-logo text-green-600 text-xl"></i>
        </div>
        <div class="flex-1">
            <p class="text-sm font-bold text-slate-900">${title}</p>
            <p class="text-xs text-slate-500 mt-0.5">${message}</p>
        </div>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 300); }, 5000);
}