import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Website Design',
    description: 'Complete website overhaul for local salon business',
    image: '/screenshot_2026-02-09_at_8.00.53_am.png',
    customerName: 'Arun Chaturvedi',
    customerRole: 'Owner Of BrosAndBeyond',
    customerCompany: 'Hair Saloon',
    review: 'Layaa AI Made our website, It was really amazing experiance to work with this company. best services till now I had for any website',
  },
  {
    id: 2,
    title: 'School ERP Automation',
    description: 'End-to-end enterprise resource planning system for educational institutions',
    image: '/about 2.jpg',
    customerName: 'Anaya Patel',
    customerRole: 'School Principal',
    customerCompany: 'Heritage Public School',
    review: 'The AI education sessions were incredibly valuable. Our team now confidently uses AI based ERP for attendance, results, technical analyses of student performance and more',
  },
  {
    id: 3,
    title: 'Business Automation Suite',
    description: 'Custom automation tool for streamlining business operations',
    image: '/screenshot_2026-02-09_at_8.11.34_am.png',
    customerName: 'Arjun Singh',
    customerRole: 'Finance Manager',
    customerCompany: 'Summit Financial Group',
    review: 'Professional, thorough, and results-driven. Layaa didn\'t just implement solutions—they ensured understanding.',
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming businesses across industries with AI-powered solutions
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full sm:w-96 bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {project.description}
                  </p>

                  <div className="border-t pt-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent-500 text-accent-500"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                      "{project.review}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {project.customerName}
                      </p>
                      <p className="text-xs text-gray-600">
                        {project.customerRole} • {project.customerCompany}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/3 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/3 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
