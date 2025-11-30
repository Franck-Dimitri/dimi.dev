import { useEffect, useState } from 'react';
import { CloudCheckIcon, Menu, Sun, Moon } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // Gérer le mode dark/light
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Gérer le menu mobile
  useEffect(() => {
    const closeMobileMenu = () => setIsMenuOpen(false);

    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-menu-button');
      if (
        isMenuOpen &&
        menu &&
        !menu.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-4 inset-x-4 z-50 bg-white/80 dark:bg-gray-900 backdrop-blur-lg rounded-3xl border border-fuchsia-200 dark:border-gray-700 shadow-xl transition-colors duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
            <div className="p-3">
                <div className="w-3 h-3 bg-fuchsia-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-fuchsia-600 rounded-full mt-1 animate-pulse delay-200"></div>
                <div className="w-1.5 h-1.5 bg-fuchsia-600 rounded-full mt-1 animate-pulse delay-400"></div>
            </div>
            <div className="p-1 bg-fuchsia-500 rounded-lg">
                <CloudCheckIcon className="text-white" size={24} />
            </div>
          
          <span className="font-bold text-lg md:text-2xl bg-fuchsia-600 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 dark:from-fuchsia-300 dark:to-fuchsia-500 bg-clip-text text-transparent">
            Dimi.dev
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-2">
          {['home', 'projets', 'services', 'about', 'faq', 'contact'].map(link => (
            <a key={link} href={`#${link}`} className="font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 hover:bg-fuchsia-50 dark:hover:bg-gray-800 rounded-lg px-5 py-2 transition-all duration-300" >{link}</a>
          ))}

          <button onClick={toggleTheme} className="ml-4 bg-fuchsia-100 dark:bg-gray-800 hover:bg-fuchsia-200 dark:hover:bg-gray-700 transition-colors duration-300 text-fuchsia-600 dark:text-yellow-400 rounded-xl p-2 flex items-center justify-center">
            {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </nav>

        <button id="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu mobile" className={`lg:hidden p-3 rounded-xl transition-colors ${ isMenuOpen ? 'bg-fuchsia-200 dark:bg-gray-800' : 'bg-fuchsia-50 dark:bg-gray-800 dark:hover:bg-gray-600' }`}>
          <Menu className="text-fuchsia-600 dark:text-yellow-500 w-6 h-6" />
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden space-y-2 p-2 absolute top-full left-0 right-0 mt-2 mx-4 border border-fuchsia-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl shadow-xl animate-fadeInDown">
          <nav className="flex flex-col">
            {['home', 'projets', 'services', 'about', 'faq', 'contact'].map(link => (
              <a key={link} href={`#${link}`} className="font-medium text-gray-700 dark:text-gray-200 hover:text-fuchsia-500 hover:bg-fuchsia-50 dark:hover:bg-gray-800 rounded-lg px-5 py-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>
            ))}
          </nav>
          <div className="px-5">
            <button onClick={toggleTheme} className="mt-2 bg-fuchsia-100 dark:bg-gray-800 hover:bg-fuchsia-200 dark:hover:bg-gray-700 text-fuchsia-600 dark:text-yellow-400 rounded-xl p-3 flex items-center justify-center">
              {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
