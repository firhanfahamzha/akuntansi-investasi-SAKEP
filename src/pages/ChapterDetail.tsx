import { useParams, Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function ChapterDetail() {
  const { slug } = useParams<{ slug: string }>();
  const chapter = chapters.find((c) => c.slug === slug);

  if (!chapter) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1>Bab tidak ditemukan</h1>
        <Link to="/bab" className="btn-primary mt-6">Kembali ke Daftar Bab</Link>
      </div>
    );
  }

  const prev = chapters.find((c) => c.id === chapter.id - 1);
  const next = chapters.find((c) => c.id === chapter.id + 1);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/bab" className="text-sm text-primary-600 hover:underline inline-flex items-center gap-1 mb-6">
        <ArrowLeft size={16} /> Daftar Bab
      </Link>
      <div className={`rounded-3xl p-10 text-white bg-gradient-to-br ${chapter.color} shadow-xl`}>
        <div className="text-6xl font-black opacity-30">Bab {chapter.id}</div>
        <h1 className="!text-white mt-2">{chapter.title}</h1>
        <p className="!text-white/90 !text-lg">{chapter.description}</p>
      </div>

      <div className="card mt-8">
        <p className="text-slate-600 dark:text-slate-300">
          📘 <strong>Konten lengkap bab ini akan diisi di Fase berikutnya.</strong>
        </p>
      </div>

      <div className="flex justify-between mt-10">
        {prev ? (
          <Link to={`/bab/${prev.slug}`} className="btn-outline"><ArrowLeft size={18}/> Bab {prev.id}</Link>
        ) : <span />}
        {next ? (
          <Link to={`/bab/${next.slug}`} className="btn-primary">Bab {next.id} <ArrowRight size={18}/></Link>
        ) : <span />}
      </div>
    </div>
  );
}