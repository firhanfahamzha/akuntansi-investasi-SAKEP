/* ============================================================
   AKUNTANSI INVESTASI — SAK EP
   Hash Router + Konten Bab 1-4 + Dark Mode + Search
   ============================================================ */

/* ---------- DATA: DAFTAR BAB ---------- */
const CHAPTERS = [
  { id: 1, slug: 'konsep-dasar', title: 'Konsep Dasar Investasi', icon: '💡',
    desc: 'Definisi, klasifikasi, tujuan, investor vs investee, efek ekuitas vs utang.' },
  { id: 2, slug: 'kerangka-standar', title: 'Kerangka Standar & Posisi Investor', icon: '⚖️',
    desc: 'SAK ETAP, SAK EP, PSAK 71/IFRS 9, perbandingan, dan dampak pilihan kebijakan.' },
  { id: 3, slug: 'pengakuan-pengukuran', title: 'Pengakuan & Pengukuran', icon: '📏',
    desc: 'Pengakuan awal, pengukuran selanjutnya, EIR, nilai wajar, penurunan nilai.' },
  { id: 4, slug: 'penyajian-pengungkapan', title: 'Penyajian & Pengungkapan', icon: '📄',
    desc: 'Klasifikasi lancar/tidak lancar, pengungkapan Bab 11 dan Bab 12.' },
  { id: 5, slug: 'pencatatan', title: 'Pencatatan Akuntansi & Contoh', icon: '📖',
    desc: 'Jurnal saham, obligasi, EIR, FVTPL, dan penurunan nilai.' },
  { id: 6, slug: 'instrumen-lain', title: 'Instrumen Investasi Lain', icon: '🪙',
    desc: 'Reksa dana, derivatif, cryptocurrency, dan forex.' },
  { id: 7, slug: 'latihan', title: 'Latihan & Kunci', icon: '✏️',
    desc: 'Soal hitungan dan konsep beserta kunci jawaban lengkap.' },
  { id: 8, slug: 'glosarium', title: 'Glosarium & Rangkuman', icon: '📚',
    desc: 'Istilah kunci, ringkasan bab, dan daftar pustaka.' },
];

/* ---------- DATA: KONTEN BAB 1-4 ---------- */
const CONTENT = {
  'konsep-dasar': `
    <div class="section">
      <h2>1.1 Definisi Investasi</h2>
      <p>Investasi adalah penempatan dana pada aset tertentu dengan tujuan memperoleh manfaat ekonomi di masa depan. Dalam kerangka konseptual akuntansi, investasi memenuhi definisi <strong>aset</strong>: sumber daya yang dikendalikan entitas, timbul dari peristiwa lalu, dan diharapkan memberi manfaat ekonomi masa depan.</p>
      <div class="table-wrap"><table>
        <tr><th>Unsur definisi aset</th><th>Makna</th><th>Penerapan pada investasi</th></tr>
        <tr><td>Dikendalikan entitas</td><td>Entitas dapat menentukan penggunaan & memperoleh manfaatnya</td><td>Saham atau obligasi tercatat atas nama entitas</td></tr>
        <tr><td>Timbul dari peristiwa lalu</td><td>Ada kejadian yang sudah terjadi</td><td>Pembelian efek atau penempatan dana</td></tr>
        <tr><td>Manfaat ekonomi masa depan</td><td>Menghasilkan arus kas masuk</td><td>Dividen, bunga, atau capital gain</td></tr>
      </table></div>
      <div class="callout callout-info">
        <p><strong>Contoh 1.1.</strong> Sebuah entitas menempatkan Rp100.000.000 untuk membeli saham. Kas berkurang, tetapi entitas memperoleh hak atas manfaat ekonomi masa depan. Karena unsur definisi terpenuhi, pembelian tersebut dicatat sebagai <strong>aset</strong>, bukan beban.</p>
      </div>
    </div>

    <div class="section">
      <h2>1.2 Klasifikasi Investasi</h2>
      <div class="table-wrap"><table>
        <tr><th>Jenis</th><th>Contoh</th><th>Ciri</th></tr>
        <tr><td>Aset riil</td><td>Tanah, emas, properti</td><td>Berwujud, tidak mudah dibagi</td></tr>
        <tr><td>Aset finansial</td><td>Saham, obligasi, deposito, reksa dana, derivatif</td><td>Klaim kontraktual atas arus kas</td></tr>
      </table></div>
      <p>Modul ini berfokus pada aset finansial karena aset finansial diatur sebagai instrumen keuangan dalam SAK EP dan PSAK 71.</p>
    </div>

    <div class="section">
      <h2>1.3 Tujuan Investasi</h2>
      <ul>
        <li>Memperoleh pendapatan berupa dividen (dari saham) atau bunga (dari obligasi dan deposito).</li>
        <li>Mendapatkan <em>capital gain</em>, yaitu selisih positif antara harga jual dan harga perolehan.</li>
        <li>Mendapatkan hak pengendalian strategis atas entitas lain melalui kepemilikan saham.</li>
      </ul>
    </div>

    <div class="section">
      <h2>1.4 Investor vs Investee</h2>
      <ul>
        <li><strong>Investor</strong>: pihak yang menanamkan dana.</li>
        <li><strong>Investee</strong>: pihak yang menerima dana atau menerbitkan efek.</li>
      </ul>
      <div class="table-wrap"><table>
        <tr><th>Transaksi</th><th>Investor (PT Andi)</th><th>Investee (PT Bima)</th></tr>
        <tr><td>PT Andi membeli saham PT Bima</td><td>Aset keuangan: investasi saham</td><td>Ekuitas: modal saham</td></tr>
        <tr><td>PT Andi membeli obligasi PT Bima</td><td>Aset keuangan: investasi obligasi</td><td>Liabilitas keuangan: utang obligasi</td></tr>
      </table></div>
      <div class="callout callout-warn">
        <p><strong>Poin kunci:</strong> Investor selalu mencatat <strong>aset keuangan</strong>. Investee mencatat ekuitas (jika menerbitkan saham) atau liabilitas (jika menerbitkan obligasi).</p>
      </div>
    </div>

    <div class="section">
      <h2>1.5 Efek Ekuitas vs Efek Utang</h2>
      <div class="table-wrap"><table>
        <tr><th>Aspek</th><th>Efek Ekuitas</th><th>Efek Utang</th></tr>
        <tr><td>Bukti</td><td>Kepemilikan</td><td>Utang-piutang</td></tr>
        <tr><td>Imbal hasil</td><td>Dividen</td><td>Bunga</td></tr>
        <tr><td>Kepastian imbal hasil</td><td>Tidak pasti</td><td>Ditetapkan kontrak</td></tr>
        <tr><td>Contoh</td><td>Saham</td><td>Obligasi, wesel</td></tr>
        <tr><td>Dicatat investee sebagai</td><td>Ekuitas</td><td>Liabilitas</td></tr>
      </table></div>
      <p>Perbedaan ini penting karena efek ekuitas dan efek utang diukur dengan dasar yang berbeda pada standar akuntansi (lihat Bab 2 dan Bab 3).</p>
    </div>
  `,

  'kerangka-standar': `
    <div class="section">
      <h2>2.1 SAK ETAP Bab 10 — Investasi Efek Tertentu</h2>
      <p>SAK ETAP (2009–2024) mengatur investasi efek dalam Bab 10 dengan tiga klasifikasi:</p>
      <div class="table-wrap"><table>
        <tr><th>Klasifikasi</th><th>Dasar pengukuran</th><th>Perubahan nilai</th></tr>
        <tr><td>HTM (Dimiliki hingga jatuh tempo)</td><td>Biaya perolehan diamortisasi</td><td>Amortisasi ke laba rugi</td></tr>
        <tr><td>Trading (Diperdagangkan)</td><td>Nilai wajar</td><td>Perubahan nilai wajar ke laba rugi</td></tr>
        <tr><td>AFS (Tersedia untuk dijual)</td><td>Nilai wajar</td><td>Perubahan nilai wajar ke ekuitas/OCI</td></tr>
      </table></div>
      <ul>
        <li>Penurunan nilai: berdasarkan bukti objektif (<em>incurred loss</em>).</li>
        <li>Penilaian investasi lancar: nilai terendah antara biaya dan nilai pasar (LCM).</li>
      </ul>
    </div>

    <div class="section">
      <h2>2.2 SAK EP Bab 11 & 12 — Instrumen Keuangan</h2>
      <p>SAK EP (efektif 1 Januari 2025) mengadopsi IFRS for SMEs. Tidak ada lagi istilah “Investasi Efek Tertentu”. Seluruh investasi efek diatur sebagai <strong>instrumen keuangan</strong>: Bab 11 untuk instrumen dasar dan Bab 12 untuk instrumen lebih kompleks.</p>
      <h3>Opsi kebijakan akuntansi (paragraf 11.2 dan 12.2)</h3>
      <ul>
        <li><strong>(a)</strong> menerapkan Bab 11 dan Bab 12 secara penuh; atau</li>
        <li><strong>(b)</strong> menerapkan pengakuan dan pengukuran PSAK 55, dengan pengungkapan Bab 11 & 12.</li>
      </ul>
      <h3>Kategori pengukuran opsi (a)</h3>
      <div class="table-wrap"><table>
        <tr><th>Jenis instrumen</th><th>Dasar pengukuran</th><th>Paragraf</th></tr>
        <tr><td>Instrumen utang dasar</td><td>Biaya perolehan diamortisasi</td><td>11.14(a)</td></tr>
        <tr><td>Efek ekuitas publik/nilai wajar andal</td><td>Nilai wajar melalui laba rugi (FVTPL)</td><td>11.14(c)(i)</td></tr>
        <tr><td>Efek ekuitas tanpa nilai wajar andal</td><td>Biaya perolehan − penurunan nilai</td><td>11.14(c)(ii)</td></tr>
        <tr><td>Instrumen Bab 12 (derivatif dll)</td><td>Nilai wajar melalui laba rugi</td><td>12.8</td></tr>
      </table></div>
      <div class="callout callout-info">
        <p><strong>Penting:</strong> Pada opsi (a), <strong>tidak ada AFS</strong> dan <strong>tidak ada OCI untuk efek ekuitas</strong>. Efek ekuitas yang punya nilai wajar andal langsung diukur FVTPL; yang tidak punya diukur pada biaya perolehan dikurangi penurunan nilai.</p>
      </div>
    </div>

    <div class="section">
      <h2>2.3 PSAK 71 / IFRS 9</h2>
      <p>Berlaku untuk entitas publik, menggantikan pendekatan lama dengan tiga unsur utama:</p>
      <ul>
        <li>Klasifikasi berbasis <strong>model bisnis</strong> dan <strong>karakteristik SPPI</strong>.</li>
        <li>Kategori: amortized cost, FVOCI, dan FVTPL.</li>
        <li>Penurunan nilai: <strong>Expected Credit Loss (ECL)</strong> — mengakui kerugian lebih awal.</li>
      </ul>
    </div>

    <div class="section">
      <h2>2.4 Perbandingan Ringkas</h2>
      <div class="table-wrap"><table>
        <tr><th>Aspek</th><th>SAK ETAP</th><th>SAK EP</th><th>PSAK 71/IFRS 9</th></tr>
        <tr><td>Klasifikasi</td><td>HTM, Trading, AFS</td><td>Instrumen dasar vs lain</td><td>Amortized cost, FVOCI, FVTPL</td></tr>
        <tr><td>Efek ekuitas</td><td>AFS / Trading</td><td>FVTPL atau cost − impairment</td><td>FVTPL / FVOCI</td></tr>
        <tr><td>Penurunan nilai</td><td>Incurred loss</td><td>Incurred loss</td><td>ECL</td></tr>
        <tr><td>OCI untuk ekuitas</td><td>Ada (AFS)</td><td>Tidak ada</td><td>Ada (opsi FVOCI)</td></tr>
        <tr><td>LCM</td><td>Ada</td><td>Tidak ada</td><td>Tidak ada</td></tr>
      </table></div>
    </div>

    <div class="section">
      <h2>2.5 Dampak Pemilihan Kebijakan Akuntansi</h2>
      <p>Pemilihan opsi (a) vs (b) memengaruhi angka laporan keuangan.</p>
      <div class="table-wrap"><table>
        <tr><th>Aspek</th><th>Opsi (a) penuh</th><th>Opsi (b) PSAK 55</th></tr>
        <tr><td>Dasar pengakuan & pengukuran</td><td>Bab 11 & 12</td><td>PSAK 55</td></tr>
        <tr><td>Kategori efek ekuitas</td><td>FVTPL atau cost − impairment</td><td>Mengikuti PSAK 55 (dikenal AFS)</td></tr>
        <tr><td>Perubahan nilai ekuitas</td><td>Ke laba rugi</td><td>Dapat ke OCI bila AFS</td></tr>
        <tr><td>Pengungkapan</td><td>Bab 11 & 12</td><td>Bab 11 & 12</td></tr>
      </table></div>
      <div class="callout callout-warn">
        <p><strong>Kesimpulan:</strong> FVTPL membuat laba rugi fluktuatif tapi aset mencerminkan nilai pasar. Cost − impairment lebih stabil tetapi tidak mencerminkan kenaikan nilai sampai dijual. Dibanding SAK ETAP, opsi (a) menghapus AFS.</p>
      </div>
    </div>
  `,

  'pengakuan-pengukuran': `
    <div class="section">
      <h2>3.1 Pengakuan Awal</h2>
      <p>Entitas mengakui aset keuangan ketika menjadi pihak dalam kontrak (paragraf 11.12 / 12.6).</p>
      <ul>
        <li>Diukur pada <strong>harga transaksi</strong> (umumnya sama dengan nilai wajar) <strong>ditambah biaya transaksi</strong>.</li>
        <li><strong>Pengecualian:</strong> instrumen yang setelah pengakuan awal diukur pada FVTPL — biaya transaksi langsung dibebankan ke laba rugi.</li>
      </ul>
      <div class="callout callout-info">
        <p><strong>Contoh 3.1.</strong> Entitas membeli saham Rp100.000.000 dengan komisi Rp2.000.000.</p>
        <div class="table-wrap"><table>
          <tr><th>Kategori</th><th>Investasi dicatat</th><th>Beban transaksi</th></tr>
          <tr><td>Bukan FVTPL (mis. cost − impairment)</td><td>Rp102.000.000</td><td>Rp0</td></tr>
          <tr><td>FVTPL</td><td>Rp100.000.000</td><td>Rp2.000.000</td></tr>
        </table></div>
      </div>
    </div>

    <div class="section">
      <h2>3.2 Pengukuran Selanjutnya</h2>
      <div class="table-wrap"><table>
        <tr><th>Instrumen</th><th>Pengukuran</th><th>Perubahan dicatat di</th></tr>
        <tr><td>Utang dasar</td><td>Biaya perolehan diamortisasi</td><td>Bunga efektif ke laba rugi</td></tr>
        <tr><td>Ekuitas publik</td><td>Nilai wajar</td><td>Laba rugi</td></tr>
        <tr><td>Ekuitas nonpublik</td><td>Biaya perolehan − penurunan nilai</td><td>Penurunan ke laba rugi</td></tr>
        <tr><td>Derivatif</td><td>Nilai wajar</td><td>Laba rugi</td></tr>
      </table></div>
    </div>

    <div class="section">
      <h2>3.3 Biaya Perolehan Diamortisasi & Suku Bunga Efektif</h2>
      <p><strong>Rumus biaya perolehan diamortisasi:</strong></p>
      <p class="mono" style="background:var(--bg-subtle);padding:14px;border-radius:10px;">Nilai awal + amortisasi kumulatif − pelunasan pokok − penurunan nilai</p>
      <p><strong>Suku bunga efektif (EIR)</strong> adalah tingkat diskonto yang menyamakan nilai kini (PV) seluruh arus kas masa depan dengan nilai tercatat awal instrumen. Pendapatan bunga = nilai tercatat awal × EIR.</p>
      <div class="callout callout-success">
        <p><strong>Contoh 3.3.</strong> Obligasi dibeli Rp900.000 + biaya transaksi Rp50.000 = nilai tercatat awal Rp950.000. Kupon Rp40.000/tahun, jatuh tempo Rp1.100.000, 5 tahun. EIR = <strong>6,9584%</strong>.</p>
        <div class="table-wrap"><table>
          <tr><th>Tahun</th><th>Nilai awal</th><th>Bunga 6,9584%</th><th>Kas masuk</th><th>Nilai akhir</th></tr>
          <tr><td>20X0</td><td>950,00</td><td>66,11</td><td>(40,00)</td><td>976,11</td></tr>
          <tr><td>20X1</td><td>976,11</td><td>67,92</td><td>(40,00)</td><td>1.004,03</td></tr>
          <tr><td>20X2</td><td>1.004,03</td><td>69,86</td><td>(40,00)</td><td>1.033,89</td></tr>
          <tr><td>20X3</td><td>1.033,89</td><td>71,94</td><td>(40,00)</td><td>1.065,83</td></tr>
          <tr><td>20X4</td><td>1.065,83</td><td>74,17</td><td>(40,00)</td><td>1.100,00</td></tr>
        </table></div>
        <p><em>Angka dalam ribuan rupiah.</em></p>
      </div>
    </div>

    <div class="section">
      <h2>3.4 Nilai Wajar</h2>
      <div class="table-wrap"><table>
        <tr><th>Tingkat</th><th>Dasar penentuan</th><th>Keterangan</th></tr>
        <tr><td>Level 1</td><td>Harga kuotasian di pasar aktif</td><td>Paling andal; contoh: harga saham di bursa</td></tr>
        <tr><td>Level 2</td><td>Harga transaksi terbaru</td><td>Bila tidak ada harga kuotasian</td></tr>
        <tr><td>Level 3</td><td>Teknik penilaian</td><td>Bila dua tingkat sebelumnya tidak tersedia</td></tr>
      </table></div>
    </div>

    <div class="section">
      <h2>3.5 Penurunan Nilai</h2>
      <h3>Bukti objektif penurunan nilai</h3>
      <ul>
        <li>Kesulitan keuangan signifikan penerbit/debitur.</li>
        <li>Gagal bayar (default).</li>
        <li>Konsesi kreditur karena kesulitan keuangan debitur.</li>
        <li>Kebangkrutan atau reorganisasi keuangan.</li>
        <li>Data observasian yang memburuk.</li>
      </ul>
      <h3>Pengukuran kerugian</h3>
      <div class="table-wrap"><table>
        <tr><th>Kategori aset</th><th>Kerugian penurunan nilai</th></tr>
        <tr><td>Biaya perolehan diamortisasi</td><td>Nilai tercatat − PV arus kas estimasian (didiskontokan dengan EIR orisinal)</td></tr>
        <tr><td>Biaya perolehan − penurunan nilai</td><td>Nilai tercatat − estimasi jumlah terpulihkan</td></tr>
      </table></div>
      <h3>Pembalikan</h3>
      <p>Diakui ke laba rugi jika ada peristiwa objektif setelah penurunan. Pembalikan tidak boleh membuat nilai tercatat melebihi nilai seandainya penurunan tidak pernah diakui.</p>
    </div>

    <div class="section">
      <h2>3.6 Penghentian Pengakuan</h2>
      <ul>
        <li>Hak kontraktual atas arus kas aset berakhir.</li>
        <li>Risiko dan manfaat kepemilikan dialihkan secara substansial.</li>
        <li>Kontrol atas aset dialihkan.</li>
      </ul>
      <p>Selisih antara nilai tercatat aset dan penerimaan bersih dari penjualan diakui sebagai laba atau rugi.</p>
    </div>
  `,

  'penyajian-pengungkapan': `
    <div class="section">
      <h2>4.1 Penyajian</h2>
      <ul>
        <li><strong>Aset lancar</strong> jika jatuh tempo ≤ 12 bulan atau dimiliki untuk diperdagangkan.</li>
        <li><strong>Aset tidak lancar</strong> jika jatuh tempo > 12 bulan.</li>
        <li>Investasi disajikan berdasarkan <strong>kategori pengukuran</strong>, bukan HTM/AFS/Trading (pada opsi a).</li>
      </ul>
      <div class="table-wrap"><table>
        <tr><th>Pos laporan posisi keuangan</th><th>Dasar pengukuran</th></tr>
        <tr><td><strong>Aset lancar</strong></td><td></td></tr>
        <tr><td>Investasi pada efek ekuitas publik</td><td>Nilai wajar melalui laba rugi</td></tr>
        <tr><td>Piutang bunga</td><td>Biaya perolehan diamortisasi</td></tr>
        <tr><td><strong>Aset tidak lancar</strong></td><td></td></tr>
        <tr><td>Investasi obligasi (jatuh tempo > 12 bulan)</td><td>Biaya perolehan diamortisasi</td></tr>
        <tr><td>Investasi saham tanpa nilai wajar andal</td><td>Biaya perolehan − penyisihan penurunan nilai</td></tr>
      </table></div>
    </div>

    <div class="section">
      <h2>4.2 Pengungkapan Bab 11 (paragraf 11.39–11.48)</h2>
      <ul>
        <li>Kebijakan akuntansi dan dasar pengukuran.</li>
        <li>Jumlah tercatat per kategori instrumen keuangan.</li>
        <li>Nilai wajar dan hierarkinya.</li>
        <li>Risiko kredit, risiko pasar, dan risiko likuiditas.</li>
        <li>Penghasilan dan beban bunga.</li>
        <li>Kerugian penurunan nilai.</li>
        <li>Agunan dan gagal bayar.</li>
      </ul>
    </div>

    <div class="section">
      <h2>4.3 Pengungkapan Bab 12</h2>
      <p>Jika entitas menggunakan lindung nilai, entitas mengungkapkan:</p>
      <ul>
        <li>Deskripsi lindung nilai.</li>
        <li>Nilai wajar instrumen lindung.</li>
        <li>Sifat risiko yang dilindung nilai.</li>
        <li>Jumlah yang direklasifikasi ke laba rugi.</li>
      </ul>
      <div class="callout callout-info">
        <p><strong>Poin kunci:</strong> Penyajian menjawab “di mana dan berapa” investasi ditampilkan; pengungkapan menjawab “mengapa dan seberapa berisiko”. Keduanya wajib, dan pengungkapan Bab 11 tetap berlaku pada kedua opsi kebijakan SAK EP.</p>
      </div>
    </div>
  `,
};

/* ---------- STATE ---------- */
let activeChapter = null;

/* ---------- ROUTER ---------- */
function parseHash() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function navigate() {
  const path = parseHash();
  const app = document.getElementById('app');
  app.innerHTML = '';
  window.scrollTo(0, 0);

  // Update nav active
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const route = a.dataset.route;
    const active = route === path || (path.startsWith(route) && route !== '/');
    a.classList.toggle('active', active);
  });

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');

  if (path === '/') {
    renderHome(app);
    activeChapter = null;
  } else if (path === '/bab') {
    renderChapterList(app);
    activeChapter = null;
  } else if (path.startsWith('/bab/')) {
    const slug = path.split('/')[2];
    renderChapterDetail(app, slug);
  } else if (path === '/flashcard') {
    renderPlaceholder(app, 'Flashcard Interaktif', '🚧 Fitur lengkap hadir di Tahap 2.');
    activeChapter = null;
  } else if (path === '/quiz') {
    renderPlaceholder(app, 'Quiz Interaktif', '🚧 Fitur lengkap hadir di Tahap 2.');
    activeChapter = null;
  } else if (path === '/simulator') {
    renderPlaceholder(app, 'Simulator Interaktif', '🚧 Fitur lengkap hadir di Tahap 3.');
    activeChapter = null;
  } else if (path === '/glosarium') {
    renderPlaceholder(app, 'Glosarium', '🚧 Fitur lengkap hadir di Tahap 2.');
    activeChapter = null;
  } else {
    renderNotFound(app);
    activeChapter = null;
  }

  buildTOC();
}

/* ---------- PAGES ---------- */
function renderHome(app) {
  app.innerHTML = `
    <section class="hero fade-in">
      <span class="badge">✨ Modul Interaktif 2026</span>
      <h1 style="margin-top:16px;">Belajar <span class="gradient-text">Akuntansi Investasi</span> dengan Cara Modern</h1>
      <p>Saham, obligasi, dan instrumen keuangan lain berdasarkan <strong>SAK EP</strong>, dibandingkan dengan SAK ETAP dan PSAK 71/IFRS 9. Dilengkapi flashcard, quiz, dan simulator interaktif.</p>
      <div class="hero-buttons">
        <a href="#/bab" class="btn btn-primary">Mulai Belajar →</a>
        <a href="#/quiz" class="btn btn-outline">Coba Quiz 🎓</a>
      </div>
    </section>

    <h2 style="text-align:center;">Kenapa Belajar di Sini?</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">📘</div>
        <h3>8 Bab Lengkap</h3>
        <p>Dari konsep dasar sampai glosarium, semua dalam satu tempat.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Simulator Interaktif</h3>
        <p>EIR, jurnal, klasifikasi, dan penurunan nilai bisa langsung dicoba.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Quiz & Flashcard</h3>
        <p>Latihan soal lengkap dengan skor otomatis tersimpan.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🏆</div>
        <h3>Sertifikat Digital</h3>
        <p>Cetak sertifikat setelah menuntaskan seluruh materi.</p>
      </div>
    </div>

    <h2 style="margin-top:48px;">Peta Materi</h2>
    <p class="muted">8 bab komprehensif dari konsep hingga sertifikat.</p>
    <div class="chapter-grid">
      ${CHAPTERS.map((c) => `
        <a href="#/bab/${c.slug}" class="chapter-card c-${c.id}">
          <div class="chapter-num">${String(c.id).padStart(2, '0')}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </a>
      `).join('')}
    </div>
  `;
}

function renderChapterList(app) {
  app.innerHTML = `
    <h1>Daftar Bab</h1>
    <p class="muted">8 bab komprehensif untuk menguasai akuntansi investasi berdasarkan SAK EP.</p>
    <div class="chapter-grid" style="margin-top:24px;">
      ${CHAPTERS.map((c) => `
        <a href="#/bab/${c.slug}" class="chapter-card c-${c.id}">
          <div class="chapter-num">${String(c.id).padStart(2, '0')}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </a>
      `).join('')}
    </div>
  `;
}

function renderChapterDetail(app, slug) {
  const chapter = CHAPTERS.find((c) => c.slug === slug);
  if (!chapter) { renderNotFound(app); return; }
  activeChapter = chapter;

  const content = CONTENT[slug] || `
    <div class="section">
      <p class="muted">📘 <strong>Konten lengkap bab ini akan diisi di Tahap 2.</strong> Saat ini baru Bab 1–4 yang lengkap.</p>
    </div>
  `;

  const prev = CHAPTERS.find((c) => c.id === chapter.id - 1);
  const next = CHAPTERS.find((c) => c.id === chapter.id + 1);

  app.innerHTML = `
    <div class="chapter-header c-${chapter.id} fade-in">
      <div class="chapter-num">Bab ${chapter.id}</div>
      <h1>${chapter.title}</h1>
      <p>${chapter.desc}</p>
    </div>
    <div class="no-print" style="display:flex;justify-content:flex-end;margin-bottom:16px;">
      <button class="btn btn-outline btn-sm" onclick="window.print()">🖨️ Cetak / PDF</button>
    </div>
    ${content}
    <div class="chapter-nav">
      ${prev ? `<a href="#/bab/${prev.slug}" class="btn btn-outline">← Bab ${prev.id}</a>` : '<span class="spacer"></span>'}
      ${next ? `<a href="#/bab/${next.slug}" class="btn btn-primary">Bab ${next.id} →</a>` : '<span class="spacer"></span>'}
    </div>
  `;
}

function renderPlaceholder(app, title, msg) {
  app.innerHTML = `
    <div class="section">
      <h1>${title}</h1>
      <p class="muted">${msg}</p>
    </div>
  `;
}

function renderNotFound(app) {
  app.innerHTML = `
    <div class="section" style="text-align:center;padding:60px 24px;">
      <div style="font-size:80px;font-weight:900;color:var(--primary-500);line-height:1;">404</div>
      <h1 style="margin-top:16px;">Halaman Tidak Ditemukan</h1>
      <p class="muted">Sepertinya Anda tersesat. Yuk kembali ke beranda.</p>
      <a href="#/" class="btn btn-primary" style="margin-top:20px;">🏠 Kembali ke Beranda</a>
    </div>
  `;
}

/* ---------- TOC (Sidebar) ---------- */
function buildTOC() {
  const toc = document.getElementById('tocList');
  const path = parseHash();

  if (path.startsWith('/bab/')) {
    const chapter = CHAPTERS.find((c) => `/bab/${c.slug}` === path);
    // Tampilkan sub-heading dari konten bab
    const container = document.getElementById('app');
    const headings = container.querySelectorAll('.section h2');
    toc.innerHTML = `
      <li><a href="#/bab">← Semua Bab</a></li>
      ${Array.from(headings).map((h, i) => {
        const id = `sec-${i}`;
        h.id = id;
        return `<li><a href="#${id}" onclick="scrollToSection(event, '${id}')">${h.textContent}</a></li>`;
      }).join('')}
    `;
  } else {
    toc.innerHTML = CHAPTERS.map((c) => `
      <li><a href="#/bab/${c.slug}" class="${path === '/bab/' + c.slug ? 'active' : ''}">
        <strong>${c.id}.</strong> ${c.title}
      </a></li>
    `).join('');
  }
}

function scrollToSection(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- DARK MODE ---------- */
function initDarkMode() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = stored === 'dark' || (!stored && prefersDark);
  document.documentElement.classList.toggle('dark', dark);
  document.getElementById('themeBtn').textContent = dark ? '☀️' : '🌙';
}

document.getElementById('themeBtn').addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = isDark ? '☀️' : '🌙';
});

/* ---------- MOBILE MENU ---------- */
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

/* ---------- SEARCH ---------- */
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

document.getElementById('searchBtn').addEventListener('click', () => {
  searchOverlay.classList.add('show');
  setTimeout(() => searchInput.focus(), 100);
});
document.getElementById('searchClose').addEventListener('click', () => {
  searchOverlay.classList.remove('show');
});
searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) searchOverlay.classList.remove('show');
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = '<p class="muted">Ketik untuk mencari...</p>';
    return;
  }

  const results = [];

  // Cari di judul bab
  CHAPTERS.forEach((c) => {
    if (c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)) {
      results.push({
        title: `Bab ${c.id}: ${c.title}`,
        sub: c.desc,
        href: `#/bab/${c.slug}`,
      });
    }
  });

  // Cari di konten bab
  Object.entries(CONTENT).forEach(([slug, html]) => {
    const text = html.replace(/<[^>]+>/g, ' ').toLowerCase();
    if (text.includes(q)) {
      const ch = CHAPTERS.find((c) => c.slug === slug);
      if (ch && !results.find((r) => r.href.includes(slug))) {
        results.push({
          title: `Bab ${ch.id}: ${ch.title}`,
          sub: 'Ada di bab ini',
          href: `#/bab/${slug}`,
        });
      }
    }
  });

  if (results.length === 0) {
    searchResults.innerHTML = '<p class="muted">Tidak ada hasil untuk "' + searchInput.value + '".</p>';
  } else {
    searchResults.innerHTML = results.slice(0, 10).map((r) => `
      <a href="${r.href}" class="search-item" onclick="document.getElementById('searchOverlay').classList.remove('show')">
        <div class="st-title">${r.title}</div>
        <div class="st-sub">${r.sub}</div>
      </a>
    `).join('');
  }
});

/* ---------- QUICK CALCULATOR ---------- */
document.getElementById('qcHitung').addEventListener('click', () => {
  const nilai = parseFloat(document.getElementById('qcNilai').value) || 0;
  const bunga = parseFloat(document.getElementById('qcBunga').value) || 0;
  const lama = parseFloat(document.getElementById('qcLama').value) || 0;
  const hasil = document.getElementById('qcHasil');

  if (nilai <= 0 || bunga <= 0 || lama <= 0) {
    hasil.textContent = 'Mohon isi semua kolom dengan angka.';
    hasil.classList.add('show');
    return;
  }

  const totalBunga = nilai * (bunga / 100) * lama;
  const total = nilai + totalBunga;
  hasil.innerHTML = `
    <div>Bunga/tahun: ${formatRp(nilai * bunga / 100)}</div>
    <div>Total bunga (${lama} thn): ${formatRp(totalBunga)}</div>
    <div style="margin-top:6px;padding-top:6px;border-top:1px solid currentColor;">Total: ${formatRp(total)}</div>
  `;
  hasil.classList.add('show');
});

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID', { maximumFractionDigits: 0 });
}

/* ---------- INIT ---------- */
window.addEventListener('hashchange', navigate);
window.addEventListener('load', () => {
  initDarkMode();
  navigate();
});