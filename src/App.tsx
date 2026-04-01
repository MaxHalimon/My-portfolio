import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import BackToTop from './components/BackToTop/BackToTop'
import Footer from './components/Footer/Footer'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </LanguageProvider>
  )
}