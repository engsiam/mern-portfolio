import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Temporary blog data until we implement dynamic content
const blogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "Learn the basics of web development and start your journey...",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    date: "2024-03-15",
    author: "John Doe",
    category: "Development",
  },
  {
    id: 2,
    title: "The Future of AI in Business",
    excerpt: "Discover how AI is transforming the business landscape...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    date: "2024-03-14",
    author: "Jane Smith",
    category: "Technology",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
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
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary">{blog.category}</span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">By {blog.author}</span>
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

export default Blog;
