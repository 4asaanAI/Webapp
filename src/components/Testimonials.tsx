const products = [
  {
    title: 'Tax Compliance Automation',
    description: 'Automates tax filing, compliance tracking, and regulatory updates for seamless tax management',
    image: '/istockphoto-2158469005-612x612.jpg',
  },
  {
    title: 'Document Processing',
    description: 'Intelligent document extraction and processing for faster data entry and accuracy',
    image: '/download.jpeg',
  },
  {
    title: 'Client Management Portal',
    description: 'Centralized platform for managing client relationships and communications',
    image: '/download_(1).jpeg',
  },
  {
    title: 'Financial Reporting',
    description: 'Real-time financial analytics and automated report generation',
    image: '/javaistan-ai-generated-8945620_1920.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive products designed for CA professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
