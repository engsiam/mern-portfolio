import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Temporary blog data until we implement the backend
  const tempBlogs = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      excerpt: "Learn the basics of web development and start your journey...",
      image: "https://source.unsplash.com/random/800x600?web",
      date: "2024-03-15",
    },
    {
      id: 2,
      title: "The Future of AI in Business",
      excerpt: "Discover how AI is transforming the business landscape...",
      image: "https://source.unsplash.com/random/800x600?ai",
      date: "2024-03-14",
    },
    {
      id: 3,
      title: "Mobile App Development Trends",
      excerpt: "Stay ahead of the curve with these mobile development trends...",
      image: "https://source.unsplash.com/random/800x600?mobile",
      date: "2024-03-13",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              We create amazing digital experiences that inspire and innovate
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors animate-fade-in"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tempBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{blog.date}</span>
                    <a
                      href={`/blog/${blog.id}`}
                      className="text-primary hover:text-accent font-semibold"
                    >
                      Read More
                    </a>
                  </div>
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

export default Index;