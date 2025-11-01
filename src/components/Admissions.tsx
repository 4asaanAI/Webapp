import { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const faqs = [
    {
      question: 'What is the admission process?',
      answer: 'The admission process includes filling out the application form, scheduling a visit, and meeting with our admissions team.'
    },
    {
      question: 'Do you provide transportation?',
      answer: 'Yes, we provide safe and reliable transportation services for all our students across the city.'
    },
    {
      question: 'Are there summer or holiday camps?',
      answer: 'Yes, we organize summer camps and holiday programs with various educational and recreational activities.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Have any Questions?</h2>

            <div className="space-y-4 mb-8">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-white/15 transition-all group"
                >
                  <summary className="font-semibold text-lg flex items-center justify-between">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Book Admissions Now</h3>
              <p className="text-white/90 mb-6">Open - 8am</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Build A Visit May</p>
                    <p className="text-sm text-white/80">Online scheduling available</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">00am</p>
                    <p className="text-sm text-white/80">Call us anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Have any Questions?</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Send us a message"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  placeholder="Give us a missed call here"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Send specific enquiries here"
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Time Slot</span>
                </div>
                <select className="bg-transparent border-none outline-none cursor-pointer font-semibold">
                  <option>Select time</option>
                  <option>9:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 1:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                </select>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Select Slot</span>
                </div>
                <select className="bg-transparent border-none outline-none cursor-pointer font-semibold">
                  <option>Select date</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
