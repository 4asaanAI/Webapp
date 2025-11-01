import { Beaker, Palette, Music } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      icon: Beaker,
      title: 'Science Experiment',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Art & Drawing',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Music,
      title: 'Music & Singing',
      color: 'from-orange-400 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">My Activities</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${activity.color} rounded-2xl p-8 text-center transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl cursor-pointer`}
            >
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <activity.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl">{activity.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
