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
          {/* Your dashboard content goes here */}
          <div className="p-6">Welcome to the Dashboard!</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
