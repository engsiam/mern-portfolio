import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <p className="text-lg text-gray-600">Dashboard content coming soon...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;