export default function AffiliatedBy() {
  const affiliations = [
    {
      image: '/Screenshot_2026-04-27_at_4.09.25_AM.png',
      alt: 'All India Startup',
    },
    {
      image: '/Screenshot_2026-04-27_at_4.15.56_AM.png',
      alt: 'AWS Startups',
    },
    {
      image: '/microsoftazure.png',
      alt: 'Microsoft Azure',
    },
    {
      image: '/Screenshot_2026-05-07_at_12.01.56_PM.png',
      alt: 'Partner',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Affiliated By
        </h2>

        <div className="flex items-center justify-center gap-8 md:gap-12">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <div className="h-28">
                <img
                  src={affiliation.image}
                  alt={affiliation.alt}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
