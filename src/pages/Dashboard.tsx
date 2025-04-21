
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 pb-10">
      <div className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        <header className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-gray-800">Your Dashboard</h1>
          <p className="text-base md:text-lg text-gray-600">Welcome!</p>
        </header>

        <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-xl mb-6 md:mb-8">
          <p className="text-center text-gray-700 my-10">
            This is your personal dashboard. In the future, you'll be able to save your favorite excuses here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
