import { Link, NavLink } from 'react-router-dom';
import { Menu, Moon, Sun, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../../hooks/useDarkMode';

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/bab', label: 'Bab' },
  { to: '/flashcard', label: 'Flashcard' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/simulator', label: 'Simulator' },
  { to: '/glosarium', label: 'Glosarium' },
];

export function Navbar() {
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-slate-900/85 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-extrabold text-xl">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 grid place-items-center text-white">
            <BookOpen size={22} />
          </span>
          <span className="hidden sm:inline">Investasi SAK EP</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Ubah tema"
            className="w-11 h-11 rounded-xl grid place-items-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden w-11 h-11 rounded-xl grid place-items-center hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-700"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium ${
                      isActive
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}