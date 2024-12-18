import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
     
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img 
            src="/logo.png"  
            alt=" Logo"
            className="w-15 h-14"  
          />
          <Link to="/" className="text-white text-3xl font-semibold">
            BlogPlanet
          </Link>
        </div>

   
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white text-lg hover:text-blue-200 transition duration-300">
            Home
          </Link>
          <Link to="/create" className="text-white text-lg hover:text-blue-200 transition duration-300">
            Create Blog
          </Link>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

     
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col space-y-4 p-4 bg-blue-600">
          <Link
            to="/"
            className="text-white text-lg hover:text-blue-200 transition duration-300"
            onClick={() => setIsOpen(false)} 
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-white text-lg hover:text-blue-200 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Create Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
