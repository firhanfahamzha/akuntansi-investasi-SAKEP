import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { ArrowRight } from 'lucide-react';

export function ChapterList() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1>Daftar Bab</h1>
      <p className="text-slate-600 dark:text-slate-400">
        Pilih bab untuk memulai.
      </p>
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        {chapters.map((c) => (
          <Link key={c.id} to={`/bab/${c.slug}`} className="card flex items-center justify-between hover:-translate-y-1 transition">
            <div>
              <div className="text-sm font-medium text-primary-600 dark:text-primary-400">Bab {c.id}</div>
              <div className="text-xl font-bold mt-1">{c.title}</div>
            </div>
            <ArrowRight className="text-slate-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}