export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  steps: string[];
  features: string[];
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: 'pemasangan-plafon-pvc',
    title: 'Pemasangan Plafon PVC',
    shortDesc: 'Instalasi plafon PVC datar maupun drop ceiling bertingkat dengan variasi permainan lampu LED strip untuk tampilan ruangan modern, tahan air, dan bebas rayap.',
    description: 'Layanan pemasangan plafon PVC profesional oleh tim aplikator Griya Alfath. Solusi terbaik untuk mengatasi plafon bocor, kusam, atau lapuk karena kelembapan dan serangan rayap.',
    image: '/images/layanan/layanan-plafon-pvc.webp',
    steps: ['1. Survei & Ukur', '2. Rangka Hollow', '3. Pasang Panel', '4. Finishing Lis'],
    features: [
      'Material PVC tahan air 100% dan anti rayap',
      'Pengerjaan rapi dengan sambungan interlocking presisi',
      'Pilihan motif kayu mewah, marmer, dan putih minimalis',
      'Garansi pemasangan resmi Griya Alfath'
    ],
    whatsappMessage: 'Halo Griya Alfath, saya butuh jasa pasang plafon PVC'
  },
  {
    id: 'pemasangan-plafon-gypsum',
    title: 'Pemasangan Plafon Gypsum',
    shortDesc: 'Pemasangan plafon dan partisi gypsum dengan hasil akhir permukaan mulus flat sempurna, fleksibel untuk profil list klasik maupun minimalis modern.',
    description: 'Pengerjaan plafon gypsum untuk rumah, kantor, dan ruko dengan standar kompon dan penyambungan rapi tanpa gelombang, siap dicat dengan warna kesukaan Anda.',
    image: '/images/layanan/layanan-gypsum.webp',
    steps: ['1. Pengukuran', '2. Rangka Presisi', '3. Sekrup Papan', '4. Kompon Rapi'],
    features: [
      'Permukaan mulus tanpa sambungan (seamless finish)',
      'Fleksibel untuk variasi drop ceiling dan kubah artistik',
      'Menggunakan papan gypsum terkemuka (Jayaboard, Knoff)',
      'Rangka hollow galvalum kokoh dan berjarak aman'
    ],
    whatsappMessage: 'Halo Griya Alfath, saya butuh jasa pasang plafon Gypsum'
  },
  {
    id: 'pemasangan-baja-ringan',
    title: 'Pemasangan Rangka Baja Ringan',
    shortDesc: 'Perakitan struktur kuda-kuda atap dan kanopi baja ringan dengan perhitungan beban struktur yang cermat menggunakan material SNI tahan karat.',
    description: 'Jasa instalasi rangka atap baja ringan untuk bangunan baru maupun renovasi penggantian rangka kayu lapuk, dipasang dengan standar teknis keamanan tinggi.',
    image: '/images/layanan/layanan-baja-ringan.webp',
    steps: ['1. Analisa Beban', '2. Kuda-Kuda C', '3. Pemasangan Reng', '4. Penutup Atap'],
    features: [
      'Material baja ringan bersertifikasi SNI resmi',
      'Perhitungan jarak bentang dan sudut kemiringan presisi',
      'Anti karat, tahan cuaca ekstrem, dan tidak merambatkan api',
      'Dikerjakan oleh teknisi bersertifikat dan berpengalaman'
    ],
    whatsappMessage: 'Halo Griya Alfath, saya butuh jasa pasang Baja Ringan'
  },
  {
    id: 'pemasangan-wall-moulding',
    title: 'Pemasangan Wall Moulding',
    shortDesc: 'Pembuatan aksen panel dinding dekoratif (wall moulding) dan kisi-kisi WPC interior yang mempercantik ruang tamu, kamar tidur, serta backdrop TV.',
    description: 'Pengerjaan wall moulding estetis bergaya klasik Eropa modern maupun minimalis kontemporer untuk meningkatkan nilai estetika interior rumah dan ruang komersial.',
    image: '/images/layanan/layanan-wall-moulding.webp',
    steps: ['1. Desain Pola', '2. Marking Dinding', '3. Rekat & Paku', '4. Finishing Cat'],
    features: [
      'Pola simetris dan presisi pada setiap bidang dinding',
      'Pilihan profil lis gypsum atau PVC anti rayap',
      'Pengerjaan cepat tanpa debu berlebihan',
      'Kombinasi elegan dengan pencahayaan warm white'
    ],
    whatsappMessage: 'Halo Griya Alfath, saya butuh jasa Wall Moulding'
  }
];

