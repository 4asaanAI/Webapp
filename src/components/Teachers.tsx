export default function Teachers() {
  const teachers = [
    {
      name: 'Facebook',
      role: 'Principle of the',
      subtitle: 'school',
      image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Gambar',
      role: 'Manager of the',
      subtitle: 'school',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Solok',
      role: 'Math teacher of',
      subtitle: 'school',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Fabwind',
      role: 'The science',
      subtitle: 'teacher',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Main <span className="text-orange-400">Teaching</span> By
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-bold text-xl mb-1">{teacher.name}</h3>
              <p className="text-gray-400 text-sm">{teacher.role}</p>
              <p className="text-gray-400 text-sm">{teacher.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
