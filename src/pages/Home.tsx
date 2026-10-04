import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Target, Zap, Trophy, ArrowRight, GraduationCap } from 'lucide-react';
import { chapters } from '../data/chapters';

const features = [
  { icon: BookOpen, title: '8 Bab Lengkap', desc: 'Dari konsep dasar sampai glosarium, semua dalam satu tempat.' },
  { icon: Zap, title: 'Simulator Interaktif', desc: 'EIR, jurnal, klasifikasi, dan penurunan nilai bisa langsung dicoba.' },
  { icon: Target, title: 'Quiz & Flashcard', desc: 'Latihan soal lengkap dengan skor otomatis tersimpan.' },
  { icon: Trophy, title: 'Sertifikat Digital', desc: 'Cetak sertifikat setelah menuntaskan seluruh materi.' },
];

export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 -z-10" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 mb-6">
              <Sparkles size={16} /> Modul Interaktif 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Belajar <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Akuntansi Investasi</span> dengan Cara Modern
            </h1>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Saham, obligasi, dan instrumen keuangan lain berdasarkan <strong>SAK EP</strong>,
              dibandingkan dengan SAK ETAP dan PSAK 71/IFRS 9. Dilengkapi flashcard, quiz,
              dan simulator interaktif.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/bab" className="btn-primary text-lg">
                Mulai Belajar <ArrowRight size={20} />
              </Link>
              <Link to="/quiz" className="btn-outline text-lg">
                Coba Quiz <GraduationCap size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center mb-12">Kenapa Belajar di Sini?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 grid place-items-center text-primary-700 dark:text-primary-300 mb-4">
                <f.icon size={24} />
              </div>
              <h3 className="!mt-0 !mb-2 text-lg">{f.title}</h3>
              <p className="!my-0 !text-base text-slate-600 dark:text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="!mb-2">Peta Materi</h2>
            <p className="!my-0 text-slate-600 dark:text-slate-400">8 bab komprehensif dari konsep hingga sertifikat.</p>
          </div>
          <Link to="/bab" className="hidden md:inline-flex btn-outline">
            Lihat Semua <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {chapters.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/bab/${c.slug}`}
                className={`block h-full rounded-2xl p-6 text-white bg-gradient-to-br ${c.color} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all`}
              >
                <div className="text-4xl font-black opacity-40 mb-3">
                  {String(c.id).padStart(2, '0')}
                </div>
                <h3 className="!mt-0 !mb-2 !text-lg !text-white">{c.title}</h3>
                <p className="!my-0 !text-sm text-white/85 leading-relaxed">{c.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}