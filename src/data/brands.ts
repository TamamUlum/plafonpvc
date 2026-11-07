export interface Brand {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryType: 'pvc' | 'gypsum' | 'baja-ringan' | 'panel' | 'aksesori';
  image?: string;
  initials?: string;
  description: string;
  pdfCatalog?: string;
  isBestSeller?: boolean;
}

export const brands: Brand[] = [
  {
    id: 'lamiwood',
    slug: 'lamiwood',
    name: 'LAMIWOOD',
    category: 'Plafon UPVC Premium',
    categoryType: 'pvc',
    image: '/images/catalog/3. Catalog Lamiwood/Cover Lamiwood.webp',
    isBestSeller: true,
    description: 'Brand unggulan plafon UPVC premium Best Seller dengan 50+ varian motif serat kayu timbul, marmer mewah, sambungan interlock rapat, dan ketahanan air 100% anti rayap.'
  },
  {
    id: 'alfafon',
    slug: 'alfafon',
    name: 'ALFAFON',
    category: 'Plafon PVC & Lis Dekoratif',
    categoryType: 'pvc',
    image: '/images/catalog/8. Brosur Alfafon/7. Alfafon plafon, solusi interior rumah anda.webp',
    description: 'Brand pelopor plafon PVC dengan variasi motif marmer dan serat kayu seri AF, papan laminate tebal, serta koleksi lis profil PVC terintegrasi.'
  },
  {
    id: 'sakura',
    slug: 'sakura',
    name: 'SAKURA',
    category: 'Plafon PVC Modern',
    categoryType: 'pvc',
    image: '/images/catalog/10. Sakura PVC Plafon Catalog/1. Sakura PVC Plafon Catalog.webp',
    description: 'Plafon PVC modern dengan motif garis minimalis, strip perak elegan, dan permukaan mudah dibersihkan untuk hunian kontemporer.'
  },
  {
    id: 'jayaboard',
    slug: 'jayaboard',
    name: 'JAYA BOARD',
    category: 'Gypsum Board SNI',
    categoryType: 'gypsum',
    image: '/images/catalog/11. E-catalog Jayaboard Gypsum/1. E-catalog Jayaboard Gypsum.webp',
    description: 'Market leader papan gypsum Indonesia dengan teknologi Sheetrock SNI, kerataan permukaan sempurna, tahan lendut, dan mudah dicat kompon.'
  },
  {
    id: 'kencana',
    slug: 'kencana',
    name: 'KENCANA',
    category: 'Baja Ringan SNI & Hollow',
    categoryType: 'baja-ringan',
    image: '/images/catalog/9. Katalog Produk Kencana/1. Katalog Produk Kencana.webp',
    description: 'Produsen baja ringan SNI terpercaya untuk rangka atap profil C75, reng, serta rangka hollow galvalum berdaya tahan tinggi anti-karat.'
  },
  {
    id: 'honor-decoration',
    slug: 'honor-decoration',
    name: 'HONOR DECORATION',
    category: 'Hollow Kisi-kisi & Louver',
    categoryType: 'aksesori',
    image: '/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/1. Hollow Kisi-kisi.webp',
    description: 'Penyedia hollow kisi-kisi dan kisi interior modern untuk aksen plafon acoustic, louver, dan partisi semi-transparan artistik.'
  },
  {
    id: 'motto',
    slug: 'motto',
    name: 'MOTTO',
    category: 'Vinyl, Wallboard & PVC Board',
    categoryType: 'panel',
    image: '/images/catalog/5. Motto Wallboard Catalog/1. Katalog Wallboard 40ccx295cm.webp',
    description: 'Rangkaian dekorasi interior modern meliputi lantai vinyl seri LM, fluted wallboard 40cm x 295cm, dan lembaran PVC board motif marmer 122cm x 290cm.'
  },
  {
    id: 'janur',
    slug: 'janur',
    name: 'JANUR',
    category: 'Lis Pigura & Wall Panel WPC',
    categoryType: 'panel',
    image: '/images/catalog/1. Katalog JANUR Lis Pigura/1. Katalog JANUR Lis Pigura PS Premium.webp',
    description: 'Spesialis lis pigura polystirene (PS) premium, moulding dinding elegan, dan wall panel WPC seri J dan WP bertekstur kayu 3 dimensi.'
  }
];
