import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Temporary team data until we implement dynamic content
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://source.unsplash.com/random/400x400?portrait1",
    bio: "With over 15 years of experience in technology and business development.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://source.unsplash.com/random/400x400?portrait2",
    bio: "Expert in full-stack development and cloud architecture.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Design Lead",
    image: "https://source.unsplash.com/random/400x400?portrait3",
    bio: "Creative professional with a passion for user-centered design.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              We are a dedicated team of professionals committed to delivering
              excellence in digital solutions. Our mission is to help businesses
              grow through innovative technology and creative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">300+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;