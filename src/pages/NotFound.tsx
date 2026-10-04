import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="text-8xl font-black text-primary-500 mb-6">404</div>
      <h1>Halaman Tidak Ditemukan</h1>
      <p className="text-slate-600 dark:text-slate-400">
        Sepertinya Anda tersesat. Yuk kembali ke beranda.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <HomeIcon size={18} /> Kembali ke Beranda
      </Link>
    </div>
  );
}