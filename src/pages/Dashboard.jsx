import Sidebar from '../layouts/Sidebar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My React Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4">All Cipher Methods</h2>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  onClick={() => window.open('https://system-security-cryptography.vercel.app/', '_blank')}
                >
                  View Project
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4">Random Password Generator</h2>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                  onClick={() => window.open('https://password-generator-github-io.vercel.app/', '_blank')}
                >
                  View Project
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4">Background Color Changer</h2>
                <button
                  className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
                  onClick={() => window.open('https://background-color-changer-five-xi.vercel.app/', '_blank')}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
