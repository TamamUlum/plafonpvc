export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  author: string;
  toc: TocItem[];
  ctaTitle: string;
  ctaDesc: string;
  ctaButtonText: string;
  whatsappMessage: string;
  content: string; // Semantic HTML containing h2, h3, p, tables, lists
}

export const articles: Article[] = [
  {
    slug: 'tips-memilih-plafon-pvc-berkualitas',
    title: 'Tips Memilih Plafon PVC Berkualitas untuk Rumah Tropis',
    date: '10 Mar 2026',
    category: 'Panduan',
    excerpt: 'Plafon PVC kini menjadi primadona hunian di Solo Raya. Simak panduan memilih ketebalan, motif, dan ketahanan terhadap kelembapan udara tropis.',
    image: '/images/blog/blog-tips-plafon-modern.webp',
    readTime: '4 menit baca',
    author: 'Tim Teknis Griya Alfath',
    toc: [
      { id: 'tantangan-iklim-tropis', text: 'Tantangan Iklim Tropis pada Plafon Rumah', level: 2 },
      { id: 'faktor-kelembapan-dan-bocor', text: 'Masalah Kelembapan dan Rembesan Air', level: 3 },
      { id: 'kriteria-plafon-pvc-terbaik', text: '5 Kriteria Utama Plafon PVC Bermutu Tinggi', level: 2 },
      { id: 'ketebalan-dan-kepadatan', text: '1. Ketebalan Panel dan Kepadatan Formula UPVC', level: 3 },
      { id: 'presisi-sambungan-interlock', text: '2. Presisi Sambungan Interlock (Lidah & Alur)', level: 3 },
      { id: 'lapisan-finishing-dan-uv', text: '3. Kualitas Laminasi dan Lapisan Anti UV', level: 3 },
      { id: 'rekomendasi-rangka-pendukung', text: 'Pentingnya Rangka Hollow Galvalum Berkualitas', level: 2 },
      { id: 'kesimpulan-pemilihan', text: 'Kesimpulan & Saran Pengadaan', level: 2 }
    ],
    ctaTitle: 'Konsultasikan Kebutuhan Plafon PVC Hunian Anda',
    ctaDesc: 'Dapatkan sampel fisik motif plafon PVC asli dan estimasi kebutuhan material gratis langsung dari tim spesialis Griya Alfath.',
    ctaButtonText: 'Konsultasi Pilihan Plafon via WhatsApp',
    whatsappMessage: 'Halo Mas Otello Griya Alfath, saya membaca artikel "Tips Memilih Plafon PVC Berkualitas untuk Rumah Tropis" di website dan ingin berkonsultasi mengenai pemilihan motif serta spesifikasi plafon yang cocok untuk rumah saya. Terima kasih!',
    content: `
      <p>Memilih material plafon untuk hunian di wilayah Solo Raya membutuhkan pertimbangan cermat terhadap iklim tropis yang memiliki tingkat kelembapan tinggi dan fluktuasi suhu yang cukup signifikan antara siang dan malam hari. Material plafon konvensional seperti triplek atau papan kayu sering kali menghadapi kendala lapuk, serangan rayap, dan noda rembesan air hujan yang sulit dihilangkan.</p>

      <h2 id="tantangan-iklim-tropis">Tantangan Iklim Tropis pada Plafon Rumah</h2>
      <p>Rumah-rumah di kawasan tropis Indonesia menghadapi dua musuh utama keawetan interior: paparan panas radiasi atap seng/genteng pada siang hari dan tingginya kadar uap air di udara saat musim penghujan tiba.</p>

      <h3 id="faktor-kelembapan-dan-bocor">Masalah Kelembapan dan Rembesan Air</h3>
      <p>Ketika genteng rumah mengalami pergeseran atau retak rambut, air hujan dapat merembes ke ruang atap. Pada plafon gypsum standar tanpa formula anti-air, rembesan ini akan menimbulkan bercak kecokelatan, melengkung, dan akhirnya jebol. Inilah alasan mengapa plafon PVC dan UPVC kini menjadi solusi primadona bagi pemilik rumah yang menginginkan investasi plafon jangka panjang bebas renovasi berulang.</p>

      <h2 id="kriteria-plafon-pvc-terbaik">5 Kriteria Utama Plafon PVC Bermutu Tinggi</h2>
      <p>Di pasaran saat ini beredar banyak merek plafon PVC dengan kualitas yang sangat bervariasi. Agar tidak salah memilih material yang mudah retak atau kusam, perhatikan panduan teknis berikut:</p>

      <h3 id="ketebalan-dan-kepadatan">1. Ketebalan Panel dan Kepadatan Formula UPVC</h3>
      <p>Pilihlah panel plafon dengan ketebalan minimal 7.5 mm hingga 8.0 mm. Panel yang terlalu tipis (di bawah 6 mm) cenderung lentur berlebihan dan berisiko melorot di antara jarak rangka. Merek unggulan seperti <strong>Lamiwood</strong> dan <strong>Alfafon</strong> menggunakan formulasi UPVC padat yang kokoh namun tetap elastis, sehingga tidak mudah patah saat dipotong dan dipaku sekrup.</p>

      <h3 id="presisi-sambungan-interlock">2. Presisi Sambungan Interlock (Lidah & Alur)</h3>
      <p>Kerapian hasil akhir plafon PVC sangat ditentukan oleh sistem sambungan lidah dan alur (tongue and groove). Panel yang berkualitas memiliki lidah pengunci yang lurus dan pas saat diselipkan, menghasilkan bidang permukaan yang rata dan nat sambungan yang tampak sangat tipis serta seragam.</p>

      <h3 id="lapisan-finishing-dan-uv">3. Kualitas Laminasi dan Lapisan Anti UV</h3>
      <p>Untuk motif serat kayu timbul atau marmer, pastikan lapisan laminasi merekat secara senyawa dengan badan panel dan tidak mudah mengelupas. Lapisan pelindung UV mencegah warna pudar atau menguning akibat terpapar pantulan cahaya lampu dan panas atap.</p>

      <h2 id="rekomendasi-rangka-pendukung">Pentingnya Rangka Hollow Galvalum Berkualitas</h2>
      <p>Kualitas plafon yang prima harus didukung oleh struktur rangka yang kokoh. Hindari penggunaan rangka kayu yang berisiko termakan rayap atau bengkok seiring waktu. Kami merekomendasikan penggunaan <strong>Rangka Hollow Galvalum Kencana SNI</strong> berukuran 2x4 dan 4x4 dengan jarak pasang gantungan maksimal 60 cm x 80 cm untuk menjamin ketahanan plafon puluhan tahun.</p>

      <h2 id="kesimpulan-pemilihan">Kesimpulan & Saran Pengadaan</h2>
      <p>Investasi pada plafon PVC bermutu tinggi memberikan ketenangan pikiran seumur hidup bebas noda bocor dan serangan rayap. Selalu pastikan Anda membeli dari distributor resmi yang menyediakan sampel motif fisik asli dan garansi material yang jelas.</p>
    `
  },
  {
    slug: 'perbedaan-plafon-pvc-dan-gypsum',
    title: 'Plafon PVC vs Gypsum: Mana yang Paling Cocok untuk Anda?',
    date: '24 Feb 2026',
    category: 'Perbandingan',
    excerpt: 'Ketahui perbandingan mendalam mengenai daya tahan air, kemudahan perawatan, biaya pemasangan, dan estetika visual antara PVC dan gypsum.',
    image: '/images/blog/blog-perbedaan-pvc-gypsum.webp',
    readTime: '5 menit baca',
    author: 'Tim Teknis Griya Alfath',
    toc: [
      { id: 'pengantar-perbandingan', text: 'Memilih Antara Estetika Halus vs Ketahanan Ekstrem', level: 2 },
      { id: 'keunggulan-plafon-pvc', text: 'Kelebihan dan Karakteristik Plafon PVC', level: 2 },
      { id: 'keunggulan-plafon-gypsum', text: 'Kelebihan dan Karakteristik Plafon Gypsum', level: 2 },
      { id: 'tabel-perbandingan-lengkap', text: 'Tabel Perbandingan Teknis PVC vs Gypsum', level: 2 },
      { id: 'rekomendasi-ruangan', text: 'Panduan Pemilihan Berdasarkan Jenis Ruangan', level: 3 },
      { id: 'kesimpulan-keputusan', text: 'Kesimpulan Akhir Pilihan Terbaik', level: 2 }
    ],
    ctaTitle: 'Butuh Rekomendasi Material untuk Ruangan Anda?',
    ctaDesc: 'Diskusikan denah dan kebutuhan rumah Anda bersama konsultan teknis Griya Alfath untuk mendapatkan perbandingan RAB yang transparan.',
    ctaButtonText: 'Minta Perbandingan RAB via WhatsApp',
    whatsappMessage: 'Halo Mas Otello Griya Alfath, saya membaca ulasan "Plafon PVC vs Gypsum: Mana yang Paling Cocok untuk Anda?" di website dan ingin meminta saran serta perbandingan estimasi biaya untuk renovasi ruangan saya. Terima kasih!',
    content: `
      <p>Ketika merencanakan renovasi atau pembangunan plafon rumah di Solo Raya, dua pilihan material yang paling sering dipertimbangkan adalah <strong>Plafon PVC</strong> dan <strong>Plafon Gypsum Board</strong>. Keduanya memiliki keunggulan spesifik dan karakter visual yang berbeda sesuai peruntukan fungsi ruangan.</p>

      <h2 id="pengantar-perbandingan">Memilih Antara Estetika Halus vs Ketahanan Ekstrem</h2>
      <p>Plafon gypsum telah lama dikenal menghasilkan bidang permukaan plafon yang menyatu mulus tanpa sambungan (seamless). Di sisi lain, plafon PVC menawarkan ketahanan mutlak terhadap air, rayap, dan jamur dengan pilihan motif kayu timbul yang siap pakai tanpa memerlukan proses pengecatan berulang.</p>

      <h2 id="keunggulan-plafon-pvc">Kelebihan dan Karakteristik Plafon PVC</h2>
      <ul>
        <li><strong>Anti Air 100%:</strong> Tahan total terhadap rembesan air hujan dari genteng yang bocor tanpa resiko melengkung atau lapuk.</li>
        <li><strong>Bebas Rayap:</strong> Terbuat dari polimer plastik sintetis yang sama sekali tidak dapat dimakan rayap tanah maupun rayap kayu.</li>
        <li><strong>Finishing Siap Pakai:</strong> Tidak memerlukan kompon atau cat dasar, menghemat waktu dan biaya pengerjaan tukang.</li>
        <li><strong>Mudah Dibersihkan:</strong> Debu atau jelaga dapur cukup dibersihkan dengan kain lap basah.</li>
      </ul>

      <h2 id="keunggulan-plafon-gypsum">Kelebihan dan Karakteristik Plafon Gypsum</h2>
      <ul>
        <li><strong>Bidang Mulus Tanpa Garis:</strong> Sambungan antar papan dapat ditutup kompon hingga benar-benar tak terlihat.</li>
        <li><strong>Fleksibilitas Warna:</strong> Dapat dicat ulang kapan saja sesuai tren warna interior rumah.</li>
        <li><strong>Bagus untuk Peredam Suara:</strong> Struktur papan gypsum memiliki densitas yang baik untuk meredam gema ruangan.</li>
        <li><strong>Harga Ekonomis:</strong> Biaya material lembaran gypsum cenderung lebih terjangkau untuk proyek volume besar.</li>
      </ul>

      <h2 id="tabel-perbandingan-lengkap">Tabel Perbandingan Teknis PVC vs Gypsum</h2>
      <table style="width:100%; border-collapse:collapse; margin:1.5rem 0; font-size:0.9rem;">
        <thead>
          <tr style="background:#0f2b48; color:#fff;">
            <th style="padding:10px; border:1px solid #cbd5e1; text-align:left;">Parameter</th>
            <th style="padding:10px; border:1px solid #cbd5e1; text-align:left;">Plafon PVC (Lamiwood / Alfafon)</th>
            <th style="padding:10px; border:1px solid #cbd5e1; text-align:left;">Plafon Gypsum (Jayaboard)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px; border:1px solid #cbd5e1; font-weight:700;">Ketahanan Air</td>
            <td style="padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:700;">100% Tahan Air (Waterproof)</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Rentan noda jika bocor</td>
          </tr>
          <tr style="background:#f8fafc;">
            <td style="padding:10px; border:1px solid #cbd5e1; font-weight:700;">Ketahanan Rayap</td>
            <td style="padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:700;">100% Anti Rayap</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Kertas permukaan bisa diserang</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #cbd5e1; font-weight:700;">Kebutuhan Cat</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Tidak perlu cat finishing</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Wajib kompon dan cat 2-3 lapis</td>
          </tr>
          <tr style="background:#f8fafc;">
            <td style="padding:10px; border:1px solid #cbd5e1; font-weight:700;">Kecepatan Pasang</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Sangat cepat (sistem interlock)</td>
            <td style="padding:10px; border:1px solid #cbd5e1;">Membutuhkan waktu pengeringan kompon</td>
          </tr>
        </tbody>
      </table>

      <h3 id="rekomendasi-ruangan">Panduan Pemilihan Berdasarkan Jenis Ruangan</h3>
      <p>Untuk area yang rentan lembap seperti teras luar, kamar mandi, dapur, dan lantai atas di bawah atap genteng langsung, <strong>Plafon PVC adalah pilihan mutlak terbaik</strong>. Sementara untuk ruang rapat formal atau ruang tamu dengan konsep plafon drop ceiling cat putih polos datar, papan gypsum Jayaboard tetap menjadi pilihan yang sangat elegan.</p>

      <h2 id="kesimpulan-keputusan">Kesimpulan Akhir Pilihan Terbaik</h2>
      <p>Kombinasi terbaik bagi banyak hunian modern di Solo Raya adalah mengaplikasikan plafon PVC pada area servis, teras, dan kamar mandi, serta plafon PVC motif kayu mewah atau gypsum berkualitas di ruang keluarga.</p>
    `
  },
  {
    slug: 'inspirasi-desain-drop-ceiling-lampu-sembunyi',
    title: 'Inspirasi Desain Drop Ceiling dengan Lampu Sembunyi Modern',
    date: '18 Jan 2026',
    category: 'Inspirasi Desain',
    excerpt: 'Eksplorasi ide tata cahaya hangat menggunakan indirect lighting dan drop ceiling PVC untuk menciptakan atmosfer ruang tamu mewah dan estetik.',
    image: '/images/blog/blog-inspirasi-plafon-interior.webp',
    readTime: '4 menit baca',
    author: 'Tim Desain Interior Griya Alfath',
    toc: [
      { id: 'konsep-drop-ceiling', text: 'Konsep Drop Ceiling & Indirect Lighting', level: 2 },
      { id: 'manfaat-estetika-ruangan', text: 'Keuntungan Visual Drop Ceiling pada Ruang Tamu', level: 2 },
      { id: 'pilihan-motif-kombinasi', text: 'Kombinasi Motif PVC dan Strip LED', level: 2 },
      { id: 'drop-ceiling-trap-1-vs-2', text: 'Pilihan Model Trap 1 Tingkat vs Trap 2 Tingkat', level: 3 },
      { id: 'tips-instalasi-kabel', text: 'Tips Penataan Jalur Kabel dan Suhu Lampu', level: 2 },
      { id: 'kesimpulan-desain', text: 'Wujudkan Drop Ceiling Impian Bersama Griya Alfath', level: 2 }
    ],
    ctaTitle: 'Ingin Mewujudkan Desain Drop Ceiling Seperti Ini?',
    ctaDesc: 'Konsultasikan ide desain dan ukuran ruangan Anda. Kami menyediakan layanan survei lokasi gratis dan visualisasi contoh motif plafon di Solo Raya.',
    ctaButtonText: 'Diskusikan Desain Drop Ceiling via WhatsApp',
    whatsappMessage: 'Halo Mas Otello Griya Alfath, saya membaca artikel "Inspirasi Desain Drop Ceiling dengan Lampu Sembunyi Modern" di website dan tertarik untuk konsultasi estimasi pemasangan model drop ceiling di rumah saya. Terima kasih!',
    content: `
      <p>Desain plafon bertingkat atau <strong>drop ceiling</strong> telah menjadi standar kemewahan bagi interior hunian modern di Solo Raya. Dengan memadukan trap bertingkat dan tata cahaya tersembunyi (indirect lighting), ruangan terasa lebih luas, berdimensi, dan memberikan suasana hangat yang menenangkan bagi keluarga.</p>

      <h2 id="konsep-drop-ceiling">Konsep Drop Ceiling &amp; Indirect Lighting</h2>
      <p>Drop ceiling merupakan teknik menurunkan sebagian bidang plafon dengan selisih ketinggian antara 10 cm hingga 20 cm. Pada celah antara bidang atas dan bidang bawah, dipasang slot tersembunyi untuk menempatkan strip lampu LED atau lampu selang warm white. Cahaya lampu tidak menyorot langsung ke mata, melainkan memantul lembut ke permukaan plafon atas.</p>

      <h2 id="manfaat-estetika-ruangan">Keuntungan Visual Drop Ceiling pada Ruang Tamu</h2>
      <p>Ruang tamu dan ruang keluarga adalah area utama di mana tamu dan keluarga menghabiskan waktu bersama. Mengaplikasikan drop ceiling memberikan nilai tambah instan:</p>
      <ul>
        <li><strong>Menciptakan Ilusi Ketinggian:</strong> Garis trap bertingkat mengarahkan pandangan ke atas sehingga langit-langit terkesan lebih tinggi.</li>
        <li><strong>Fokus Pencahayaan Ambience:</strong> Lampu sembunyi memberikan atmosfer santai di malam hari tanpa silau lampu utama.</li>
        <li><strong>Zonasi Ruang Tanpa Sekat:</strong> Drop ceiling dapat membedakan area ruang makan dan ruang santai dalam satu denah open-space.</li>
      </ul>

      <h2 id="pilihan-motif-kombinasi">Kombinasi Motif PVC dan Strip LED</h2>
      <p>Keunggulan menggunakan material plafon PVC untuk drop ceiling adalah kemudahan mengombinasikan warna dan motif. Anda dapat menggunakan plafon PVC motif serat kayu tua seperti <em>Lamiwood Seri LWD</em> di bagian bidang tengah, dan mengelilinginya dengan trap putih glossy bermotif minimalis di bagian tepi luar.</p>

      <h3 id="drop-ceiling-trap-1-vs-2">Pilihan Model Trap 1 Tingkat vs Trap 2 Tingkat</h3>
      <p>Untuk ruangan dengan tinggi plafon standar (2.8m - 3.2m), model <strong>Trap 1 Tingkat</strong> adalah pilihan paling proporsional. Namun untuk ruangan dengan void tinggi (di atas 3.5m) atau lobby kantor, model <strong>Trap 2 Tingkat</strong> bertumpuk memberikan kemegahan arsitektural yang sangat menonjol.</p>

      <h2 id="tips-instalasi-kabel">Tips Penataan Jalur Kabel dan Suhu Lampu</h2>
      <p>Pastikan rangka hollow dibuat dengan penguat tambahan pada sudut trap agar slot lampu tidak melengkung. Gunakan lampu LED strip dengan temperatur warna 3000K (Warm White) untuk atmosfer hangat atau 4000K (Natural White) untuk kesan modern bersih.</p>

      <h2 id="kesimpulan-desain">Wujudkan Drop Ceiling Impian Bersama Griya Alfath</h2>
      <p>Tim tukang aplikator Griya Alfath telah berpengalaman mengerjakan ratusan proyek drop ceiling plafon PVC di Solo, Klaten, Sukoharjo, dan Wonogiri dengan hasil sambungan presisi dan rapi bergaransi.</p>
    `
  },
  {
    slug: 'panduan-memilih-rangka-baja-ringan-sni',
    title: 'Panduan Memilih Rangka Baja Ringan SNI untuk Atap dan Plafon',
    date: '5 Jan 2026',
    category: 'Konstruksi',
    excerpt: 'Faktor-faktor penting dalam menentukan ketebalan profil kanal C dan reng baja ringan agar struktur atap aman dari risiko lendut jangka panjang.',
    image: '/images/layanan/layanan-baja-ringan.webp',
    readTime: '6 menit baca',
    author: 'Tim Konstruksi Baja Griya Alfath',
    toc: [
      { id: 'keamanan-struktur-atap', text: 'Pentingnya Keamanan Struktur Rangka Atap', level: 2 },
      { id: 'standar-sni-dan-g550', text: 'Standar SNI dan Spesifikasi Baja Mutu Tinggi (G550)', level: 2 },
      { id: 'memilih-profil-kanal-c', text: 'Ketebalan Profil Kanal C dan Reng yang Tepat', level: 2 },
      { id: 'c75-75-vs-c75-100', text: 'Perbedaan Kanal C75.75 vs C75.100', level: 3 },
      { id: 'keunggulan-kencana-truss', text: 'Mengapa Memilih Baja Ringan Kencana SNI?', level: 2 },
      { id: 'kesalahan-instalasi-umum', text: 'Kesalahan Umum Pemasangan yang Harus Dihindari', level: 2 },
      { id: 'kesimpulan-keamanan', text: 'Konsultasi Struktur Rangka Bersama Griya Alfath', level: 2 }
    ],
    ctaTitle: 'Konsultasikan Kebutuhan Rangka Baja Ringan Anda',
    ctaDesc: 'Pastikan struktur atap hunian Anda menggunakan material bersertifikasi SNI resmi dengan perhitungan beban yang aman dan garansi konstruksi.',
    ctaButtonText: 'Minta Penawaran Baja Ringan SNI via WhatsApp',
    whatsappMessage: 'Halo Mas Otello Griya Alfath, saya membaca panduan "Panduan Memilih Rangka Baja Ringan SNI untuk Atap dan Plafon" di website dan ingin meminta penawaran material kanal C Kencana untuk proyek atap saya. Terima kasih!',
    content: `
      <p>Atap merupakan pelindung utama seluruh bangunan dari panas terik dan guyuran hujan badai. Memilih material rangka atap bukanlah perkara mencari harga termurah, melainkan menjamin keselamatan penghuni rumah dalam jangka panjang.</p>

      <h2 id="keamanan-struktur-atap">Pentingnya Keamanan Struktur Rangka Atap</h2>
      <p>Kayu balok yang dahulu lazim digunakan kini semakin langka, mahal, dan rentan keropos dimakan rayap dalam hitungan tahun. Baja ringan cold-formed steel telah menggantikan kayu secara masif di Solo Raya karena memiliki ketahanan terhadap rayap, tidak lapuk, dan bobot mati struktur yang jauh lebih ringan bagi pondasi rumah.</p>

      <h2 id="standar-sni-dan-g550">Standar SNI dan Spesifikasi Baja Mutu Tinggi (G550)</h2>
      <p>Tidak semua baja ringan yang dijual bebas di pasaran memiliki mutu yang sama. Baja ringan struktural wajib memenuhi standar kuat tarik <strong>High Tensile G550</strong> (tegangan leleh minimal 550 MPa). Material yang tidak berstandar SNI sering kali menggunakan baja daur ulang lunak (G300) yang mudah tertekuk di bawah beban angin kencang.</p>

      <h2 id="memilih-profil-kanal-c">Ketebalan Profil Kanal C dan Reng yang Tepat</h2>
      <p>Profil kanal C berfungsi sebagai kaki kuda-kuda utama penopang beban genteng. Ketebalan profil yang direkomendasikan bergantung pada jenis penutup atap yang Anda gunakan:</p>

      <h3 id="c75-75-vs-c75-100">Perbedaan Kanal C75.75 vs C75.100</h3>
      <ul>
        <li><strong>Profil C75.75 (Tebal 0.75 mm):</strong> Standar ideal untuk atap genteng metal, spandek galvalum, dan asbes gelombang. Memberikan rasio kekuatan dan efisiensi biaya terbaik.</li>
        <li><strong>Profil C75.100 (Tebal 1.00 mm):</strong> Wajib digunakan untuk penutup atap berat seperti genteng keramik (Kanmuri/KIA) dan genteng beton press yang memiliki beban mati di atas 45 kg/m².</li>
      </ul>

      <h2 id="keunggulan-kencana-truss">Mengapa Memilih Baja Ringan Kencana SNI?</h2>
      <p>Griya Alfath mempercayakan pengadaan rangka atap pada produk <strong>Kencana Truss SNI</strong>. Kencana dilapisi paduan seng-aluminium tahan karat (Zincalume) dengan ketebalan lapisan yang teruji laboratorium, serta memiliki profil rusuk pengaku (stiffener) yang terbukti menambah daya lentur struktur hingga 30% dibanding profil polos.</p>

      <h2 id="kesalahan-instalasi-umum">Kesalahan Umum Pemasangan yang Harus Dihindari</h2>
      <p>Bahkan material baja terbaik dapat gagal jika dipasang oleh tukang yang tidak memahami prinsip mekanika struktur:</p>
      <ul>
        <li><strong>Jarak Kuda-kuda Terlalu Lebar:</strong> Jarak antar kuda-kuda tidak boleh melebihi 1.2 meter untuk genteng berat.</li>
        <li><strong>Pengurangan Baut Self-Drilling Screw:</strong> Setiap titik simpul wajib menggunakan minimal 2 hingga 4 sekrup baja berstandar kelas 3.</li>
        <li><strong>Tidak Memasang Bracing / Ikatan Angin:</strong> Batang pengaku diagonal sangat penting agar rangka tidak bergeser saat diterpa angin samping.</li>
      </ul>

      <h2 id="kesimpulan-keamanan">Konsultasi Struktur Rangka Bersama Griya Alfath</h2>
      <p>Griya Alfath siap membantu estimasi kebutuhan material baja ringan dan pemasangan kanopi maupun kuda-kuda atap rumah bergaransi di seluruh Solo Raya.</p>
    `
  }
];
