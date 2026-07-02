# CrowdFund Frontend

Frontend aplikasi crowdfunding untuk final project Kelompok 5. Proyek ini dibuat dengan HTML, Tailwind CSS CDN, CSS kustom, dan JavaScript client-side.

## Struktur Folder

```text
frontend/
|-- index.html
|-- login.html
|-- register.html
|-- dashboard.html
|-- detail-campaign.html
|-- admin-dashboard.html
|-- buat-campaign.html
|-- campaign-saya.html
|-- riwayat-donasi.html
|-- pengaturan-sistem.html
|-- css/
|   `-- style.css
`-- js/
    |-- app.js
    `-- tailwind-config.js
```

## Halaman

- `index.html` - halaman utama atau landing page.
- `login.html` - halaman masuk pengguna.
- `register.html` - halaman daftar akun.
- `dashboard.html` - dashboard pengguna.
- `detail-campaign.html` - detail campaign dan simulasi donasi.
- `buat-campaign.html` - form pembuatan campaign.
- `campaign-saya.html` - daftar campaign milik pengguna.
- `riwayat-donasi.html` - riwayat donasi.
- `pengaturan-sistem.html` - halaman pengaturan sistem.
- `admin-dashboard.html` - dashboard admin.

## Asset

- `css/style.css` berisi style tambahan seperti scrollbar, animasi toast, modal, dan input number.
- `js/app.js` berisi interaksi client-side seperti modal donasi, toast, nominal donasi, dan panel notifikasi.
- `js/tailwind-config.js` berisi konfigurasi tema Tailwind yang digunakan bersama oleh semua halaman.

## Koneksi Desain

Semua halaman HTML sudah terhubung dengan asset desain berikut:

```html
<script src="/js/tailwind-config.js"></script>
<link rel="stylesheet" href="/css/style.css">
<script src="/js/app.js" defer></script>
```

Link navigasi lokal juga sudah diarahkan ke halaman yang tersedia di proyek, sehingga halaman dapat dibuka sebagai frontend statis.

## Cara Menjalankan

Karena halaman menggunakan path absolut seperti `/css/style.css` dan `/js/app.js`, jalankan proyek melalui local server.

Contoh dengan Python:

```bash
python -m http.server 5500
```

Lalu buka:

```text
http://localhost:5500/
```

## Catatan

Data pada aplikasi masih berupa dummy data untuk kebutuhan tampilan dan simulasi interaksi frontend.
