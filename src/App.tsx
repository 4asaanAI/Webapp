import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyBest from './components/WhyBest';
import Activities from './components/Activities';
import Admissions from './components/Admissions';
import Teachers from './components/Teachers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      <Hero />
      <WhyBest />
      <Activities />
      <Admissions />
      <Teachers />
      <Footer />
    </div>
  );
}

export default App;
