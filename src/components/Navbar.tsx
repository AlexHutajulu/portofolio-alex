import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'Beranda', href: '#' },
  { name: 'Pengalaman', href: '#experience' },
  { name: 'Pendidikan', href: '#education' },
  { name: 'Sertifikasi', href: '#certifications' },
  { name: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 hidden md:flex items-center justify-between px-6 py-3 rounded-full ${
          isScrolled ? 'w-[90%] max-w-4xl glass-panel' : 'w-full max-w-6xl bg-transparent'
        }`}
      >
        <a href="#" className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter flex items-center gap-2 font-display">
          <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          ANH<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Navbar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 glass-panel rounded-none border-x-0 border-t-0 px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter flex items-center gap-2 font-display">
          <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          ANH<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[69px] left-0 right-0 z-40 glass-panel rounded-none border-x-0 py-6 px-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 p-3 rounded-xl transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
