
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogDetails = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <article className="max-w-3xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop"
            alt="Blog Cover"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">Getting Started with Web Development</h1>
          <div className="flex items-center text-gray-600 mb-8">
            <span>By John Doe</span>
            <span className="mx-2">•</span>
            <span>March 15, 2024</span>
            <span className="mx-2">•</span>
            <span>Development</span>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* Add more content as needed */}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetails;
