import { Shield, Award, GraduationCap, BookOpen, Star } from 'lucide-react';

export default function WhyBest() {
  const features = [
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'We provide a safe & secure environment for your child'
    },
    {
      icon: Award,
      title: 'Certified Teachers',
      description: 'Well Qualified and certified teachers with rich exp'
    },
    {
      icon: GraduationCap,
      title: 'Quality Education',
      description: 'A holistic approach providing emotional wellbeing'
    },
    {
      icon: BookOpen,
      title: 'Balanced Studying',
      description: 'Keeping the primary part as teaching & extra activities'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why We Are The Best
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We have grown into a great and knowledge exit, inputs that enables us to be as we are today
                and was never taking today.
              </p>

              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Testimonial"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Kathy Thompson</h4>
                    <div className="flex gap-1 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "They are cool and the people are wonderful and I can't even believe how much so that truly tells
                  a story and helps me relax & stress as an"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
