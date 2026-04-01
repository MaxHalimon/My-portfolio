import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-300 ${
      isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-lg' : 'relative bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            {!isScrolled && (
              <img
                src="src\assets\img\favicon.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
            )}
            {isScrolled && (
              <div className="text-xl font-bold transition-colors duration-300 text-gray-900">
                {t('Maksym Halimon', 'Максим Халімон')}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-6">
              <li><a href="#about" className={`transition-colors duration-300 hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('About', 'Про мене')}</a></li>
              <li><a href="#skills" className={`transition-colors duration-300 hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Skills', 'Навички')}</a></li>
              <li><a href="#services" className={`transition-colors duration-300 hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Services', 'Послуги')}</a></li>
              <li><a href="#projects" className={`transition-colors duration-300 hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Projects', 'Проєкти')}</a></li>
              <li><a href="#contact" className={`transition-colors duration-300 hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Contact', 'Контакт')}</a></li>
            </ul>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-gray-700'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setLanguage(language === 'en' ? 'uk' : 'en')}
              className="px-3 py-2 bg-linkedin-500 text-white rounded-md font-medium hover:bg-linkedin-600 transition-all duration-300 hover:scale-105 btn-no-border"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'UKR' : 'ENG'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700">
            <ul className="flex flex-col space-y-3 pt-4">
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#about" className={`block py-2 transition-colors hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('About', 'Про мене')}</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#skills" className={`block py-2 transition-colors hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Skills', 'Навички')}</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#services" className={`block py-2 transition-colors hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Services', 'Послуги')}</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#projects" className={`block py-2 transition-colors hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Projects', 'Проєкти')}</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#contact" className={`block py-2 transition-colors hover:text-linkedin-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-600'
              }`}>{t('Contact', 'Контакт')}</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}