import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { ArrowRight } from "lucide-react";

// Temporary blog data until we implement dynamic content
const tempBlogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of web development and start your journey...",
    image: "https://source.unsplash.com/random/800x600?coding",
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
  {
    id: 4,
    title: "UI/UX Design Principles",
    excerpt: "Master the fundamentals of user interface design...",
    image: "https://source.unsplash.com/random/800x600?design",
    date: "2024-03-12",
  },
  {
    id: 5,
    title: "Cloud Computing Solutions",
    excerpt: "Explore modern cloud infrastructure and services...",
    image: "https://source.unsplash.com/random/800x600?cloud",
    date: "2024-03-11",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices",
    excerpt: "Learn how to protect your digital assets effectively...",
    image: "https://source.unsplash.com/random/800x600?security",
    date: "2024-03-10",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <a
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
            >
              View All
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      className="text-primary hover:text-primary/80 font-semibold"
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