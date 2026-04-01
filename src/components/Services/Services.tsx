import { useLanguage } from '../../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="pt-20 py-20 bg-gray-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">{t('My Services', 'Мої послуги')}</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('I build modern web interfaces using React and Tailwind CSS. My projects work in all browsers and are easy to maintain.', 'Я створюю сучасні веб-інтерфейси з React та Tailwind CSS. Мої проєкти працюють у всіх браузерах і легко підтримуються.')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('Web Development', 'Веб-розробка')}</h3>
            <p className="text-gray-600">
              {t('I build responsive websites with React using clean architecture and modern design patterns.', 'Я створюю адаптивні сайти на React з чистою архітектурою і сучасним дизайном.')}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('Mobile Optimization', 'Мобільна оптимізація')}</h3>
            <p className="text-gray-600">
              {t('Interfaces that look and work perfectly on any device — from phones to desktops with responsive design.', 'Інтерфейси, що виглядають і працюють ідеально на будь-якому пристрої — від телефону до десктопу.')}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('UI/UX Design', 'UI/UX дизайн')}</h3>
            <p className="text-gray-600">
              {t('I accurately implement Figma designs into neat and user-friendly interfaces with attention to detail.', 'Я точно втілюю макети з Figma у акуратні та зручні інтерфейси з увагою до дрібниць.')}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('State Management', 'Менеджмент стану')}</h3>
            <p className="text-gray-600">
              {t('I set up application logic with Redux Toolkit for stable and scalable performance across large applications.', 'Я налаштовую логіку додатку через Redux Toolkit для стабільної та масштабованої роботи великих проєктів.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}