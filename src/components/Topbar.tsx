import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

const Topbar: React.FC = () => {
  return (
    <div className="shadow-lg text-black py-2 hidden md:block ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Left Section: Location, Phone, Email */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <div className="flex items-center space-x-2 text-sm">
            <FaMapMarkerAlt  className="w-4 h-4 text-green-600"/>
            <span>Kathmandu, NEPAL</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaPhoneAlt  className="w-4 h-4 text-green-600"/>
            <span>+977 987654326</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaEnvelope  className="w-4 h-4 text-green-600"/>
            <span>info@example.com</span>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          {/* Social Icons */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full transition duration-300 hover:bg-blue-700"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full transition duration-300 hover:bg-green-600"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 bg-pink-500 text-white rounded-full transition duration-300 hover:bg-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:info@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 bg-gray-800 text-white rounded-full transition duration-300 hover:bg-gray-700"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
