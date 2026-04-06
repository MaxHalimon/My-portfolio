import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Maksym Halimon</h3>
            <p className="text-gray-400 text-sm">
              Frontend Developer passionate about creating beautiful and functional web applications using modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Responsive Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">State Management</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/maxhalimon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/max-halimon/"
                target='_blank'
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/maxhalimon" 
                target='_blank'
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="w-6 h-6" />
              </a>
              <a
                href="mailto:halimon.dev@gmail.com"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; {currentYear} Maksym Halimon. All rights reserved.</p>
          </div>
          <div className="text-gray-400 text-sm flex items-center">
            <span>Made with</span>
            <FaHeart className="w-4 h-4 mx-2 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
