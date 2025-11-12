import { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'why-choose-us', 'services', 'about-us'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight - 100) {
        currentSection = 'about-us';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'services', label: 'Services' },
    { id: 'about-us', label: 'About' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Flower2 className="w-8 h-8 text-accent-500" />
              <span className="text-xl font-bold text-primary-600" style={{ fontFamily: 'Maiandra GD, cursive' }}>Aasaann AI</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <div
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="flex flex-col items-center gap-1 cursor-pointer"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'text-primary-600'
                        : 'text-gray-600 hover:text-primary-500'
                    }`}
                  >
                    {section.label}
                  </span>
                  <div
                    className={`h-0.5 w-full rounded-full transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-600'
                        : 'bg-transparent'
                    }`}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition font-semibold"
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
