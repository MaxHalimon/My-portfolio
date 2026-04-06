import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-20 py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          {t('About Me', 'Про мене')}
        </h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t(
              'With experience working with React, Tailwind CSS, Redux Toolkit, Material UI, JavaScript, HTML, and CSS. I enjoy working in a team, learning new things, and using modern technologies to develop my skills. I\'m passionate about creating beautiful, functional, and user-friendly websites, and I specialize in developing responsive, interactive web applications using modern technologies.',
              'Маю досвід роботи з React, Tailwind CSS, Redux Toolkit, Material UI, JavaScript, HTML і CSS. Мені подобається працювати в команді, вчитися новому і застосовувати сучасні технології для розвитку своїх навичок. Я створюю красиві, функціональні й зручні веб-сайти та спеціалізуюсь на розробці адаптивних, інтерактивних вебзастосунків.'
            )}
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t(
              'My approach combines technical excellence with user-centered design. I focus on writing clean, maintainable code and delivering projects that exceed expectations.',
              'Мій підхід поєднує технічну грамотність з орієнтацією на користувача. Я зосереджуюсь на чистому, підтримуваному коді та реалізую проекти, що відповідають очікуванням.'
            )}
            <a
              href="/resume.pdf"
              className="inline-block ml-4 px-6 py-2 bg-linkedin-500 text-white rounded-lg font-semibold hover:bg-linkedin-600 transition-all duration-300 hover:scale-105 hover:shadow-lg btn-no-border"
              download
            >
              {t('Download resume', 'Завантажити резюме')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
