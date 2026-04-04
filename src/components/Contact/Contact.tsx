import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

// Initialize Email.js with your public key
// Replace 'YOUR_PUBLIC_KEY' with your actual Email.js public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!);

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  try {
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID!,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
);

    setSubmitMessage(t('Message sent successfully!', 'Повідомлення успішно відправлено!'));
    setFormData({ name: '', email: '', message: '' });

    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000);
  } catch (error) {
    console.error('Failed to send email:', error);
    setSubmitMessage(t('Failed to send message. Please try again.', 'Помилка при відправленні повідомлення. Спробуйте ще раз.'));
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="pt-20 py-20 bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('Contact me', 'Контакти')}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("I'm open to exciting projects and collaborations — feel free to reach out!", 'Я відкритий до цікавих проєктів та співпраці — не соромтеся звертатися!')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('Send a Message', 'Відправити повідомлення')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('Name', "Ім'я")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-gray-900"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-linkedin-500 text-white rounded-lg font-semibold hover:bg-linkedin-600 transition-colors btn-no-border disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('Sending...', 'Відправлення...') : t('Send Message', 'Відправити')}
              </button>
              {submitMessage && (
                <div className={`text-center py-2 rounded-lg ${
                  submitMessage.includes('successfully') || submitMessage.includes('успішно')
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('Get in Touch', "Зв'язатися")}</h3>
              <p className="text-gray-600 mb-6">
                {t("I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!", 'Я завжди відкритий до нових можливостей і цікавих проєктів. Давайте обговоримо, як можемо працювати разом!')}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:halimon.dev@gmail.com" className="text-linkedin-700 hover:text-linkedin-600">
                    halimon.dev@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/MaxHalimon/" 
                className="text-white bg-linkedin-500 hover:bg-linkedin-600 transition-colors p-3 rounded-full"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/max-halimon/" 
                className="text-white bg-linkedin-500 hover:bg-linkedin-600 transition-colors p-3 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://t.me/maxhalimon" 
                className="text-white bg-linkedin-500 hover:bg-linkedin-600 transition-colors p-3 rounded-full"
                aria-label="Telegram"
              >
                <FaTelegram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}