import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Temporary services data until we implement dynamic content
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies.",
    icon: "🌐",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    icon: "📱",
    features: ["iOS & Android", "User-friendly UI", "Offline Support"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful and functional user interfaces.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;