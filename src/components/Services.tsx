import { GraduationCap, MessageSquare, Cog } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const services = [
  {
    icon: GraduationCap,
    title: 'AI Education & Enablement',
    description:
      'We help your teams understand emerging AI tools—what they do, how they work, and how to use them effectively in day-to-day tasks. From productivity tools to agent-based systems, we simplify complex concepts into easy, actionable learning.',
  },
  {
    icon: MessageSquare,
    title: 'AI Consultation & Strategy',
    description:
      'Our experts analyze your business processes and identify areas where AI delivers the most impact—from customer engagement to internal communication to workflow optimization. Strategic guidance tailored to your industry.',
  },
  {
    icon: Cog,
    title: 'Workflow Automation',
    description:
      'We build no-code and low-code automations perfectly integrated into your existing systems, with comprehensive training for your team to manage them independently.',
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setActiveCard(null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(cardCenter - viewportCenter);

          if (distanceFromCenter < rect.height / 2) {
            setActiveCard(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Services
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Learn, Integrate, Automate—our three-step methodology for AI success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border transition duration-300 group text-center ${
                  isActive
                    ? 'shadow-xl border-white/40 md:border-white/20'
                    : 'border-white/20'
                } md:hover:shadow-xl md:hover:border-white/40`}
              >
                <div className={`mb-6 p-4 bg-white/20 rounded-lg w-fit mx-auto transition ${
                  isActive ? 'shadow-lg md:shadow-none' : ''
                } md:group-hover:shadow-lg`}>
                  <Icon className={`w-8 h-8 transition ${
                    isActive
                      ? 'text-accent-500 md:text-white'
                      : 'text-white'
                  } md:group-hover:text-accent-500`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 transition ${
                  isActive
                    ? 'text-accent-500 md:text-white'
                    : 'text-white'
                } md:group-hover:text-accent-500`}>
                  {service.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
