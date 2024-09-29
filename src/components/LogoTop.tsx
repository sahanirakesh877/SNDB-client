import React from "react";
import { useState, useEffect } from "react";
import NepaliDate from "nepali-datetime"; // Import the NepaliDate class
import { FaCalendarAlt } from "react-icons/fa";

const LogoTop: React.FC = () => {
  const [nepaliDate, setNepaliDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const nepaliDateObj = new NepaliDate(date);
    const formattedNepaliDate = nepaliDateObj.format("dddd, DD MMMM YYYY"); // Example format: "Saturday, 5 Bhadra 2078"
    setNepaliDate(formattedNepaliDate);
  }, []);

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="md:flex justify-between items-center py-2  hidden ">
        {/* Left side: Logo and Text */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="/sndblogo1.png" // replace with your logo URL
            alt="Logo"
            className="h-28 w-28 object-contain "
          />
          {/* Text */}
          <div>
            <h1 className="text-2xl font-bold text-green-600">
              बंगलादेशस्थित नेपाली चिकित्सक समाज
            </h1>
            <p className="text-lg text-red-700 font-semibold">
              Society For Nepalese Doctors from Bangladesh
            </p>
          </div>
        </div>

        {/* Right side: Box for Date in Nepali */}
        <div className="bg-white   rounded-lg shadow-md px-6 py-1 flex items-center space-x-2">
          {/* Optional: Add a calendar icon */}
          <div className="text-gray-500">
            <FaCalendarAlt className="text-md text-red-500" />
          </div>
          <p className="text-md font-medium  text-gray-600">{nepaliDate}</p>
        </div>
      </div>
    </div>
  );
};

export default LogoTop;
