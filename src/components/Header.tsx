import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileCommitteeDropdownOpen, setMobileCommitteeDropdownOpen] = useState(false);
  const [isMobileMembersDropdownOpen, setMobileMembersDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-green-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo (visible only on mobile) */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="md:hidden flex items-center gap-1">
            <img
              src="/sndblogo1.png" // replace with your logo URL
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-md font-bold text-white">
                बंगलादेशस्थित नेपाली चिकित्सक समाज
              </h1>
              <p className="text-xs text-white">
                Society For Nepalese Doctors from Bangladesh
              </p>
            </div>
          </div>

          {/* Hamburger Icon (visible on mobile) */}
          <div className="md:hidden text-end">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Centered Navigation (Desktop) */}
        <nav className="flex-grow text-center hidden md:flex space-x-10 justify-center">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-400">
            About Us
          </Link>

          <Link to="/executive-message" className="hover:text-gray-200">
            President's Message
          </Link>

          {/* Committee Dropdown (Desktop) */}
          <div className="relative group ">
            <button className="hover:text-red-400 flex items-center">
              Committee
            </button>
            <div className="absolute left-0 mt-3 w-48 bg-red-500 text-black shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out transform -translate-y-4">
              <Link to="/executive-comimttee" className="block text-sm py-2 border-b-2 hover:bg-red-600 text-white">
              Executive Committee
              </Link>
              <Link to="/past-committee" className="block text-sm py-2 hover:bg-red-600 text-white">
               Past Executive Committee
              </Link>
            </div>
          </div>
       
          {/* Members Dropdown (Desktop) */}
          <div className="relative group">
            <button className="hover:text-red-400 flex items-center">
              Members
            </button>
            <div className="absolute left-0 mt-3 w-48 bg-red-500 text-black shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out transform -translate-y-4">
              <Link to="/member" className="block text-sm py-2 border-b-2 hover:bg-red-600 text-white">
              Life Members
              </Link>
              <Link to="/register-member" className="block text-sm py-2 hover:bg-red-600 text-white">
              Membership Info
              </Link>
            </div>
          </div>

          <Link to="/blog" className="hover:text-gray-200">
           Activities/blog
          </Link>
          <Link to="/notice" className="hover:text-gray-200">
            Notice
          </Link>
          <Link to="/gallery" className="hover:text-gray-200">
            Gallery
          </Link>
          
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white px-4 py-2 space-y-3 mt-2">
          <Link to="/" className="block hover:text-gray-200 border-b border-green-500" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-200 border-b border-green-500" onClick={closeMenu}>
            About Us
          </Link>

          {/* Committee Dropdown (Mobile) */}
          <div className="block hover:text-gray-200 border-b border-green-500 ">
            <button onClick={() => setMobileCommitteeDropdownOpen(!isMobileCommitteeDropdownOpen)} className="w-full text-left">
              Committee
            </button>
            {isMobileCommitteeDropdownOpen && (
              <div className="ml-8 mt-2 space-y-1">
                <Link to="/executive-comimttee" className="block hover:text-gray-200 border-b border-red-500" onClick={closeMenu}>
                  Executive Committee
                </Link>
                <Link to="/past-committee" className="block hover:text-gray-200 " onClick={closeMenu}>
                Past Executive Committee
                </Link>
              </div>
            )}
          </div>

          {/* Members Dropdown (Mobile) */}
          <div className="block hover:text-gray-200 border-b border-green-500">
            <button onClick={() => setMobileMembersDropdownOpen(!isMobileMembersDropdownOpen)} className="w-full text-left">
              Members
            </button>
            {isMobileMembersDropdownOpen && (
              <div className="ml-8 mt-2 space-y-1">
                <Link to="/member" className="block hover:text-gray-200 border-b border-red-500" onClick={closeMenu}>
                Life Members
                </Link>
                <Link to="/register-member" className="block hover:text-gray-200" onClick={closeMenu}>
                  Membership Info
                </Link>
              </div>
            )}
          </div>

          <Link to="/executive-message" className="block hover:text-gray-200 border-b border-green-500" onClick={closeMenu}>
            President's Message
          </Link>
          <Link to="/notice" className="block hover:text-gray-200 border-b border-green-500" onClick={closeMenu}>
            Notice
          </Link>
          <Link to="/gallery" className="block hover:text-gray-200 border-b border-green-500" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/blog" className="block hover:text-gray-200 border-b border-green-500" onClick={closeMenu}>
            Activities
          </Link>
          <Link to="/contact" className="block hover:text-gray-200 " onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
