export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: 'pvc' | 'gypsum' | 'baja-ringan' | 'wall-moulding' | 'rumah' | 'komersial';
  image: string;
  description: string;
  location?: string;
  isExample?: boolean;
}

export const projects: Project[] = [
  {
    id: 'showroom-iwan-motor',
    title: 'Showroom Iwan Motor',
    category: 'Proyek Komersial',
    categorySlug: 'komersial',
    image: '/images/proyek/proyek-showroom-motor.webp',
    description: 'Pemasangan plafon PVC area showroom motor komersial dengan kombinasi motif modern dan pencahayaan terang teratur.',
    location: 'Solo Raya'
  },
  {
    id: 'gedung-ibadah-gereja',
    title: 'Plafon Gedung Ibadah',
    category: 'Proyek Plafon PVC',
    categorySlug: 'pvc',
    image: '/images/proyek/proyek-gereja.webp',
    description: 'Pengerjaan bentang lebar plafon PVC dengan rangka kokoh untuk kenyamanan dan akustik ruangan yang sejuk.',
    location: 'Solo Raya'
  },
  {
    id: 'rumah-tinggal-tawangsari',
    title: 'Rumah Tinggal Tawangsari',
    category: 'Proyek Rumah Tinggal',
    categorySlug: 'rumah',
    image: '/images/proyek/proyek-rumah-tawangsari.webp',
    description: 'Plafon PVC ruang keluarga dengan motif serat kayu hangat dan drop ceiling minimalis elegan.',
    location: 'Desa Lorog, Tawangsari'
  },
  {
    id: 'drop-ceiling-ruang-tamu',
    title: 'Drop Ceiling Ruang Tamu Modern',
    category: 'Proyek Plafon PVC',
    categorySlug: 'pvc',
    image: '/images/proyek/proyek-interior-solo-2.webp',
    description: 'Desain plafon bertingkat dengan lampu sembunyi (hidden lamp) yang memberikan aksen mewah pada area ruang utama.',
    location: 'Surakarta'
  },
  {
    id: 'proyek-komersial-simran',
    title: 'Plafon Gedung Komersial Simran',
    category: 'Proyek Komersial',
    categorySlug: 'komersial',
    image: '/images/proyek/proyek-komersial-simran.webp',
    description: 'Instalasi plafon PVC area pertokoan modern tahan air dan mudah dibersihkan dari debu aktivitas harian.',
    location: 'Klaten'
  },
  {
    id: 'wall-moulding-interior',
    title: 'Wall Moulding Ruang Keluarga',
    category: 'Proyek Wall Moulding',
    categorySlug: 'wall-moulding',
    image: '/images/layanan/layanan-wall-moulding.webp',
    description: 'Aksen panel dinding simetris dengan finishing bersih untuk memperkuat estetika interior ruangan modern.',
    location: 'Sukoharjo'
  },
  {
    id: 'rangka-atap-baja-ringan',
    title: 'Rangka Kuda-Kuda Baja Ringan',
    category: 'Proyek Baja Ringan',
    categorySlug: 'baja-ringan',
    image: '/images/layanan/layanan-baja-ringan.webp',
    description: 'Pemasangan konstruksi kuda-kuda atap baja ringan Kencana SNI untuk hunian baru yang kokoh dan tahan karat.',
    location: 'Boyolali'
  },
  {
    id: 'plafon-gypsum-flat',
    title: 'Plafon Gypsum Flat Minimalis',
    category: 'Proyek Plafon Gypsum',
    categorySlug: 'gypsum',
    image: '/images/layanan/layanan-gypsum.webp',
    description: 'Pemasangan partisi dan plafon gypsum mulus dengan finishing cat interior rata tanpa bayangan sambungan.',
    location: 'Karanganyar'
  }
];

