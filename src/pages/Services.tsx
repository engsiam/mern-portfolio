import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="text-lg text-gray-600">Services content coming soon...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Services;