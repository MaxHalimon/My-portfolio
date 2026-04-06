import { projects } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="pt-20 py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
          {t('My Projects', 'Мої проєкти')}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {t('Welcome to my web development portfolio! Explore a collection of my projects showcasing my expertise in frontend development. Here, you\'ll find a variety of web applications built with modern development tools.', 'Запрошую до мого портфоліо! Ознайомтеся з колекцією проєктів, що демонструють мої навички у фронтенд-розробці. Тут ви знайдете різноманітні веб-застосунки, створені за допомогою сучасних інструментів.')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-200 flex flex-col"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </a>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-linkedin-100 text-linkedin-700 text-xs font-semibold px-3 py-1 rounded-full hover:bg-linkedin-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="inline-block px-6 py-2 bg-linkedin-500 text-white rounded-lg font-semibold hover:bg-linkedin-600 transition-all duration-300 hover:scale-105 btn-no-border"
                >
                  View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
