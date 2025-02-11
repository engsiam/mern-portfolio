import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import axios from 'axios'
import { useEffect, useState } from "react";

const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

const Index = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://mern-portfolio-r2ov.vercel.app/api/blogs');
        
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
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
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm font-bold">{formatDateTime(blog.createdAt)} {/* Format the date */}</span>
                    <a
                      href={`/blog/${blog._id}`}
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
