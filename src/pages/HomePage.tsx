import Aurora from "../components/Aurora";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <Aurora />
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Your Future with <span className="text-teal-400">Our Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          A secure, scalable, and innovative solution to power your business growth.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-teal-500 text-white rounded-2xl shadow hover:bg-teal-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-700 text-gray-200 rounded-2xl shadow hover:bg-gray-600 transition">
            Learn More
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 bg-[#232E36]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-[#1D262D] rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Secure</h3>
            <p className="text-gray-300">
              Industry-leading security standards to keep your data and transactions safe.
            </p>
          </div>
          <div className="p-6 bg-[#1D262D] rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Scalable</h3>
            <p className="text-gray-300">
              Built to grow with your business, from startup to enterprise level.
            </p>
          </div>
          <div className="p-6 bg-[#1D262D] rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Innovative</h3>
            <p className="text-gray-300">
              Cutting-edge technology that helps you stay ahead in your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <button className="px-8 py-4 bg-teal-500 text-white rounded-2xl shadow hover:bg-teal-600 transition">
          Join Us Today
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;