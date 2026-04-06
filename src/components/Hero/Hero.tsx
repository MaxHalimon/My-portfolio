import { useLanguage } from '../../context/LanguageContext';
import myFaceImage from '../../assets/img/myFaceLinkedin.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-linear-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center max-w-4xl">
        <div className="animate-fade-in-down mb-6">
          <img
            src={myFaceImage}
            alt="Maksym Halimon"
            className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-fade-in-up">
          {t("Hi! I'm Maksym Halimon", "Привіт! Я Максим Халімон")}
        </h1>
        <p className="text-xl sm:text-2xl text-linkedin-500 font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {t('Frontend Developer', 'Фронтенд-розробник')}
        </p>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t(
            'Welcome to my online portfolio. I am a web developer with a passion for creating beautiful and functional websites with modern technologies.',
            'Запрошую до мого онлайн-портфоліо. Я веб-розробник, який захоплюється створенням красивих та функціональних сайтів за допомогою сучасних технологій.'
          )}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-200 text-white rounded-lg font-semibold hover:hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t('View My Works', 'Переглянути мої роботи')}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t('Contact Me', 'Зв\'язатись зі мною')}
          </a>
        </div>
      </div>
    </section>
  );
}
