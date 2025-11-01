import { Bot, Code, LineChart, Lightbulb, Workflow, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI solutions tailored to your business needs.',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Build bespoke AI applications and integrations for your specific requirements.',
    },
    {
      icon: LineChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Streamline operations and reduce costs with intelligent automation.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Explore emerging AI technologies and their potential for your business.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure your AI solutions meet industry standards and regulations.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to drive your business forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-dark-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-dark-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
