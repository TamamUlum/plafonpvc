# Plafon PVC Solo by Griya Alfath — Astro SSG Website

Website resmi **Plafon PVC Solo by Griya Alfath** yang dikonversi dari website HTML statis menjadi arsitektur modern berbasis **Astro Static Site Generation (SSG)** dengan TypeScript dan scoped CSS.

---

## 🚀 Fitur Utama & Prinsip Konversi

1. **"Pertahankan Tampilan, Ubah Arsitektur Kode"**:
   - Seluruh desain visual, palet warna (*Navy `#0f2b48`*, *Accent Orange `#e65100`*), tipografi, spacing, layout, dan konten asli dipertahankan secara akurat.
   - Tanpa ketergantungan framework frontend berat (React/Vue ditiadakan).
2. **Modular & Reusable Components**:
   - `Header.astro` & `Navbar.astro` (dengan deteksi halaman aktif dan responsive mobile menu).
   - `Footer.astro` (dengan 3 alamat store fisik resmi, link sosial media, dan copyright).
   - `ProductCard.astro` (kartu katalog dengan fitur, kategori, dan tombol WhatsApp).
   - `ServiceCard.astro` (layanan pemasangan lengkap dengan 4 tahapan kerja).
   - `ProjectCard.astro` (galeri portofolio dengan zoom lightbox modal).
   - `ArticleCard.astro` (kartu edukasi panduan interior & material).
   - `Breadcrumb.astro` (navigasi remah roti dengan Schema.org BreadcrumbList).
   - `WhatsAppButton.astro` (tombol mengambang Chat WhatsApp & tombol Back to Top).
3. **Pemisahan Data Terstruktur (TypeScript)**:
   - `src/data/products.ts`: Katalog produk Plafon PVC, Gypsum, Baja Ringan, Hollow, Galvalum, Panel Dinding.
   - `src/data/brands.ts`: Brand mitra (ALFAFON, BATIK, INDOKING, GOLDEN, JAYA BOARD, KNOFF, STAR, KENCANA).
   - `src/data/services.ts`: Layanan jasa pemasangan bergaransi.
   - `src/data/projects.ts`: Dokumentasi proyek riil (Gereja, Showroom, Hunian, Komersial).
   - `src/data/articles.ts`: Artikel panduan & komparasi teknis.
4. **Interaksi Vanilla JavaScript (`src/scripts/main.js`)**:
   - Mobile hamburger menu toggle.
   - Accordion interaktif FAQ.
   - Filter simulasi kategori produk & portofolio proyek.
   - Lightbox modal gambar proyek.
   - Validasi formulir permintaan penawaran dengan forward ke WhatsApp.
   - Tombol kembali ke atas (*Back to Top*).
5. **SEO & AEO Intelligence (Sesuai Skill SEO/AEO/GEO)**:
   - Canonical URL dan Open Graph / Twitter Card di setiap halaman.
   - JSON-LD Structured Data Schema.org (`HomeAndConstructionBusiness`, `LocalBusiness`, `BreadcrumbList`).
   - Keyword alami (*Plafon PVC Solo, Supplier Plafon PVC Solo, Baja Ringan Solo, dll.*).
   - File `robots.txt` dan sitemap siap pakai.

---

## 📂 Struktur Proyek

```text
Web Dummy/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── produk/
│   │   ├── brand/
│   │   ├── layanan/
│   │   ├── proyek/
│   │   ├── dokumentasi/
│   │   ├── blog/
│   │   └── logo/
│   ├── icons/
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── Breadcrumb.astro
│   │   ├── ProductCard.astro
│   │   ├── ServiceCard.astro
│   │   ├── ProjectCard.astro
│   │   └── ArticleCard.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro                  # Beranda
│   │   ├── tentang-kami.astro           # Profil Perusahaan
│   │   ├── kontak.astro                 # Kontak & Form Penawaran
│   │   ├── produk/index.astro           # Katalog Produk + Filter
│   │   ├── brand/index.astro            # Brand Resmi Mitra
│   │   ├── layanan/index.astro          # Jasa Pemasangan & Tahapan
│   │   ├── proyek/index.astro           # Portofolio Proyek + Lightbox
│   │   ├── dokumentasi/index.astro      # Dokumentasi Fasilitas & Gudang
│   │   └── blog/index.astro             # Artikel & Panduan
│   │
│   ├── data/
│   │   ├── products.ts
│   │   ├── brands.ts
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   └── articles.ts
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── scripts/
│       └── main.js
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── index.html                           # File HTML asli (dipertahankan)
└── README.md
```

---

## 💻 Panduan Penggunaan & Perintah

### 1. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:4321`.

### 2. Membangun Situs Statis (Build)
```bash
npm run build
```
Hasil build static HTML akan digenerate ke dalam folder `dist/` siap dideploy ke platform hosting statis apa pun (Cloudflare Pages, Vercel, Netlify, atau web server statis).

### 3. Pratinjau Hasil Build (Preview)
```bash
npm run preview
```

---

## 📞 Informasi Kontak & Layanan

- **WhatsApp Office**: [081228303338](https://wa.me/6281228303338)
- **WhatsApp Admin**: [082134516288](https://wa.me/6282134516288)
- **Sosial Media**: `@plafonpvcsolo` (Instagram, Facebook, TikTok, YouTube, Threads)
- **Alamat Cabang**:
  - Delanggu, Klaten (Jl. Solo-Jogja Karang Delanggu, sebelah Koramil)
  - Kartasura, Sukoharjo (Jl. A. Yani, Kartasura)
  - Bulusulur, Wonogiri (Jl. Wonogiri - Ponorogo)
