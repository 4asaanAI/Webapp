import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/layaa-ai222/new-meeting');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Projects />
      <CallToAction
        onOpenContact={() => setIsContactModalOpen(true)}
        onScheduleMeeting={handleScheduleMeeting}
      />
      <AboutUs />
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
