import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://mern-portfolio-r2ov.vercel.app/api/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.splice(0, 3).map((blog) => (
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
                  <div className="flex justify-between items-center mb-2">
                    {/* <span className="text-sm text-primary">{blog.category}</span> */}
                    <span className="text-sm text-gray-500">
                      {formatDateTime(blog.createdAt)} {/* Format the date */}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">By Jhon Doe</span>
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

export default Blog;
