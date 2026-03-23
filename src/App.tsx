import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import MeetingModal from './components/MeetingModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  const handleScheduleMeeting = () => {
    setIsMeetingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <Services />
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
      <MeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />
    </div>
  );
}

export default App;
