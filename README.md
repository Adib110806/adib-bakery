# Adib Bakery

Website toko roti **Adib Bakery** dibangun dengan **React + Vite**, seluruh konten menggunakan Bahasa Indonesia.

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Untuk build produksi:

```bash
npm run build
npm run preview
```

## Login Demo

Halaman Login muncul pertama kali. Gunakan email apa saja yang valid (mis. `user@email.com`) dan password minimal 6 karakter untuk masuk. Status login disimpan di `localStorage`.

## Struktur Folder

```
src/
├── assets/
│   ├── images/     -> gambar produk, hero, logo, slide, avatar (SVG lokal)
│   ├── videos/      -> letakkan proses-bakery.mp4 di sini untuk mengganti placeholder video
│   └── icons/
├── components/      -> komponen UI (Navbar, ProductCard, FlashSale, dll)
├── pages/           -> Login, Home, Checkout
├── layouts/         -> MainLayout (Navbar + Footer + CartDrawer)
├── hooks/           -> useLocalStorage, useCountdown, useScrollReveal
├── context/         -> AuthContext, CartContext, ToastContext
├── data/            -> data produk, testimoni, slide
├── styles/          -> CSS per komponen + variables.css (design tokens)
└── App.jsx
```

## Fitur Utama

- Login gate (localStorage) + tombol logout di Navbar
- Navbar sticky & responsif
- Header hero dengan animasi
- Slider promo memakai **jQuery** (fade + auto slide, 960px, 5 slide)
- Video section (placeholder siap diganti file lokal)
- Flash Sale dengan countdown timer, badge diskon, harga coret
- Pencarian produk realtime tanpa reload
- Produk Best Seller & Produk Unggulan (masing-masing 6+, total 12 produk)
- Keranjang belanja (tambah/hapus/update qty) dengan badge jumlah item & toast notification
- Checkout dengan form data pemesan + area upload QRIS + popup konfirmasi pembayaran
- Testimoni pelanggan (6 review dengan rating bintang)
- Google Maps embed & YouTube embed (iframe siap diganti)
- Ikon sosial media (Instagram, Facebook, TikTok, WhatsApp, YouTube)
- Loading screen, Scroll to Top, animasi fade-up saat scroll, smooth scrolling

## Catatan

- Semua gambar produk/hero/avatar/QRIS adalah **SVG lokal** hasil generate (di `src/assets/images`) agar tidak bergantung pada internet — silakan ganti dengan foto asli sesuai kebutuhan.
- Ganti `src` iframe Google Maps & YouTube di `src/components/ContactSection.jsx` dengan lokasi/video asli Adib Bakery.
- Lengkapi NIM & Nama pada `src/components/Footer.jsx` sesuai identitas Anda.
