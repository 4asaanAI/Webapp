import { Brain, Target, Zap, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI technology to transform your business processes and drive innovation.',
    },
    {
      icon: Target,
      title: 'Industry-Specific',
      description: 'Tailored solutions designed for your specific industry needs and challenges.',
    },
    {
      icon: Zap,
      title: 'Quick Implementation',
      description: 'Fast deployment with minimal disruption to your existing operations.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 dedicated support from our team of AI specialists and consultants.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            We provide comprehensive AI solutions that help businesses grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary-500 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition">
                <feature.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-semibold text-dark-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-dark-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
