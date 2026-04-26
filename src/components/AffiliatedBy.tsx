export default function AffiliatedBy() {
  const affiliations = [
    {
      name: 'All India Startup',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'AWS',
      image: 'https://images.pexels.com/photos/3721457/pexels-photo-3721457.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Azure',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Affiliated By
          </h2>
          <p className="text-lg text-gray-600">
            Trusted partnerships with industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="w-full h-48 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 mb-4">
                <img
                  src={affiliation.image}
                  alt={affiliation.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {affiliation.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            Our partnerships enable us to deliver cutting-edge solutions and enterprise-grade infrastructure for your business needs.
          </p>
        </div>
      </div>
    </section>
  );
}
