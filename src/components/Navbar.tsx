
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="py-3 px-4 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-800">FakeExcuse</span>
          <span className="text-gray-600">Generate the perfect excuse</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
