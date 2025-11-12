import { BookOpen, Plug, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-16 sm:py-20 bg-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/about%202.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 via-primary-500/85 to-blue-600/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-left">
            About Us
          </h2>

          <div className="space-y-6 text-white leading-relaxed text-left">
            <p>
              <span className="font-semibold">We</span> are an AI
              education and automation agency dedicated to helping businesses
              understand, adopt, and integrate the power of Artificial Intelligence
              into their daily operations.
            </p>

            <div>
              <h3 className="font-bold mb-2 text-lg">
                Our Mission
              </h3>
              <p>
                To make AI aasaann ("easy") for every business. We democratize AI
                adoption by making it understandable, practical, and accessible for
                SMEs in India.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-lg">
                Our Approach: Learn, Integrate, Automate
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-accent-300">Learn:</strong> We educate teams about the latest AI
                    tools and their industry use cases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Plug className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-accent-300">Integrate:</strong> We design simple, scalable workflows
                    aligned with your daily operations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-accent-300">Automate:</strong> We deploy automations and train your
                    team to manage them independently.
                  </span>
                </li>
              </ul>
            </div>

            <p className="pt-2 border-t border-white/30">
              The result — smoother operations, higher productivity, and a team
              that understands how to use modern AI tools effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
