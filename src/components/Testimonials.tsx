import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Operations Director',
    company: 'TechFlow Industries',
    content: 'Layaa AI transformed how our team works. We reduced manual data entry by 70% in just three weeks. The training was smooth and everyone adapted quickly.',
    rating: 5,
    image: '/istockphoto-2158469005-612x612.jpg',
  },
  {
    name: 'Arnav Mehata',
    role: 'CEO',
    company: 'Growth Ventures',
    content: 'The consultation process was eye-opening. Layaa identified automation opportunities we never saw coming. ROI within the first month exceeded expectations.',
    rating: 5,
    image: '/download.jpeg',
  },
  {
    name: 'Anaya Patel',
    role: 'Marketing Manager',
    company: 'Digital Innovators Co',
    content: 'The AI education sessions were incredibly valuable. Our team now confidently uses AI tools for everything from content creation to analytics. Game changer!',
    rating: 5,
    image: '/download_(1).jpeg,
  },
  {
    name: 'Arjun Singh',
    role: 'Finance Manager',
    company: 'Summit Financial Group',
    content: 'Professional, thorough, and results-driven. Layaa didn\'t just implement solutions—they ensured our team understood and could maintain them independently.',
    rating: 5,
    image: '/javaistan-ai-generated-8945620_1920.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by teams across industries to transform their workflows with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent-500 text-accent-500"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
