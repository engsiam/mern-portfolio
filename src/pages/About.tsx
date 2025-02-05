import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            We are a dedicated team of professionals committed to delivering excellence
            in everything we do.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team members will be loaded dynamically here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;