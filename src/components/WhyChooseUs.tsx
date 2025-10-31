import { BookOpen, Lightbulb, Network, TrendingUp, Flower2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Education-First Approach',
    description:
      'We don\'t just automate—we teach your workforce to harness AI confidently. Knowledge is power, and we empower every team member.',
  },
  {
    icon: Lightbulb,
    title: 'Customized Industry Insights',
    description:
      'Tailored guidance for your sector. Whether education, manufacturing, healthcare, or hospitality, we understand your unique challenges.',
  },
  {
    icon: Network,
    title: 'No-Code Automations',
    description:
      'Powerful automation solutions delivering complex functionality without complex coding.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description:
      'Start with small automations and scale up as your confidence grows. Build AI capabilities at your own pace.',
  },
  {
    icon: Flower2,
    title: 'Empowerment Through Knowledge',
    description:
      'Your team learns to independently manage and evolve your AI ecosystem. Independence is our end goal.',
  },
];

export default function WhyChooseUs() {
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
    <section id="why-choose-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-3">
            Why Us?
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Five core principles that guide our mission to democratize AI adoption
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeCard === index;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`p-6 bg-white border rounded-xl transition duration-300 group text-center ${
                  isActive
                    ? 'shadow-lg border-primary-300 md:border-dark-200'
                    : 'border-dark-200'
                } md:hover:shadow-lg md:hover:border-primary-300`}
              >
                <div className={`mb-4 p-3 rounded-lg w-fit mx-auto transition ${
                  isActive
                    ? 'bg-accent-50 md:bg-primary-50'
                    : 'bg-primary-50'
                } md:group-hover:bg-accent-50`}>
                  <Icon className={`w-6 h-6 transition ${
                    isActive
                      ? 'text-accent-500 md:text-primary-600'
                      : 'text-primary-600'
                  } md:group-hover:text-accent-500`} />
                </div>
                <h3 className="font-bold text-dark-900 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
