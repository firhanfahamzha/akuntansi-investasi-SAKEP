export interface ChapterMeta {
  id: number;
  slug: string;
  title: string;
  short: string;
  icon: string;
  color: string;
  description: string;
}

export const chapters: ChapterMeta[] = [
  { id: 1, slug: 'konsep-dasar', title: 'Konsep Dasar Investasi', short: 'Konsep Dasar', icon: 'Lightbulb', color: 'from-indigo-500 to-blue-500', description: 'Definisi, klasifikasi, tujuan, investor vs investee, efek ekuitas vs utang.' },
  { id: 2, slug: 'kerangka-standar', title: 'Kerangka Standar & Posisi Investor', short: 'Kerangka Standar', icon: 'Scale', color: 'from-violet-500 to-purple-500', description: 'SAK ETAP, SAK EP, PSAK 71/IFRS 9, perbandingan, dan dampak pilihan kebijakan.' },
  { id: 3, slug: 'pengakuan-pengukuran', title: 'Pengakuan & Pengukuran', short: 'Pengakuan', icon: 'Ruler', color: 'from-sky-500 to-cyan-500', description: 'Pengakuan awal, pengukuran selanjutnya, EIR, nilai wajar, penurunan nilai.' },
  { id: 4, slug: 'penyajian-pengungkapan', title: 'Penyajian & Pengungkapan', short: 'Penyajian', icon: 'FileText', color: 'from-emerald-500 to-teal-500', description: 'Klasifikasi lancar/tidak lancar, pengungkapan Bab 11 dan Bab 12.' },
  { id: 5, slug: 'pencatatan', title: 'Pencatatan Akuntansi & Contoh', short: 'Pencatatan', icon: 'BookOpen', color: 'from-amber-500 to-orange-500', description: 'Jurnal saham, obligasi, EIR, FVTPL, dan penurunan nilai.' },
  { id: 6, slug: 'instrumen-lain', title: 'Instrumen Investasi Lain', short: 'Instrumen Lain', icon: 'Coins', color: 'from-rose-500 to-pink-500', description: 'Reksa dana, derivatif, cryptocurrency, dan forex.' },
  { id: 7, slug: 'latihan', title: 'Latihan & Kunci', short: 'Latihan', icon: 'PencilLine', color: 'from-fuchsia-500 to-purple-600', description: 'Soal hitungan dan konsep beserta kunci jawaban lengkap.' },
  { id: 8, slug: 'glosarium', title: 'Glosarium & Rangkuman', short: 'Glosarium', icon: 'BookMarked', color: 'from-slate-500 to-slate-700', description: 'Istilah kunci, ringkasan bab, dan daftar pustaka.' },
];