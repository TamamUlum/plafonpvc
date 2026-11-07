import type { MediaItem } from '../components/MediaGallery.astro';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  brandSlug: 'lamiwood' | 'alfafon' | 'sakura' | 'jayaboard' | 'kencana' | 'honor-decoration' | 'motto' | 'janur';
  category: string;
  categorySlug: 'plafon-pvc' | 'gypsum' | 'baja-ringan' | 'hollow' | 'panel-dinding' | 'aksesori';
  description: string;
  fullDescription: string;
  image: string;
  media: MediaItem[];
  badge?: string;
  isBestSeller?: boolean;
  features: string[];
  specifications: ProductSpec[];
  pdfCatalog?: string;
  catalogName?: string;
  relatedSlugs: string[];
}

export const products: Product[] = [
  // 1. BRAND: LAMIWOOD (BEST SELLER)
  {
    id: 'plafon-pvc-lamiwood',
    slug: 'plafon-pvc-lamiwood',
    name: 'Plafon UPVC Lamiwood Premium',
    brand: 'LAMIWOOD',
    brandSlug: 'lamiwood',
    category: 'Plafon PVC',
    categorySlug: 'plafon-pvc',
    badge: 'Best Seller',
    isBestSeller: true,
    description: 'Plafon UPVC kualitas premium nomor satu dengan 50+ pilihan motif serat kayu timbul mewah, anti air 100%, tahan rayap, dan bergaransi resmi untuk hunian modern.',
    fullDescription: 'Lamiwood merupakan produk plafon UPVC unggulan (Best Seller) di Griya Alfath yang teruji dan terpercaya untuk hunian residensial, villa, perkantoran, dan gedung komersial di Solo Raya. Menggunakan formulasi Unplasticized Polyvinyl Chloride berkualitas tinggi yang lebih lentur, tahan benturan, tidak merambatkan api, dan memiliki teknologi pengunci interlock presisi yang membuat sambungan panel tampak mulus dan rapi.',
    image: '/images/catalog/3. Catalog Lamiwood/Cover Lamiwood.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/3. Catalog Lamiwood/Cover Lamiwood.webp',
        alt: 'Sampul E-Katalog Resmi Plafon UPVC Lamiwood Premium',
        caption: 'Sampul E-Katalog Resmi Lamiwood UPVC'
      },
      {
        type: 'video',
        src: '/videos/pemasangan-plafon.mp4',
        thumbnail: '/images/hero/hero-plafon-main.webp',
        alt: 'Video Tutorial Pemasangan Plafon UPVC Lamiwood Seri LWD',
        caption: 'Video: Tutorial & Aplikasi Pemasangan Plafon PVC Lamiwood'
      },
      {
        type: 'image',
        src: '/images/catalog/3. Catalog Lamiwood/Lamiwood Ornamen 60x60 cm.webp',
        alt: 'Ornamen Lampu Plafon PVC Lamiwood Ukuran 60x60 cm',
        caption: 'Ornamen Lampu Drop Ceiling Lamiwood 60x60 cm'
      },
      {
        type: 'image',
        src: '/images/catalog/3. Catalog Lamiwood/Lamiwood Ornamen.webp',
        alt: 'Varian Ornamen Tengah Plafon PVC Lamiwood',
        caption: 'Koleksi Ornamen Plafon PVC Lamiwood Elegan'
      },
      {
        type: 'image',
        src: '/images/catalog/3. Catalog Lamiwood/Lamiwood Ornamen 30x30 cm.webp',
        alt: 'Ornamen Lampu Plafon PVC Lamiwood Ukuran 30x30 cm',
        caption: 'Ornamen Lampu Plafon Lamiwood 30x30 cm'
      }
    ],
    features: [
      'Bahan UPVC murni lebih padat, kokoh, dan tahan suhu panas atap',
      'Anti air 100%, anti rayap, dan tidak berjamur seumur hidup',
      '50+ pilihan motif laminasi serat kayu timbul dan marmer elegan',
      'Sistem sambungan lidah-alur presisi (seamless interlock)',
      'Tidak merambatkan api (Self-extinguishing fire retardant)',
      'Perawatan sangat mudah, cukup dilap kain basah tanpa cat ulang'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'LAMIWOOD' },
      { label: 'Bahan Material', value: 'Premium Unplasticized PVC (UPVC)' },
      { label: 'Lebar Efektif', value: '20 cm' },
      { label: 'Ketebalan Panel', value: '8.0 mm (Extra Rigid)' },
      { label: 'Pilihan Panjang', value: '3 meter, 4 meter, 5 meter, 6 meter' },
      { label: 'Ketahanan Api', value: 'Flame Retardant (B1 Standar)' },
      { label: 'Garansi Material', value: 'Garansi Resmi Pabrik' },
      { label: 'Aplikasi Rekomendasi', value: 'Ruang Tamu, Kamar Utama, Kamar Mandi, Teras, Ruang Kantor' }
    ],
    pdfCatalog: '/catalog/3. Katalog Lamiwood.pdf',
    catalogName: 'Katalog Lamiwood.pdf',
    relatedSlugs: ['plafon-pvc-premium', 'plafon-pvc-sakura', 'janur-lis-pigura']
  },

  // 2. BRAND: ALFAFON
  {
    id: 'plafon-pvc-premium',
    slug: 'plafon-pvc-premium',
    name: 'Plafon PVC Alfafon Marmer & Wood Series',
    brand: 'ALFAFON',
    brandSlug: 'alfafon',
    category: 'Plafon PVC',
    categorySlug: 'plafon-pvc',
    badge: 'Motif Terlengkap',
    description: 'Plafon PVC pelopor dengan koleksi motif marmer seri AF, serat kayu laminate, dan pilihan ketebalan mini hingga reguler untuk plafon berkelas.',
    fullDescription: 'Alfafon adalah pelopor plafon PVC di Indonesia dengan reputasi panjang dalam menghadirkan motif marmer glossy dan kayu natural seri AF. Panel plafon PVC Alfafon dibuat dengan teknologi ekstrusi presisi tinggi yang memberikan kestabilan dimensi, bebas timbal, dan ramah lingkungan.',
    image: '/images/catalog/8. Brosur Alfafon/1. Plafon PVC motif Marmer Kayu seri AF 20001 - AF 20080.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/8. Brosur Alfafon/1. Plafon PVC motif Marmer Kayu seri AF 20001 - AF 20080.webp',
        alt: 'Plafon PVC Alfafon Motif Marmer Kayu seri AF 20001 - AF 20080',
        caption: 'Plafon PVC Alfafon Seri AF 20001 - AF 20080'
      },
      {
        type: 'image',
        src: '/images/catalog/8. Brosur Alfafon/2. Plafon PVC motif Marmer Kayu seri AF 20081-AF 20123.webp',
        alt: 'Plafon PVC Alfafon Seri AF 20081 - AF 20123',
        caption: 'Plafon PVC Alfafon Seri AF 20081 - AF 20123'
      },
      {
        type: 'image',
        src: '/images/catalog/8. Brosur Alfafon/7. Alfafon plafon, solusi interior rumah anda.webp',
        alt: 'Alfafon Plafon Solusi Interior Rumah Modern',
        caption: 'Alfafon Solusi Plafon Interior Rumah Anda'
      },
      {
        type: 'image',
        src: '/images/catalog/8. Brosur Alfafon/6. Plafon PVC motif Marmer Kayu seri List PVC.webp',
        alt: 'Lis PVC Dekoratif Alfafon',
        caption: 'Koleksi Lis Profil Tepi PVC Alfafon'
      }
    ],
    features: [
      'Motif marmer mewah berkilau (high glossy) dan kayu doff',
      'Tersedia tipe Alfafon Mini, Alfafon Plus, dan Reguler',
      'Kombinasi lengkap dengan lis PVC dekoratif senada',
      'Anti air, bebas lapuk akibat bocor genteng'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'ALFAFON' },
      { label: 'Bahan Material', value: 'Polyvinyl Chloride Grade A' },
      { label: 'Lebar Efektif', value: '20 cm' },
      { label: 'Ketebalan Panel', value: '8.0 mm' },
      { label: 'Panjang Standar', value: '4 meter & 6 meter' },
      { label: 'Garansi', value: 'Tahan Air & Rayap Seumur Hidup' },
      { label: 'Aplikasi', value: 'Plafon Rumah Tinggal, Ruko, Gedung Pertemuan' }
    ],
    pdfCatalog: '/catalog/8. Brosur Alfafon.pdf',
    catalogName: 'Brosur Alfafon.pdf',
    relatedSlugs: ['plafon-pvc-lamiwood', 'plafon-pvc-sakura', 'janur-lis-pigura']
  },

  // 3. BRAND: SAKURA
  {
    id: 'plafon-pvc-sakura',
    slug: 'plafon-pvc-sakura',
    name: 'Plafon PVC Sakura Modern Minimalis',
    brand: 'SAKURA',
    brandSlug: 'sakura',
    category: 'Plafon PVC',
    categorySlug: 'plafon-pvc',
    badge: 'Modern Minimalis',
    description: 'Plafon PVC Sakura dengan corak garis minimalis modern, strip perak / emas elegan, permukaan bersih mengkilap untuk interior kontemporer.',
    fullDescription: 'Sakura PVC Plafon menghadirkan sentuhan minimalis modern yang sangat diminati untuk konsep rumah skandinavia dan modern minimalis di Solo Raya. Menggunakan formula PVC berdensitas stabil yang tahan lentur dan mudah dipotong rapi.',
    image: '/images/catalog/10. Sakura PVC Plafon Catalog/1. Sakura PVC Plafon Catalog.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/10. Sakura PVC Plafon Catalog/1. Sakura PVC Plafon Catalog.webp',
        alt: 'Sakura PVC Plafon Catalog Cover dan Seri Minimalis',
        caption: 'Katalog Resmi Sakura PVC Plafon'
      },
      {
        type: 'image',
        src: '/images/catalog/10. Sakura PVC Plafon Catalog/2. Sakura PVC Plafon Catalog - Ornamen.webp',
        alt: 'Motif Sakura PVC Plafon Seri Modern',
        caption: 'Pilihan Motif Sakura PVC Plafon'
      },
      {
        type: 'image',
        src: '/images/catalog/10. Sakura PVC Plafon Catalog/3. Sakura PVC Plafon Catalog - Plafon & Lis PVC.webp',
        alt: 'Varian Tekstur Sakura PVC Plafon',
        caption: 'Varian Strip dan Tekstur Sakura'
      }
    ],
    features: [
      'Motif modern garis minimalis, strip perak & emas',
      'Lapisan pelindung UV anti kusam dan tidak menguning',
      'Tahan air 100%, sangat aman di area lembap',
      'Harga bersahabat dengan kualitas ekstrusi stabil'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'SAKURA' },
      { label: 'Bahan Material', value: 'PVC Interior Grade' },
      { label: 'Lebar Efektif', value: '20 cm' },
      { label: 'Ketebalan Panel', value: '7.5 - 8.0 mm' },
      { label: 'Panjang Standar', value: '4 meter' },
      { label: 'Finishing', value: 'Glossy / Silver Hologram Stripe' }
    ],
    pdfCatalog: '/catalog/10. Sakura PVC Plafon Catalog.pdf',
    catalogName: 'Sakura PVC Plafon Catalog.pdf',
    relatedSlugs: ['plafon-pvc-lamiwood', 'plafon-pvc-premium']
  },

  // 4. BRAND: JAYABOARD
  {
    id: 'plafon-gypsum-jayaboard',
    slug: 'plafon-gypsum-jayaboard',
    name: 'Papan Gypsum Jayaboard Sheetrock 9mm SNI',
    brand: 'JAYABOARD',
    brandSlug: 'jayaboard',
    category: 'Gypsum',
    categorySlug: 'gypsum',
    badge: 'Standar SNI',
    description: 'Papan gypsum Jayaboard Sheetrock 9mm standar internasional dengan formula anti lendut (Sag-Defying-Strength) dan permukaan halus sempurna.',
    fullDescription: 'Jayaboard merupakan merek papan gypsum nomor 1 di Indonesia yang menjadi pilihan utama arsitek dan kontraktor. Dilengkapi teknologi inti kristal gypsum berkualitas dengan kekuatan anti lendut tinggi, permukaan kertas khusus yang merekat kuat pada kompon, dan menghasilkan bidang plafon rata mulus tanpa sambungan terlihat.',
    image: '/images/catalog/11. E-catalog Jayaboard Gypsum/1. E-catalog Jayaboard Gypsum.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/11. E-catalog Jayaboard Gypsum/1. E-catalog Jayaboard Gypsum.webp',
        alt: 'E-Katalog Resmi Jayaboard Gypsum',
        caption: 'E-Katalog Resmi Papan Gypsum Jayaboard'
      },
      {
        type: 'image',
        src: '/images/catalog/11. E-catalog Jayaboard Gypsum/2. E-catalog Jayaboard Gypsum.webp',
        alt: 'Spesifikasi Sistem Rangka Gypsum Jayaboard',
        caption: 'Sistem Rangka & Kompon Jayaboard'
      },
      {
        type: 'image',
        src: '/images/produk/produk-gypsum-jayaboard.webp',
        alt: 'Papan Gypsum Jayaboard Siap Pasang',
        caption: 'Papan Gypsum Jayaboard Sheetrock SNI'
      }
    ],
    features: [
      'Teknologi Sheetrock dengan ketahanan lendut maksimal (Sag-Defying)',
      'Permukaan sangat rata, menghasilkan cat dinding mulus sempurna',
      'Mudah dipasang pada rangka hollow galvalum atau metal furing',
      'Tahan api dan memiliki sertifikasi ramah lingkungan Green Label'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'JAYABOARD' },
      { label: 'Bahan Material', value: 'Gypsum Core dengan Kertas Recycled Khusus' },
      { label: 'Dimensi Lembaran', value: '1200 mm x 2400 mm (1.2m x 2.4m)' },
      { label: 'Ketebalan Papan', value: '9.0 mm & 12.0 mm' },
      { label: 'Sertifikasi', value: 'SNI 03-6384 & Green Label' },
      { label: 'Tepi Papan', value: 'Tapered Edge (TE) untuk sambungan kompon mulus' }
    ],
    pdfCatalog: '/catalog/11. E-catalog Jayaboard Gypsum.pdf',
    catalogName: 'E-catalog Jayaboard Gypsum.pdf',
    relatedSlugs: ['hollow-baja-ringan', 'baja-ringan-kencana', 'plafon-pvc-lamiwood']
  },

  // 5. BRAND: KENCANA
  {
    id: 'baja-ringan-kencana',
    slug: 'baja-ringan-kencana',
    name: 'Baja Ringan Kencana Truss Profil C75 SNI',
    brand: 'KENCANA',
    brandSlug: 'kencana',
    category: 'Baja Ringan',
    categorySlug: 'baja-ringan',
    badge: 'Baja Kuat SNI',
    description: 'Profil kanal C75 dan reng baja ringan Kencana berstandar SNI resmi dengan lapisan Zincalume tebal, kuat menopang genteng berat dan kanopi.',
    fullDescription: 'Baja Ringan Kencana merupakan produk baja canai dingin (cold formed steel) bersertifikat SNI resmi dengan profil presisi tinggi dan lapisan paduan seng-aluminium (Zincalume) yang melindungi struktur atap dari bahaya korosi karat hingga puluhan tahun.',
    image: '/images/catalog/9. Katalog Produk Kencana/1. Katalog Produk Kencana.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/9. Katalog Produk Kencana/1. Katalog Produk Kencana.webp',
        alt: 'Katalog Produk Resmi Baja Ringan Kencana',
        caption: 'Katalog Produk Rangka Baja Ringan Kencana'
      },
      {
        type: 'image',
        src: '/images/catalog/9. Katalog Produk Kencana/2. Katalog Produk Kencana.webp',
        alt: 'Profil Kanal C dan Reng Kencana SNI',
        caption: 'Profil Baja Ringan Kencana SNI'
      },
      {
        type: 'image',
        src: '/images/produk/produk-baja-ringan-kencana.webp',
        alt: 'Baja Ringan Kencana C75 Terpasang',
        caption: 'Pemasangan Kuda-kuda Baja Ringan Kencana'
      }
    ],
    features: [
      'Bahan High Tensile Steel G550 dengan kuat tarik tinggi',
      'Lapisan Zincalume (55% Al, 43.5% Zn, 1.5% Si) anti karat',
      'Emboss logo SNI resmi dan sertifikasi uji laboratorium',
      'Presisi sudut dan ketebalan terjamin konsisten'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'KENCANA' },
      { label: 'Bahan Material', value: 'Galvalume / Zincalume High Tensile G550' },
      { label: 'Profil Kanal C', value: 'C75.75 (0.75 mm) & C75.100 (1.00 mm)' },
      { label: 'Panjang Batang', value: '6 meter standar pabrik' },
      { label: 'Profil Reng', value: 'Tinggi 32 mm & 30 mm (tebal 0.45 mm)' },
      { label: 'Garansi', value: 'Garansi Resmi Ketahanan Struktur' }
    ],
    pdfCatalog: '/catalog/9. Katalog Produk Kencana.pdf',
    catalogName: 'Katalog Produk Kencana.pdf',
    relatedSlugs: ['hollow-baja-ringan', 'galvalum-pasir', 'plafon-pvc-lamiwood']
  },
  {
    id: 'hollow-baja-ringan',
    slug: 'hollow-baja-ringan',
    name: 'Hollow Galvalum Kencana 2x4 & 4x4 SNI',
    brand: 'KENCANA',
    brandSlug: 'kencana',
    category: 'Hollow Galvalum',
    categorySlug: 'hollow',
    badge: 'Rangka Kokoh',
    description: 'Besi hollow galvalum Kencana anti-karat untuk rangka plafon PVC dan gypsum dengan profil motif kembang kokoh dan presisi.',
    fullDescription: 'Hollow Galvalum Kencana dirancang khusus sebagai struktur gantung plafon yang kokoh, anti-rayap, dan tahan karat. Dibuat dengan motif profil bergelombang yang meningkatkan daya cengkeram sekrup dan kekakuan rangka.',
    image: '/images/catalog/9. Katalog Produk Kencana/3. Katalog Produk Kencana - Atap.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/9. Katalog Produk Kencana/3. Katalog Produk Kencana - Atap.webp',
        alt: 'Hollow Galvalum Kencana Rangka Plafon',
        caption: 'Rangka Hollow Galvalum Kencana'
      },
      {
        type: 'image',
        src: '/images/produk/produk-hollow.webp',
        alt: 'Besi Hollow Galvalum Ukuran 2x4 dan 4x4',
        caption: 'Hollow Galvalum 2x4 dan 4x4 Anti Karat'
      }
    ],
    features: [
      'Lapisan aluminium-seng tahan korosi dan kelembapan ruangan',
      'Tekstur permukaan berprofil untuk pegangan sekrup yang kuat',
      'Bobot ringan namun memiliki ketahanan lendut yang solid',
      'Panjang presisi 4 meter tanpa sambungan rawan patah'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'KENCANA' },
      { label: 'Bahan Material', value: 'Baja Lapis Galvalum SNI' },
      { label: 'Dimensi Profil', value: '2x4 (15x30 mm) & 4x4 (30x30 mm)' },
      { label: 'Ketebalan Dinding', value: '0.30 mm, 0.35 mm, 0.40 mm' },
      { label: 'Panjang Batang', value: '4.0 meter' }
    ],
    pdfCatalog: '/catalog/9. Katalog Produk Kencana.pdf',
    catalogName: 'Katalog Produk Kencana.pdf',
    relatedSlugs: ['baja-ringan-kencana', 'plafon-pvc-lamiwood', 'plafon-gypsum-jayaboard']
  },
  {
    id: 'galvalum-pasir',
    slug: 'galvalum-pasir',
    name: 'Atap Spandek & Galvalum Pasir Kencana',
    brand: 'KENCANA',
    brandSlug: 'kencana',
    category: 'Galvalum',
    categorySlug: 'galvalum',
    badge: 'Peredam Suara',
    description: 'Genteng metal dan spandek lapis pasir batuan alami untuk kanopi dan atap rumah, meredam suara hujan dan panas matahari secara maksimal.',
    fullDescription: 'Atap galvalum pasir Kencana dilapisi butiran pasir batuan alam yang direkatkan dengan resin polimer tahan cuaca tropis. Mampu meredam bising rintik hujan hingga 60% dibandingkan spandek polos biasa.',
    image: '/images/produk/produk-galvalum.webp',
    media: [
      {
        type: 'image',
        src: '/images/produk/produk-galvalum.webp',
        alt: 'Atap Galvalum Pasir Kencana Peredam Panas',
        caption: 'Spandek Galvalum Pasir Kencana'
      },
      {
        type: 'image',
        src: '/images/catalog/9. Katalog Produk Kencana/4. Katalog Produk Kencana - Atap.webp',
        alt: 'Varian Warna Galvalum Pasir Kencana',
        caption: 'Koleksi Warna Atap Galvalum Kencana'
      }
    ],
    features: [
      'Meredam suara benturan air hujan sehingga interior tetap hening',
      'Mengurangi panas radiasi matahari dari atap ke ruang hunian',
      'Anti karat, anti lumut, dan warna pasir tahan pudar',
      'Tersedia pilihan warna: Merah Marun, Hitam, Cokelat, Hijau'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'KENCANA' },
      { label: 'Bahan Material', value: 'Zincalume dilapisi Batuan Basal Alami' },
      { label: 'Lebar Efektif', value: '750 mm - 1000 mm' },
      { label: 'Ketebalan Dasar', value: '0.30 mm, 0.35 mm TCT' },
      { label: 'Pilihan Panjang', value: 'Custom sesuai pesanan proyek' }
    ],
    pdfCatalog: '/catalog/9. Katalog Produk Kencana.pdf',
    catalogName: 'Katalog Produk Kencana.pdf',
    relatedSlugs: ['baja-ringan-kencana', 'hollow-baja-ringan']
  },

  // 6. BRAND: HONOR DECORATION
  {
    id: 'hollow-kisi-kisi-honor',
    slug: 'hollow-kisi-kisi-honor',
    name: 'Hollow Kisi-kisi Plafon PT. Honor Decoration',
    brand: 'HONOR DECORATION',
    brandSlug: 'honor-decoration',
    category: 'Hollow Kisi-kisi',
    categorySlug: 'aksesori',
    badge: 'Desain Artistik',
    description: 'Profil hollow kisi-kisi dan louvre gantung PT. Honor Decoration untuk aksen arsitektural plafon modern dan partisi semi-transparan.',
    fullDescription: 'Hollow Kisi-kisi PT. Honor Decoration merupakan inovasi rangka aksen interior yang menghadirkan permainan garis vertikal/horizontal modern. Sangat diminati untuk area lobby, cafe, restoran, dan ruang keluarga bertema industrial-modern.',
    image: '/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/1. Hollow Kisi-kisi.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/1. Hollow Kisi-kisi.webp',
        alt: 'Hollow Kisi-kisi PT. Honor Decoration',
        caption: 'Katalog Resmi Hollow Kisi-kisi Honor'
      },
      {
        type: 'image',
        src: '/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/2. Hollow Kisi-kisi seri FT5-01 dan FT5-02.webp',
        alt: 'Hollow Kisi-kisi Seri FT5-01 dan FT5-02',
        caption: 'Hollow Kisi-kisi Seri FT5'
      },
      {
        type: 'image',
        src: '/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/4. Hollow Kisi-kisi seri FT5-05 dan FT10-01.webp',
        alt: 'Hollow Kisi-kisi Seri FT10',
        caption: 'Hollow Kisi-kisi Seri FT10'
      }
    ],
    features: [
      'Garis aksen modern untuk plafon baffle dan louver',
      'Finishing motif kayu dan monokrom tahan gores',
      'Sistem klip gantung presisi dan rapi',
      'Meningkatkan akustik dan sirkulasi udara ruangan'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'HONOR DECORATION' },
      { label: 'Pabrikan', value: 'PT. Honor Decoration' },
      { label: 'Tipe Seri', value: 'Seri FT5 dan Seri FT10' },
      { label: 'Panjang Standar', value: '3 meter & 4 meter' },
      { label: 'Aplikasi', value: 'Plafon Baffle, Louver Akustik, Partisi Kisi-kisi' }
    ],
    pdfCatalog: '/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration.pdf',
    catalogName: 'Katalog Hollow Kisi-kisi PT. Honor Decoration.pdf',
    relatedSlugs: ['plafon-pvc-lamiwood', 'janur-wall-panel', 'motto-wallboard']
  },

  // 7. BRAND: MOTTO
  {
    id: 'wall-panel-pvc-board',
    slug: 'wall-panel-pvc-board',
    name: 'Motto Wallboard Fluted Panel (40x295 cm)',
    brand: 'MOTTO',
    brandSlug: 'motto',
    category: 'Wallboard Fluted Panel',
    categorySlug: 'panel-dinding',
    badge: 'Interior Mewah',
    description: 'Panel dinding fluted wallboard 40cm x 295cm tebal 9mm bermotif kisi-kisi modern untuk backdrop TV, kamar tidur, dan dinding interior berkelas.',
    fullDescription: 'Motto Wallboard menghadirkan lini pelapis dinding interior berkelas dengan motif kisi fluted modern berdimensi lebar 40 cm dan panjang 2.95 m. Terbuat dari material PVC komposit berkualitas tinggi dengan ketebalan 9 mm yang tahan air, anti rayap, dan memberikan insulasi visual elegan pada hunian.',
    image: '/images/catalog/5. Motto Wallboard Catalog/1. Katalog Wallboard 40ccx295cm.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/5. Motto Wallboard Catalog/1. Katalog Wallboard 40ccx295cm.webp',
        alt: 'Motto Wallboard Ukuran 40cm x 295cm',
        caption: 'Motto Wallboard Fluted Panel 40x295 cm'
      },
      {
        type: 'image',
        src: '/images/catalog/5. Motto Wallboard Catalog/2. Katalog Wallboard 40ccx295cm model D-9805-200.webp',
        alt: 'Motto Wallboard Model D-9805-200',
        caption: 'Motto Wallboard Model D-9805-200'
      },
      {
        type: 'image',
        src: '/images/catalog/5. Motto Wallboard Catalog/3. Katalog Wallboard 40ccx295cm model D-9001-2.webp',
        alt: 'Motto Wallboard Model D-9001-2',
        caption: 'Motto Wallboard Model D-9001-2'
      },
      {
        type: 'image',
        src: '/images/catalog/5. Motto Wallboard Catalog/4. Katalog Wallboard 40ccx295cm model S-025.webp',
        alt: 'Motto Wallboard Model S-025',
        caption: 'Motto Wallboard Model S-025'
      }
    ],
    features: [
      'Motif kisi fluted 3D estetik untuk backdrop TV dan dinding hotel',
      'Dimensi lebar 40 cm x panjang 2.95 meter dengan ketebalan 9 mm',
      'Anti rayap, tahan air 100%, dan mudah dibersihkan dari noda',
      'Pemasangan cepat menggunakan lem sealant dan klip bracket tersembunyi'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'MOTTO' },
      { label: 'Dimensi Panel', value: '40 cm x 295 cm (Lebar x Panjang)' },
      { label: 'Ketebalan', value: '9 mm (0.9 cm)' },
      { label: 'Ketahanan Air', value: 'Waterproof 100% & Anti Rayap' },
      { label: 'Aplikasi', value: 'Backdrop TV, Dinding Kamar Tidur, Lobby Kantor, Koridor' }
    ],
    pdfCatalog: '/catalog/5. Motto Wallboard Catalog ukuran 40 cm x 295 cm x 0.9 cm.pdf',
    catalogName: 'Motto Wallboard Catalog.pdf',
    relatedSlugs: ['motto-pvc-board', 'motto-wall-panel', 'janur-wall-panel']
  },
  {
    id: 'motto-pvc-board',
    slug: 'motto-pvc-board',
    name: 'Motto PVC Board Sheet Marmer (122x290 cm)',
    brand: 'MOTTO',
    brandSlug: 'motto',
    category: 'PVC Board Marmer',
    categorySlug: 'panel-dinding',
    badge: 'Marmer Mewah',
    description: 'Lembaran PVC Board motif marmer mewah ukuran besar 122 cm x 290 cm tebal 5 mm. Solusi pengganti marmer alam yang berbobot ringan, tahan air 100%, anti rayap, dan sambungan minim untuk backdrop TV dan dinding mewah.',
    fullDescription: 'Motto PVC Board merupakan material pelapis dinding dan interior premium pengganti marmer alam dengan lembaran ekstra lebar (1.22 x 2.9 meter) dan ketebalan 5 mm. Menghadirkan pola marmer glossy berestetika tinggi seperti tipe LY-035, LY-058, LY-210, hingga MW-A198. Sangat praktis diaplikasikan untuk backdrop televisi ruang keluarga, dinding aksen kamar tidur, dinding lobby kantor, resepsionis, serta partisi komersial tanpa beban struktur yang berat.',
    image: '/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-035.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-035.webp',
        alt: 'Motto PVC Board 122cm x 290cm x 5mm Type LY-035',
        caption: 'Motto PVC Board Marmer Tipe LY-035 (122x290 cm)'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-058.webp',
        alt: 'Motto PVC Board Marmer Mewah Type LY-058',
        caption: 'Motto PVC Board Marmer Tipe LY-058'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-210.webp',
        alt: 'Motto PVC Board Marmer Type LY-210',
        caption: 'Motto PVC Board Motif Marmer Gelap Tipe LY-210'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-276.webp',
        alt: 'Motto PVC Board Marmer Tekstur Type LY-276',
        caption: 'Motto PVC Board Tipe LY-276'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY049.webp',
        alt: 'Motto PVC Board Pola Granit Type LY049',
        caption: 'Motto PVC Board Tipe LY049'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY209.webp',
        alt: 'Motto PVC Board Aksen Marmer Type LY209',
        caption: 'Motto PVC Board Tipe LY209'
      }
    ],
    features: [
      'Ukuran lembaran ekstra besar 122 x 290 cm (hampir tanpa sambungan vertikal)',
      'Finishing glossy UV coating tahan gores, tahan noda, dan mudah dibersihkan',
      'Waterproof 100% dan tahan terhadap kelembapan tinggi dinding',
      'Anti rayap, anti lapuk, serta berbobot jauh lebih ringan daripada marmer asli',
      'Pemasangan cepat menggunakan lem khusus sealant dan lis sambung'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'MOTTO' },
      { label: 'Ukuran Lembaran', value: '122 cm x 290 cm (1.22 m x 2.9 m)' },
      { label: 'Ketebalan', value: '5 mm' },
      { label: 'Finishing Permukaan', value: 'High Gloss UV Marble Coating' },
      { label: 'Ketahanan Air', value: '100% Waterproof & Anti Rayap' },
      { label: 'Aplikasi Utama', value: 'Backdrop TV, Wall Accent, Resepsionis, Lobby Hotel, Kamar Mandi Kering' }
    ],
    relatedSlugs: ['motto-wall-panel', 'wall-panel-pvc-board', 'janur-wall-panel', 'plafon-pvc-lamiwood']
  },
  {
    id: 'motto-wall-panel',
    slug: 'motto-wall-panel',
    name: 'Motto Wall Panel Interior Fluted (Seri WL)',
    brand: 'MOTTO',
    brandSlug: 'motto',
    category: 'Wall Panel Fluted',
    categorySlug: 'panel-dinding',
    badge: 'Aksen Dinding 3D',
    description: 'Panel dinding interior fluted kisi-kisi 3D modern seri WL dengan variasi motif serat kayu natural, abu-abu modern, dan pastel estetik. Memberikan kedalaman visual elegan dan tekstur akustik pada dinding ruangan.',
    fullDescription: 'Motto Wall Panel Seri WL (WL 1001 hingga WL 1020) adalah solusi dekorasi dinding modern dengan motif kisi-kisi fluted 3D yang berdimensi tegas dan proporsional. Dibuat dari material komposit polimer berkualitas tinggi yang tahan lembap, tahan benturan ringan, dan tidak lapuk dimakan usia. Sangat cocok dipadukan dengan indirect lighting (strip LED) pada backdrop TV, headboard tempat tidur, koridor, ruang kerja, hingga cafe dan restoran kekinian.',
    image: '/images/catalog/Motto Wall Panel/WL 1001.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/Motto Wall Panel/WL 1001.webp',
        alt: 'Motto Wall Panel Seri WL 1001 Natural Wood',
        caption: 'Motto Wall Panel Tipe WL 1001'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto Wall Panel/WL 1002.webp',
        alt: 'Motto Wall Panel Seri WL 1002 Warm Wood',
        caption: 'Motto Wall Panel Tipe WL 1002'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto Wall Panel/WL 1005.webp',
        alt: 'Motto Wall Panel Seri WL 1005 Brown Oak',
        caption: 'Motto Wall Panel Tipe WL 1005'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto Wall Panel/WL 1008.webp',
        alt: 'Motto Wall Panel Seri WL 1008 Dark Walnut',
        caption: 'Motto Wall Panel Tipe WL 1008'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto Wall Panel/WL 1011.webp',
        alt: 'Motto Wall Panel Seri WL 1011 Grey Minimalist',
        caption: 'Motto Wall Panel Tipe WL 1011'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto Wall Panel/WL 1012.webp',
        alt: 'Motto Wall Panel Seri WL 1012 Charcoal Modern',
        caption: 'Motto Wall Panel Tipe WL 1012'
      },
      {
        type: 'image',
        src: '/images/catalog/Motto Wall Panel/WL 1020.webp',
        alt: 'Motto Wall Panel Seri WL 1020 Premium Texture',
        caption: 'Motto Wall Panel Tipe WL 1020'
      }
    ],
    features: [
      'Profil kisi fluted 3 dimensi simetris memberikan estetika interior modern',
      'Varian motif serat kayu realistis (WL 1001 - WL 1020)',
      'Sistem sambungan interlocking presisi tersembunyi tanpa paku tampak',
      'Material komposit tahan air 100%, anti jamur, dan tidak dimakan rayap',
      'Pemasangan praktis pada dinding bata, semen, gipsum, maupun partisi kayu'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'MOTTO' },
      { label: 'Seri Produk', value: 'Motto WL Series (WL 1001 - WL 1020)' },
      { label: 'Tipe Profil', value: 'Fluted Wall Panel Kisi-kisi 3D' },
      { label: 'Bahan Material', value: 'WPC / Polymer Interior Composite' },
      { label: 'Ketahanan', value: 'Anti Rayap, Tahan Lembap, Tahan Jamur' },
      { label: 'Aplikasi Utama', value: 'Backdrop TV, Wall Accent Ruang Tamu, Headboard Kamar Tidur, Partisi Cafe' }
    ],
    relatedSlugs: ['motto-pvc-board', 'wall-panel-pvc-board', 'janur-wall-panel', 'plafon-pvc-lamiwood']
  },

  // 8. BRAND: JANUR
  {
    id: 'janur-lis-pigura',
    slug: 'janur-lis-pigura',
    name: 'JANUR Lis Pigura PS Premium & Moulding',
    brand: 'JANUR',
    brandSlug: 'janur',
    category: 'Lis Pigura & Moulding',
    categorySlug: 'aksesori',
    badge: 'Moulding Elegan',
    description: 'Lis pigura polystirene (PS) premium, siku 3-8cm, lis 12cm, dan moulding dinding Janur bertekstur emas, perak, dan serat kayu mewah.',
    fullDescription: 'JANUR Lis Pigura merupakan solusi ornamen profil dinding dan tepi plafon terlengkap. Menggunakan material Polystirene (PS) padat berkualitas ekspor yang tidak menyusut, tahan lembap, dan memiliki relief motif klasik maupun modern.',
    image: '/images/catalog/1. Katalog JANUR Lis Pigura/1. Katalog JANUR Lis Pigura PS Premium.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/1. Katalog JANUR Lis Pigura/1. Katalog JANUR Lis Pigura PS Premium.webp',
        alt: 'Katalog JANUR Lis Pigura PS Premium',
        caption: 'Katalog Resmi JANUR Lis Pigura PS Premium'
      },
      {
        type: 'image',
        src: '/images/catalog/1. Katalog JANUR Lis Pigura/2. Katalog JANUR Lis Pigura siku 3 series.webp',
        alt: 'Lis Pigura Siku 3 Series JANUR',
        caption: 'JANUR Lis Siku Seri 3 cm'
      },
      {
        type: 'image',
        src: '/images/catalog/1. Katalog JANUR Lis Pigura/5. Katalog JANUR Lis Pigura 12 CM dan lis Moulding.webp',
        alt: 'Lis Pigura 12 CM dan Lis Moulding JANUR',
        caption: 'JANUR Lis 12 cm & Moulding Dinding'
      }
    ],
    features: [
      'Bahan Polystirene (PS) padat tidak menyusut atau melengkung',
      'Detail relief ornamen sangat presisi dan berkelas tinggi',
      'Pilihan motif gold klasik, perak, putih polos, dan kayu',
      'Mudah dipasang dengan lem sealant khusus'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'JANUR' },
      { label: 'Bahan Material', value: 'High Density Polystirene (PS)' },
      { label: 'Ukuran Siku', value: 'Siku 3 cm, 4 cm, 5.5 cm, 6 cm, 8 cm, 12 cm' },
      { label: 'Panjang Batang', value: '2.4 meter & 3 meter' },
      { label: 'Aplikasi', value: 'Lis Tepi Plafon, Bingkai Cermin, Wall Moulding Dinding' }
    ],
    pdfCatalog: '/catalog/1. Katalog JANUR Lis Pigura.pdf',
    catalogName: 'Katalog JANUR Lis Pigura.pdf',
    relatedSlugs: ['janur-wall-panel', 'plafon-pvc-lamiwood', 'wall-panel-pvc-board']
  },
  {
    id: 'janur-wall-panel',
    slug: 'janur-wall-panel',
    name: 'JANUR Wall Panel WPC Seri J & WP',
    brand: 'JANUR',
    brandSlug: 'janur',
    category: 'Wall Panel WPC',
    categorySlug: 'panel-dinding',
    badge: 'Wood Plastic Composite',
    description: 'Panel dinding WPC JANUR Seri J, 9 Nat, sekat gantung, dan WP Series dengan tekstur serat kayu alami untuk dinding beraksen mewah.',
    fullDescription: 'JANUR Wall Panel memadukan serbuk kayu daur ulang dengan polimer PVC bermutu tinggi (WPC) yang tahan rayap 100%, tidak lapuk oleh air, dan memiliki aroma serta sentuhan layaknya kayu jati solid.',
    image: '/images/catalog/2. Katalog JANUR Wall Panel/1. Katalog JANUR Wall Panel.webp',
    media: [
      {
        type: 'image',
        src: '/images/catalog/2. Katalog JANUR Wall Panel/1. Katalog JANUR Wall Panel.webp',
        alt: 'Katalog Resmi JANUR Wall Panel WPC',
        caption: 'Katalog Resmi JANUR Wall Panel'
      },
      {
        type: 'image',
        src: '/images/catalog/2. Katalog JANUR Wall Panel/3. Katalog JANUR Wall Panel J Series 1-16.webp',
        alt: 'JANUR Wall Panel J Series 1-16',
        caption: 'JANUR Wall Panel J Series'
      },
      {
        type: 'image',
        src: '/images/catalog/2. Katalog JANUR Wall Panel/5. Katalog JANUR Wall Panel - 9 Nat.webp',
        alt: 'JANUR Wall Panel 9 Nat Kisi-kisi',
        caption: 'JANUR Wall Panel 9 Nat'
      }
    ],
    features: [
      'Material WPC tahan cuaca tropis, tidak melengkung',
      'Tekstur timbul 3D serat kayu alami yang sangat realistis',
      'Pemasangan interlock rapat dan presisi',
      'Pilihan warna kayu jati, oak, walnut, dan abu-abu modern'
    ],
    specifications: [
      { label: 'Merek Resmi', value: 'JANUR' },
      { label: 'Bahan Material', value: 'Wood Plastic Composite (WPC)' },
      { label: 'Seri Produk', value: 'J Series (1-30), 9 Nat, WP Series' },
      { label: 'Panjang Standar', value: '2.9 meter & 3 meter' },
      { label: 'Aplikasi', value: 'Dinding Foyer, Backdrop Ruang Tamu, Headboard Kamar Tidur' }
    ],
    pdfCatalog: '/catalog/2. Katalog JANUR Wall Panel.pdf',
    catalogName: 'Katalog JANUR Wall Panel.pdf',
    relatedSlugs: ['janur-lis-pigura', 'wall-panel-pvc-board', 'plafon-pvc-lamiwood']
  }
];
