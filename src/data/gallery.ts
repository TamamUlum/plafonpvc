import type { MediaItem } from '../components/MediaGallery.astro';

export interface GalleryItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  media: MediaItem[];
  location?: string;
  date?: string;
  highlights?: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gudang-stok',
    slug: 'gudang-stok-plafon-pvc',
    category: 'Gudang & Stok Material',
    title: 'Gudang Stok Plafon PVC & Material Interior',
    description: 'Ketersediaan ribuan lembar plafon PVC berbagai seri motif siap didistribusikan ke konsumen dan proyek.',
    fullDescription: 'Fasilitas gudang utama Griya Alfath menampung ribuan lembar papan plafon PVC dari berbagai merek unggulan seperti ALFAFON, BATIK, INDOKING, LAMIWOOD, dan GOLDEN. Stok terjaga secara berkala untuk memastikan kelancaran suplai proyek skala kecil hingga besar di seluruh wilayah Solo Raya tanpa hambatan ketersediaan barang.',
    image: '/images/dokumentasi/dok-gudang-stok.webp',
    media: [
      {
        type: 'image',
        src: '/images/dokumentasi/dok-gudang-stok.webp',
        alt: 'Gudang Stok Plafon PVC Griya Alfath Solo',
        caption: 'Gudang Stok Utama Plafon PVC & Rangka Galvalum'
      },
      {
        type: 'video',
        src: '/videos/banner-bg.mp4',
        thumbnail: '/images/dokumentasi/dok-gudang-stok.webp',
        alt: 'Video Kesiapan Gudang & Material Griya Alfath',
        caption: 'Video Dokumentasi: Kesiapan Gudang & Stok Material'
      },
      {
        type: 'image',
        src: '/images/dokumentasi/dok-pengiriman-material.webp',
        alt: 'Armada Pengiriman Material Siap Berangkat',
        caption: 'Proses Bongkar Muat Material ke Armada Logistik'
      }
    ],
    location: 'Solo Raya',
    date: 'Dokumentasi Fasilitas',
    highlights: [
      'Kapasitas simpan ribuan lembar plafon PVC',
      'Varian motif kayu, marmer, dan minimalis selalu sedia',
      'Area penyimpanan terlindung dari cuaca dan kelembapan tinggi',
      'Sistem sortir dan kendali mutu sebelum distribusi'
    ]
  },
  {
    id: 'pengiriman-material',
    slug: 'armada-pengiriman-material',
    category: 'Logistik & Distribusi',
    title: 'Armada Pengiriman Mandiri Cepat & Aman',
    description: 'Pengiriman pesanan langsung oleh armada toko ke lokasi proyek di Klaten, Solo, Sukoharjo, dan sekitarnya.',
    fullDescription: 'Untuk menjamin material sampai dalam kondisi sempurna tanpa risiko patah atau lecet pada pengait interlock, Griya Alfath mengoperasikan armada logistik pick-up mandiri dengan penataan material yang aman dan terikat kuat. Melayani pengiriman langsung ke lokasi proyek perumahan, ruko, maupun gedung komersial.',
    image: '/images/dokumentasi/dok-pengiriman-material.webp',
    media: [
      {
        type: 'image',
        src: '/images/dokumentasi/dok-pengiriman-material.webp',
        alt: 'Armada Pick-up Pengiriman Plafon PVC Solo',
        caption: 'Armada Pengiriman Pick-up Mandiri Griya Alfath'
      },
      {
        type: 'image',
        src: '/images/dokumentasi/dok-gudang-stok.webp',
        alt: 'Pemuatan Material dari Gudang',
        caption: 'Pengambilan Material Langsung dari Rak Gudang'
      },
      {
        type: 'video',
        src: '/videos/pemasangan-plafon.mp4',
        thumbnail: '/images/dokumentasi/dok-pengiriman-material.webp',
        alt: 'Video Logistik & Distribusi',
        caption: 'Video Dokumentasi: Distribusi Material ke Lapangan'
      }
    ],
    location: 'Wilayah Layanan Solo Raya',
    date: 'Operasional Harian',
    highlights: [
      'Armada angkut khusus material panjang hingga 4-6 meter',
      'Pengemasan terlindung untuk menjaga sambungan interlock',
      'Jadwal pengiriman tepat waktu sesuai kesepakatan proyek',
      'Penurunan material dibantu oleh tim logistik berpengalaman'
    ]
  },
  {
    id: 'toko-kartasura',
    slug: 'store-griya-alfath-kartasura',
    category: 'Store & Showroom',
    title: 'Store & Showroom Griya Alfath Kartasura',
    description: 'Fasilitas showroom bagi konsumen untuk melihat fisik panel dinding, motif marmer, dan konsultasi kebutuhan.',
    fullDescription: 'Store Kartasura hadir sebagai pusat sampel fisik terlengkap bagi kontraktor, arsitek, dan pemilik rumah yang ingin mencocokkan tekstur, warna, serta ketebalan material secara langsung. Tim konsultan kami siap membantu menghitung estimasi kebutuhan dan memberikan rekomendasi kombinasi desain.',
    image: '/images/dokumentasi/dok-toko-kartasura.webp',
    media: [
      {
        type: 'image',
        src: '/images/dokumentasi/dok-toko-kartasura.webp',
        alt: 'Showroom Griya Alfath Kartasura Sukoharjo',
        caption: 'Tampak Depan Store & Showroom Kartasura'
      },
      {
        type: 'image',
        src: '/images/dokumentasi/dok-survei-lokasi.webp',
        alt: 'Konsultasi Sampel Motif di Toko',
        caption: 'Konsultasi Pemilihan Motif dan Estimasi RAB'
      }
    ],
    location: 'Jl. A. Yani No. 158, Kartasura, Sukoharjo',
    date: 'Fasilitas Showroom',
    highlights: [
      'Display fisik panel PVC, Wallboard, WPC, dan Lis Pigura',
      'Ruang konsultasi teknis & simulasi biaya gratis',
      'Koleksi katalog fisik resmi dari produsen',
      'Akses lokasi strategis di jalur utama Kartasura'
    ]
  },
  {
    id: 'survei-lokasi',
    slug: 'survei-pengukuran-denah',
    category: 'Aktivitas Lapangan',
    title: 'Survei & Pengukuran Presisi di Lokasi',
    description: 'Pengecekan struktur atap dan pengukuran luas ruangan oleh tim teknis sebelum estimasi RAB disusun.',
    fullDescription: 'Layanan survei ke lokasi proyek dilakukan secara cuma-cuma (bebas biaya) untuk area Solo Raya. Tim teknis melakukan pengukuran dimensi ruangan menggunakan meteran laser, memeriksa ketinggian balok, serta mengecek kondisi rangka atap eksisting demi perhitungan kebutuhan bahan dan biaya yang 100% transparan.',
    image: '/images/dokumentasi/dok-survei-lokasi.webp',
    media: [
      {
        type: 'image',
        src: '/images/dokumentasi/dok-survei-lokasi.webp',
        alt: 'Tim Teknis Melakukan Pengukuran Denah',
        caption: 'Pengukuran Presisi Dimensi Ruangan di Lokasi'
      },
      {
        type: 'image',
        src: '/images/dokumentasi/dok-ready-to-work.webp',
        alt: 'Peralatan Survei Lapangan',
        caption: 'Peralatan Ukur & Laser Level Tim Survei'
      }
    ],
    location: 'Solo, Klaten, Sukoharjo, Wonogiri',
    date: 'Layanan Pra-Konstruksi',
    highlights: [
      'Pengukuran digital presisi tinggi',
      'Analisis kelayakan struktur gantungan plafon',
      'Konsultasi motif langsung di tempat dengan membawa sampel',
      'Penyusunan Rincian Anggaran Biaya (RAB) yang transparan'
    ]
  },
  {
    id: 'ready-to-work',
    slug: 'kesiapan-peralatan-aplikator',
    category: 'Kesiapan Tim',
    title: 'Standar Peralatan Kerja & Aplikator Profesional',
    description: 'Peralatan kerja lengkap (scaffolding, laser level, sekrup gantung) untuk hasil instalasi presisi dan aman.',
    fullDescription: 'Kualitas hasil pemasangan sangat bergantung pada kelengkapan alat kerja. Tim aplikator Griya Alfath dilengkapi dengan peralatan modern standar pertukangan interior seperti laser crossline level untuk kelurusan bidang plafon, scaffolding aman untuk ketinggian, serta mesin sekrup torsi tepat agar rangka hollow terpasang kokoh tanpa melintir.',
    image: '/images/dokumentasi/dok-ready-to-work.webp',
    media: [
      {
        type: 'image',
        src: '/images/dokumentasi/dok-ready-to-work.webp',
        alt: 'Peralatan Lengkap Aplikator Griya Alfath',
        caption: 'Standar Kelengkapan Alat Kerja Aplikator'
      },
      {
        type: 'image',
        src: '/images/dokumentasi/dok-tim-alfath.webp',
        alt: 'Tim Lapangan Griya Alfath',
        caption: 'Kesiapan Tim Kerja Lapangan dan Aplikator'
      }
    ],
    location: 'Fasilitas Kerja',
    date: 'Standar Operasional Prosedur',
    highlights: [
      'Alat ukur laser level untuk kerataan permukaan sempurna',
      'Penggunaan perancah/scaffolding kokoh dan aman',
      'Sekrup dan fastener berkualitas sesuai standar pabrikan',
      'Peralatan pelindung diri (K3) pada area proyek'
    ]
  },
  {
    id: 'tim-alfath',
    slug: 'family-gathering-solidaritas-tim',
    category: 'Aktivitas Perusahaan',
    title: 'Kebersamaan & Solidaritas Tim Griya Alfath',
    description: 'Membangun kebersamaan dan integritas kerja seluruh jajaran staf kantor, logistik, dan aplikator lapangan.',
    fullDescription: 'Solidaritas internal menjadi pondasi pelayanan prima kepada setiap pelanggan. Kegiatan kebersamaan dan evaluasi rutin diadakan guna menjaga keselarasan komunikasi antara tim estimasi kantor, logistik pengiriman gudang, dan tim tukang di lapangan agar setiap proyek terselesaikan sesuai standar kepuasan.',
    image: '/images/dokumentasi/dok-tim-alfath.webp',
    media: [
      {
        type: 'image',
        src: '/images/dokumentasi/dok-tim-alfath.webp',
        alt: 'Solidaritas Tim Kerja Griya Alfath Solo',
        caption: 'Agenda Evaluasi & Solidaritas Seluruh Tim Griya Alfath'
      },
      {
        type: 'image',
        src: '/images/dokumentasi/dok-toko-kartasura.webp',
        alt: 'Aktivitas Pelayanan di Toko',
        caption: 'Pelayanan Ramah Staf Toko Griya Alfath'
      }
    ],
    location: 'Internal Griya Alfath',
    date: 'Agenda Kebersamaan Perusahaan',
    highlights: [
      'Evaluasi mutu pengerjaan dan pelayanan berkala',
      'Pelatihan teknis metode pemasangan produk baru',
      'Koordinasi terpadu antar divisi operasional',
      'Komitmen kejujuran dan profesionalisme kerja'
    ]
  },
  {
    id: 'pasang-drop-ceiling',
    slug: 'pemasangan-plafon-drop-ceiling',
    category: 'Proses Pemasangan',
    title: 'Pemasangan Plafon Drop Ceiling Trap Bertingkat',
    description: 'Proses perakitan rangka hollow dan pemasangan panel plafon PVC bertingkat dengan presisi sambungan rapi.',
    fullDescription: 'Dokumentasi teknis pengerjaan drop ceiling model 1-2 trap bertingkat dengan slot indirect lighting tersembunyi. Tim aplikator merakit rangka hollow galvalum secara berjenjang dengan jarak gantungan yang rapat, kemudian memasang panel plafon PVC motif kombinasi untuk menciptakan aksen mewah pada ruangan.',
    image: '/images/layanan/layanan-plafon-pvc.webp',
    media: [
      {
        type: 'video',
        src: '/videos/pemasangan-plafon.mp4',
        thumbnail: '/images/layanan/layanan-plafon-pvc.webp',
        alt: 'Video Pemasangan Plafon PVC Drop Ceiling',
        caption: 'Video: Proses Pemasangan Panel Plafon PVC Bertingkat'
      },
      {
        type: 'image',
        src: '/images/layanan/layanan-plafon-pvc.webp',
        alt: 'Perakitan Drop Ceiling Trap Bertingkat',
        caption: 'Hasil Perakitan Rangka & Panel Drop Ceiling'
      },
      {
        type: 'image',
        src: '/images/layanan/layanan-wall-moulding.webp',
        alt: 'Finishing Interior Bersih',
        caption: 'Penyelesaian Sambungan & Lis Sudut'
      }
    ],
    location: 'Proyek Interior Solo Raya',
    date: 'Dokumentasi Teknis Lapangan',
    highlights: [
      'Struktur rangka bertingkat dengan perkuatan ganda',
      'Jalur kabel lampu LED strip terlindung rapi',
      'Sambungan interlock panel rapat tanpa celah',
      'Finishing lis tepi presisi di setiap sudut'
    ]
  },
  {
    id: 'baja-ringan',
    slug: 'perakitan-kuda-kuda-baja-ringan',
    category: 'Konstruksi Rangka',
    title: 'Perakitan Kuda-Kuda Baja Ringan Kuat & Kokoh',
    description: 'Instalasi struktur atap menggunakan kanal C dan reng SNI yang kokoh serta tahan terhadap hembusan angin.',
    fullDescription: 'Perakitan struktur rangka atap baja ringan menggunakan profil Kanal C bersertifikasi SNI resmi dari produsen terpercaya seperti KENCANA. Pengerjaan memperhitungkan beban penutup atap genteng, galvalum pasir, maupun spandek sehingga struktur aman terhadap beban angin dan tahan gempa.',
    image: '/images/layanan/layanan-baja-ringan.webp',
    media: [
      {
        type: 'image',
        src: '/images/layanan/layanan-baja-ringan.webp',
        alt: 'Struktur Kuda-kuda Baja Ringan SNI',
        caption: 'Perakitan Rangka Kuda-Kuda Baja Ringan SNI'
      },
      {
        type: 'image',
        src: '/images/dokumentasi/dok-ready-to-work.webp',
        alt: 'Peralatan Kerja Rangka Atap',
        caption: 'Peralatan Fastener & Sekrup Baja Ringan'
      }
    ],
    location: 'Konstruksi Atap Solo Raya',
    date: 'Dokumentasi Konstruksi',
    highlights: [
      'Bahan Kanal C dan Reng Zincalume bersertifikat SNI',
      'Baut roofing anti-karat dengan kerapatan standar teknik',
      'Perhitungan bentang atap presisi sesuai beban penutup',
      'Konstruksi anti rayap dan tidak lapuk dimakan usia'
    ]
  },
  {
    id: 'wall-moulding',
    slug: 'finishing-wall-moulding-dinding',
    category: 'Interior Finishing',
    title: 'Finishing Wall Moulding & Panel Dinding Mewah',
    description: 'Penyusunan pola lis moulding simetris pada dinding interior untuk mempertegas aksen elegan ruangan.',
    fullDescription: 'Dokumentasi pemasangan lis pigura Janur dan wall panel dekoratif pada area ruang tamu dan backdrop TV. Penataan simetris dengan pemotongan sudut mitre 45 derajat yang presisi menghasilkan tampilan dinding klasik modern yang anggun dan menambah nilai estetika hunian.',
    image: '/images/layanan/layanan-wall-moulding.webp',
    media: [
      {
        type: 'image',
        src: '/images/layanan/layanan-wall-moulding.webp',
        alt: 'Pemasangan Wall Moulding & Lis Pigura',
        caption: 'Pemasangan Pola Lis Moulding Dinding Elegan'
      },
      {
        type: 'image',
        src: '/images/layanan/layanan-plafon-pvc.webp',
        alt: 'Kombinasi Plafon dan Dinding',
        caption: 'Harmoni Warna Plafon PVC dan Panel Dinding'
      }
    ],
    location: 'Aksen Dinding Interior Solo',
    date: 'Dokumentasi Finishing',
    highlights: [
      'Pemotongan sudut 45 derajat menggunakan miter saw presisi',
      'Lem khusus berkekuatan rekat tinggi tanpa merusak plesteran',
      'Kombinasi lis timbul dengan wallpaper atau wall panel WPC',
      'Tampilan dinding mewah bergaya American Classic'
    ]
  }
];
