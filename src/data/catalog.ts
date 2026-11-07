export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  coverImage: string;
  images: string[];
  pdfFile: string;
  itemCount: number;
}

export const catalogItems: CatalogItem[] = [
  {
    "id": "janur-lis-pigura",
    "name": "JANUR Lis Pigura & Moulding",
    "category": "Lis Pigura & Moulding",
    "brand": "JANUR",
    "description": "Koleksi lis pigura PS Premium, siku 3-8 cm, lis 12 cm, moulding dinding, dan WPC profile elegan untuk dekorasi interior.",
    "coverImage": "/images/catalog/1. Katalog JANUR Lis Pigura/1. Katalog JANUR Lis Pigura PS Premium.webp",
    "images": [
      "/images/catalog/1. Katalog JANUR Lis Pigura/1. Katalog JANUR Lis Pigura PS Premium.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/2. Katalog JANUR Lis Pigura siku 3 series.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/3. Katalog JANUR Lis Pigura siku 3, 4 dan 5.5 CM.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/4. Katalog JANUR Lis Pigura 6 dan 8 CM.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/5. Katalog JANUR Lis Pigura 12 CM dan lis Moulding.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/6. Katalog JANUR WPC (Wood Plastic Composite).webp"
    ],
    "pdfFile": "/catalog/1. Katalog JANUR Lis Pigura.pdf",
    "itemCount": 6
  },
  {
    "id": "janur-wall-panel",
    "name": "JANUR Wall Panel WPC",
    "category": "Wall Panel WPC",
    "brand": "JANUR",
    "description": "Panel dinding WPC fluted wall panel J Series, 9 Nat, sekat gantung, dan WP Series dengan tekstur serat kayu alami.",
    "coverImage": "/images/catalog/2. Katalog JANUR Wall Panel/1. Katalog JANUR Wall Panel.webp",
    "images": [
      "/images/catalog/2. Katalog JANUR Wall Panel/1. Katalog JANUR Wall Panel.webp",
      "/images/catalog/2. Katalog JANUR Wall Panel/2. Katalog JANUR Wall Panel WPC Spesification.webp",
      "/images/catalog/2. Katalog JANUR Wall Panel/3. Katalog JANUR Wall Panel J Series 1-16.webp",
      "/images/catalog/2. Katalog JANUR Wall Panel/4. Katalog JANUR Wall Panel J Series 17-30.webp",
      "/images/catalog/2. Katalog JANUR Wall Panel/5. Katalog JANUR Wall Panel - 9 Nat.webp",
      "/images/catalog/2. Katalog JANUR Wall Panel/6. Katalog JANUR Wall Panel - Sekat GAnda.webp",
      "/images/catalog/2. Katalog JANUR Wall Panel/7. Katalog JANUR Wall Panel WP Series 9 dan 4.webp"
    ],
    "pdfFile": "/catalog/2. Katalog JANUR Wall Panel.pdf",
    "itemCount": 7
  },
  {
    "id": "lamiwood-catalog",
    "name": "Lamiwood Plafon UPVC & Ornamen",
    "category": "Plafon PVC & Ornamen",
    "brand": "LAMIWOOD",
    "description": "Katalog motif plafon UPVC Seri WD01-WD54, ornamen lampu 30x30, 60x60, ukuran besar, lis figura, dan lis moulding.",
    "coverImage": "/images/catalog/3. Catalog Lamiwood/Cover Lamiwood.webp",
    "images": [
      "/images/catalog/3. Catalog Lamiwood/Cover Lamiwood.webp",
      "/images/catalog/3. Catalog Lamiwood/Lamiwood Ornamen 30x30 cm.webp",
      "/images/catalog/3. Catalog Lamiwood/Lamiwood Ornamen 60x60 cm.webp",
      "/images/catalog/3. Catalog Lamiwood/Lamiwood Ornamen Ukuran Besar.webp",
      "/images/catalog/3. Catalog Lamiwood/Lamiwood Ornamen.webp",
      "/images/catalog/3. Catalog Lamiwood/Lis Figura 1.webp",
      "/images/catalog/3. Catalog Lamiwood/Lis Figura 2.webp",
      "/images/catalog/3. Catalog Lamiwood/Lis Figura 3.webp",
      "/images/catalog/3. Catalog Lamiwood/Lis Figura 4.webp",
      "/images/catalog/3. Catalog Lamiwood/Lis Moulding.webp",
      "/images/catalog/3. Catalog Lamiwood/Lis PVC.webp",
      "/images/catalog/3. Catalog Lamiwood/Lis Wall Panel.webp",
      "/images/catalog/3. Catalog Lamiwood/Motif Lamiwood Plafon UPVC Seri WD01-WD12.webp",
      "/images/catalog/3. Catalog Lamiwood/Motif Lamiwood Plafon UPVC Seri WD13-WD24.webp",
      "/images/catalog/3. Catalog Lamiwood/Motif Lamiwood Plafon UPVC Seri WD25-WD36.webp",
      "/images/catalog/3. Catalog Lamiwood/Motif Lamiwood Plafon UPVC Seri WD37-WD48.webp",
      "/images/catalog/3. Catalog Lamiwood/Motif Lamiwood Plafon UPVC Seri WD49-WD54.webp",
      "/images/catalog/3. Catalog Lamiwood/Partisi Holo.webp",
      "/images/catalog/3. Catalog Lamiwood/Plafon PVC Motif Laminate Seri LWD01-LWD12.webp",
      "/images/catalog/3. Catalog Lamiwood/Plafon PVC Motif Laminate Seri LWD13-LWD18  dan Lis PVC.webp",
      "/images/catalog/3. Catalog Lamiwood/Plin Lantai.webp",
      "/images/catalog/3. Catalog Lamiwood/Wall Board Seri WB 01 sampai WB 16.webp",
      "/images/catalog/3. Catalog Lamiwood/Wall Cladding.webp",
      "/images/catalog/3. Catalog Lamiwood/Wall Panel Outdoor.webp",
      "/images/catalog/3. Catalog Lamiwood/Wall Panel Seri WP 01 sampai WP 20.webp",
      "/images/catalog/3. Catalog Lamiwood/Wall Panel Seri WP30 B11 sampai WP30 B25.webp",
      "/images/catalog/3. Catalog Lamiwood/Wall Panel Seri WP30-11 sampai WP30-25.webp",
      "/images/catalog/3. Catalog Lamiwood/Wall Panel Seri WP30-11G sampai WP30-25G.webp"
    ],
    "pdfFile": "/catalog/3. Katalog Lamiwood.pdf",
    "itemCount": 28
  },
  {
    "id": "motto-vinyl",
    "name": "Motto Vinyl Flooring",
    "category": "Lantai Vinyl",
    "brand": "MOTTO",
    "description": "Lantai vinyl berkualitas tahan air, anti rayap, dan bertekstur kayu hangat untuk lantai hunian dan komersial.",
    "coverImage": "/images/catalog/4. Motto Vinyl Catalog/1. Motto Vinyl Catalog LM3621 tipe LM3621.webp",
    "images": [
      "/images/catalog/4. Motto Vinyl Catalog/1. Motto Vinyl Catalog LM3621 tipe LM3621.webp",
      "/images/catalog/4. Motto Vinyl Catalog/10. Motto Vinyl Catalog tipe LM3630.webp",
      "/images/catalog/4. Motto Vinyl Catalog/11. Motto Vinyl Catalog tipe LM3631.webp",
      "/images/catalog/4. Motto Vinyl Catalog/12. Motto Vinyl Catalog tipe LM3632.webp",
      "/images/catalog/4. Motto Vinyl Catalog/2. Motto Vinyl Catalog tipe LM3622.webp",
      "/images/catalog/4. Motto Vinyl Catalog/3. Motto Vinyl Catalog tipe LM3623.webp",
      "/images/catalog/4. Motto Vinyl Catalog/4. Motto Vinyl Catalog tipe LM3624.webp",
      "/images/catalog/4. Motto Vinyl Catalog/5. Motto Vinyl Catalog tipe LM3625.webp",
      "/images/catalog/4. Motto Vinyl Catalog/6. Motto Vinyl Catalog tipe LM3626.webp",
      "/images/catalog/4. Motto Vinyl Catalog/7. Motto Vinyl Catalog tipe LM3627.webp",
      "/images/catalog/4. Motto Vinyl Catalog/8. Motto Vinyl Catalog tipe LM3628.webp",
      "/images/catalog/4. Motto Vinyl Catalog/9. Motto Vinyl Catalog tipe LM3629.webp"
    ],
    "pdfFile": "/catalog/4. Motto Vinyl Catalog .pdf",
    "itemCount": 12
  },
  {
    "id": "motto-wallboard",
    "name": "Motto Wallboard 40cm x 295cm",
    "category": "Wallboard Marmer",
    "brand": "MOTTO",
    "description": "Wallboard dinding motif marmer mewah ukuran 40 cm x 295 cm x 0.9 cm, tahan lembap, dan mudah dibersihkan.",
    "coverImage": "/images/catalog/5. Motto Wallboard Catalog/1. Katalog Wallboard 40ccx295cm.webp",
    "images": [
      "/images/catalog/5. Motto Wallboard Catalog/1. Katalog Wallboard 40ccx295cm.webp",
      "/images/catalog/5. Motto Wallboard Catalog/10. Katalog Wallboard 40ccx295cm model X-527-A-201.webp",
      "/images/catalog/5. Motto Wallboard Catalog/11. Katalog Wallboard 40ccx295cm model X-521-A-127.webp",
      "/images/catalog/5. Motto Wallboard Catalog/12. Katalog Wallboard 40ccx295cm model X-399-A-156.webp",
      "/images/catalog/5. Motto Wallboard Catalog/13. Katalog Wallboard 40ccx295cm model X-520-A-127.webp",
      "/images/catalog/5. Motto Wallboard Catalog/14. Katalog Wallboard 40ccx295cm model XK-7039-A-189.webp",
      "/images/catalog/5. Motto Wallboard Catalog/15. Katalog Wallboard 40ccx295cm model XK-7095-302.webp",
      "/images/catalog/5. Motto Wallboard Catalog/16. Katalog Wallboard 40ccx295cm model FX-115.webp",
      "/images/catalog/5. Motto Wallboard Catalog/17. Katalog Wallboard 40ccx295cm model XM-8041-9.webp",
      "/images/catalog/5. Motto Wallboard Catalog/18. Katalog Wallboard 40ccx295cm model XK7038-A189.webp",
      "/images/catalog/5. Motto Wallboard Catalog/19. Katalog Wallboard 40ccx295cm model XD9081-2.webp",
      "/images/catalog/5. Motto Wallboard Catalog/2. Katalog Wallboard 40ccx295cm model D-9805-200.webp",
      "/images/catalog/5. Motto Wallboard Catalog/3. Katalog Wallboard 40ccx295cm model D-9001-2.webp",
      "/images/catalog/5. Motto Wallboard Catalog/4. Katalog Wallboard 40ccx295cm model S-025.webp",
      "/images/catalog/5. Motto Wallboard Catalog/5. Katalog Wallboard 40ccx295cm model XD-9822-2.webp",
      "/images/catalog/5. Motto Wallboard Catalog/6. Katalog Wallboard 40ccx295cm model XD-9078-2.webp",
      "/images/catalog/5. Motto Wallboard Catalog/7. Katalog Wallboard 40ccx295cm model DFX-879-8.webp",
      "/images/catalog/5. Motto Wallboard Catalog/8. Katalog Wallboard 40ccx295cm model 7051-A-189.webp",
      "/images/catalog/5. Motto Wallboard Catalog/9. Katalog Wallboard 40ccx295cm model 7052-A-189.webp"
    ],
    "pdfFile": "/catalog/5. Motto Wallboard Catalog ukuran 40 cm x 295 cm x 0.9 cm.pdf",
    "itemCount": 19
  },
  {
    "id": "motto-pvc-board",
    "name": "Motto PVC Board 122cm x 290cm",
    "category": "PVC Board Lembaran",
    "brand": "MOTTO",
    "description": "Lembaran PVC Board motif marmer lebar 122 cm x 290 cm tebal 5mm (Seri LY & MW) untuk backdrop TV dan dinding mewah.",
    "coverImage": "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-035.webp",
    "images": [
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-035.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-058.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-210.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-272.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY-276.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY008.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY025.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY049.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY057.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY209.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY240.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LY275.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LYP03.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type LYP44.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type MW-A109.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type MW-A155.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type MW-A198.webp",
      "/images/catalog/Motto PVC Board/Motto PVC Board 122cmx290cmx5mm type MW-A302.webp"
    ],
    "pdfFile": "/catalog/6. Motto PVC Board Catalog ukuran 122 cm x 290 cm x 5 mm.pdf",
    "itemCount": 18
  },
  {
    "id": "motto-wall-panel",
    "name": "Motto Wall Panel WL Series",
    "category": "Wall Panel Kisi",
    "brand": "MOTTO",
    "description": "Koleksi wall panel motif kayu dan solid series WL 1001 - WL 1020 untuk partisi dan dinding aksen interior.",
    "coverImage": "/images/catalog/Motto Wall Panel/WL 1001.webp",
    "images": [
      "/images/catalog/Motto Wall Panel/WL 1001.webp",
      "/images/catalog/Motto Wall Panel/WL 1002.webp",
      "/images/catalog/Motto Wall Panel/WL 1003.webp",
      "/images/catalog/Motto Wall Panel/WL 1004.webp",
      "/images/catalog/Motto Wall Panel/WL 1005.webp",
      "/images/catalog/Motto Wall Panel/WL 1006.webp",
      "/images/catalog/Motto Wall Panel/WL 1007.webp",
      "/images/catalog/Motto Wall Panel/WL 1008.webp",
      "/images/catalog/Motto Wall Panel/WL 1009.webp",
      "/images/catalog/Motto Wall Panel/WL 1010.webp",
      "/images/catalog/Motto Wall Panel/WL 1011.webp",
      "/images/catalog/Motto Wall Panel/WL 1012.webp",
      "/images/catalog/Motto Wall Panel/WL 1014.webp",
      "/images/catalog/Motto Wall Panel/WL 1015.webp",
      "/images/catalog/Motto Wall Panel/WL 1016.webp",
      "/images/catalog/Motto Wall Panel/WL 1017.webp",
      "/images/catalog/Motto Wall Panel/WL 1018.webp",
      "/images/catalog/Motto Wall Panel/WL 1019.webp",
      "/images/catalog/Motto Wall Panel/WL 1020.webp"
    ],
    "pdfFile": "/catalog/5. Motto Wallboard Catalog ukuran 40 cm x 295 cm x 0.9 cm.pdf",
    "itemCount": 19
  },
  {
    "id": "hollow-kisi-kisi",
    "name": "Hollow Kisi-kisi Honor Decoration",
    "category": "Hollow & Kisi-kisi",
    "brand": "HONOR",
    "description": "Profil kisi-kisi partisi ruangan dan hollow dekorasi interior modern berkualitas presisi tinggi.",
    "coverImage": "/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/1. Hollow Kisi-kisi.webp",
    "images": [
      "/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/1. Hollow Kisi-kisi.webp",
      "/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/2. Hollow Kisi-kisi seri FT5-01 dan FT5-02.webp",
      "/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/3. Hollow Kisi-kisi seri FT5-03 dan FT5-04.webp",
      "/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/4. Hollow Kisi-kisi seri FT5-05 dan FT10-01.webp",
      "/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/5. Hollow Kisi-kisi seri FT10-02 dan FT10-03.webp",
      "/images/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration/6. Hollow Kisi-kisi seri FT10-04 dan FT10-05.webp"
    ],
    "pdfFile": "/catalog/7. Katalog Hollow Kisi-kisi PT. Honor Decoration.pdf",
    "itemCount": 6
  },
  {
    "id": "alfafon-brosur",
    "name": "Brosur Plafon PVC Alfafon",
    "category": "Plafon PVC Premium",
    "brand": "ALFAFON",
    "description": "Brosur resmi plafon PVC Alfafon: variasi motif kayu, marmer, hologram, dan minimalis anti bocor dan tahan rayap.",
    "coverImage": "/images/catalog/1. Katalog JANUR Lis Pigura/1. Katalog JANUR Lis Pigura PS Premium.webp",
    "images": [
      "/images/catalog/1. Katalog JANUR Lis Pigura/1. Katalog JANUR Lis Pigura PS Premium.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/2. Katalog JANUR Lis Pigura siku 3 series.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/3. Katalog JANUR Lis Pigura siku 3, 4 dan 5.5 CM.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/4. Katalog JANUR Lis Pigura 6 dan 8 CM.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/5. Katalog JANUR Lis Pigura 12 CM dan lis Moulding.webp",
      "/images/catalog/1. Katalog JANUR Lis Pigura/6. Katalog JANUR WPC (Wood Plastic Composite).webp"
    ],
    "pdfFile": "/catalog/8. Brosur Alfafon.pdf",
    "itemCount": 6
  },
  {
    "id": "kencana-baja-ringan",
    "name": "Kencana Rangka Baja Ringan SNI",
    "category": "Baja Ringan & Rangka",
    "brand": "KENCANA",
    "description": "Katalog resmi profil Kanal C, Reng, dan struktur rangka atap baja ringan bersertifikasi SNI resmi dari PT Kencana.",
    "coverImage": "/images/catalog/9. Katalog Produk Kencana/1. Katalog Produk Kencana.webp",
    "images": [
      "/images/catalog/9. Katalog Produk Kencana/1. Katalog Produk Kencana.webp",
      "/images/catalog/9. Katalog Produk Kencana/10. Katalog Produk Kencana - Dek Lantai.webp",
      "/images/catalog/9. Katalog Produk Kencana/11. Katalog Produk Kencana - Genteng Metal.webp",
      "/images/catalog/9. Katalog Produk Kencana/12. Katalog Produk Kencana - Genteng Rocky.webp",
      "/images/catalog/9. Katalog Produk Kencana/13. Katalog Produk Kencana - Rangka Plafon Baja Ringan.webp",
      "/images/catalog/9. Katalog Produk Kencana/14. . Katalog Produk Kencana - Rangka Partisi Baja Ringan.webp",
      "/images/catalog/9. Katalog Produk Kencana/15. Katalog Produk Kencana - Plafon PVC.webp",
      "/images/catalog/9. Katalog Produk Kencana/16. Katalog Produk Kencana - Pintu.webp",
      "/images/catalog/9. Katalog Produk Kencana/17. Katalog Produk Kencana - Bubble Insulation.webp",
      "/images/catalog/9. Katalog Produk Kencana/18. Katalog Produk Kencana - Atap uPVC.webp",
      "/images/catalog/9. Katalog Produk Kencana/19. Katalog Produk Kencana - Turbin Ventilator.webp",
      "/images/catalog/9. Katalog Produk Kencana/2. Katalog Produk Kencana.webp",
      "/images/catalog/9. Katalog Produk Kencana/20. Katalog Produk Kencana - Baut SDS & Waferhead.webp",
      "/images/catalog/9. Katalog Produk Kencana/21. Katalog Produk Kencana - Pre Engineered Building.webp",
      "/images/catalog/9. Katalog Produk Kencana/22. Katalog Produk Kencana - Fasilitas Roll On Site.webp",
      "/images/catalog/9. Katalog Produk Kencana/23. Katalog Produk Kencana - Jaring Kawat Baja.webp",
      "/images/catalog/9. Katalog Produk Kencana/24. Katalog Produk Kencana - Wire Mesh.webp",
      "/images/catalog/9. Katalog Produk Kencana/25. Katalog Produk Kencana - Rubin.webp",
      "/images/catalog/9. Katalog Produk Kencana/26. Katalog Produk Kencana - Kontak.webp",
      "/images/catalog/9. Katalog Produk Kencana/3. Katalog Produk Kencana - Atap.webp",
      "/images/catalog/9. Katalog Produk Kencana/4. Katalog Produk Kencana - Atap.webp",
      "/images/catalog/9. Katalog Produk Kencana/5. Katalog Produk Kencana - Atap.webp",
      "/images/catalog/9. Katalog Produk Kencana/7. Katalog Produk Kencana - Ragka Atap Baja Ringan.webp",
      "/images/catalog/9. Katalog Produk Kencana/8. Katalog Produk Kencana.webp",
      "/images/catalog/9. Katalog Produk Kencana/9. Katalog Produk Kencana - Rangka Baja Berat.webp",
      "/images/catalog/9. Katalog Produk Kencana/Katalog Produk Kencana Memiliki SNI.webp"
    ],
    "pdfFile": "/catalog/9. Katalog Produk Kencana.pdf",
    "itemCount": 26
  },
  {
    "id": "sakura-pvc-plafon",
    "name": "Sakura PVC Plafon & Ornamen",
    "category": "Plafon PVC & Ornamen",
    "brand": "SAKURA",
    "description": "Katalog panel plafon PVC Sakura, ornamen plafon klasik modern, dan lis profil penutup sudut ruangan.",
    "coverImage": "/images/catalog/10. Sakura PVC Plafon Catalog/1. Sakura PVC Plafon Catalog.webp",
    "images": [
      "/images/catalog/10. Sakura PVC Plafon Catalog/1. Sakura PVC Plafon Catalog.webp",
      "/images/catalog/10. Sakura PVC Plafon Catalog/2. Sakura PVC Plafon Catalog - Ornamen.webp",
      "/images/catalog/10. Sakura PVC Plafon Catalog/3. Sakura PVC Plafon Catalog - Plafon & Lis PVC.webp",
      "/images/catalog/10. Sakura PVC Plafon Catalog/4. Sakura PVC Plafon Catalog - Plafon PVC.webp"
    ],
    "pdfFile": "/catalog/10. Sakura PVC Plafon Catalog.pdf",
    "itemCount": 4
  },
  {
    "id": "jayaboard-gypsum",
    "name": "Jayaboard E-Catalog Gypsum System",
    "category": "Gypsum Board & Rangka",
    "brand": "JAYABOARD",
    "description": "Papan gypsum Jayaboard Sheetrock, sistem rangka metal furing, kompon perata, dan aksesori standar proyek.",
    "coverImage": "/images/catalog/11. E-catalog Jayaboard Gypsum/1. E-catalog Jayaboard Gypsum.webp",
    "images": [
      "/images/catalog/11. E-catalog Jayaboard Gypsum/1. E-catalog Jayaboard Gypsum.webp",
      "/images/catalog/11. E-catalog Jayaboard Gypsum/2. E-catalog Jayaboard Gypsum.webp",
      "/images/catalog/11. E-catalog Jayaboard Gypsum/3. E-catalog Jayaboard Gypsum.webp",
      "/images/catalog/11. E-catalog Jayaboard Gypsum/4. E-catalog Jayaboard Gypsum.webp"
    ],
    "pdfFile": "/catalog/11. E-catalog Jayaboard Gypsum.pdf",
    "itemCount": 4
  }
];
