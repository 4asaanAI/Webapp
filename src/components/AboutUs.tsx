import { Award, Users, Globe, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Globe, value: '30+', label: 'Countries Served' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-6">
              About Aasaan AI
            </h2>
            <p className="text-lg text-dark-600 mb-6 leading-relaxed">
              We are a leading AI solutions provider dedicated to helping businesses harness the power of artificial intelligence. Our team of experts brings years of experience in machine learning, data science, and business transformation.
            </p>
            <p className="text-lg text-dark-600 leading-relaxed">
              From startups to enterprises, we've helped organizations across industries implement AI solutions that drive real results. Our approach combines technical expertise with business acumen to ensure successful outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-primary text-white p-6 rounded-xl text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
