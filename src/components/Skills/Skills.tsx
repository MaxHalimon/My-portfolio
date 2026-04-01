import { skills } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMui, SiRedux, SiGraphql, SiTypescript } from 'react-icons/si';

const iconMap = {
  'React': FaReact,
  'JavaScript': FaJs,
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'Tailwind CSS': SiTailwindcss,
  'Material UI': SiMui,
  'Redux Toolkit': SiRedux,
  'GraphQL': SiGraphql,
  'TypeScript': SiTypescript,
  'Figma': FaFigma,
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="pt-20 py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          {t('My Skills', 'Мої навички')}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {t('Tools and technologies I work with to build modern web applications', 'Інструменти та технології, з якими я працюю для створення сучасних веб-застосунків')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.name as keyof typeof iconMap];
            return (
              <div 
                key={skill.name} 
                className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {IconComponent && <IconComponent className="text-4xl mb-4 mx-auto text-blue-600 hover:scale-110 transition-transform duration-300" />}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
