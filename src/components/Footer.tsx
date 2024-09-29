import { FaFacebook, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const menuItems = ["Home", "Services", "Products", "Pricing"];
  const contactItems = [
    "Kathmandu , NEPAL",
    "contact@company.com",
  ];

  const socialIcons = [
    {
      href: "#",
      icon: FaFacebook,
      bgColor: "bg-blue-600",
      hoverColor: "bg-blue-700",
    },
    {
      href: "#",
      icon: FaWhatsapp,
      bgColor: "bg-green-600",
      hoverColor: "bg-green-700",
    },
    {
      href: "#",
      icon: FaInstagram,
      bgColor: "bg-pink-600",
      hoverColor: "bg-pink-700",
    },
    {
      href: "#",
      icon: FaGoogle,
      bgColor: "bg-yellow-600",
      hoverColor: "bg-yellow-700",
    },
  ];

  return (
    <>
      <div className="bg-gray-200">
        <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          {/* Menu Section */}
          <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-red-600 font-bold">Menu</div>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="my-2">
                  <a className="hover:text-red-600" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Componentity Section */}
          <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-xl text-red-600 mb-4">
             SNDB
            </h3>
            <p className="text-gray-500 text-sm mb-10">
            The Society for Nepalese Doctors from Bangladesh (SNDB) is a non-political, non-profit organization dedicated to Nepalese doctors who have earned MBBS/BDS or MD/MS degrees from Bangladesh. We proudly represent thousands of graduates currently practicing in prestigious institutions and hospitals across Nepal and abroad.

            </p>
          </div>

          {/* Contact Section */}
          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-red-600 font-bold">
              Contact Us
            </div>
            <ul>
              {contactItems.map((item, index) => (
                <li key={index} className="my-2">
                  <a className="hover:text-red-600" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <div className="flex space-x-6 mt-4">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a href={social.href} key={index} className="group">
                  <div
                    className={`w-10 h-10 flex items-center justify-center ${social.bgColor} text-white rounded-full group-hover:${social.hoverColor} transition duration-300 ease-in-out`}
                  >
                    <IconComponent className="footer-icon w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
          <div className="my-5 text-center">
            © Copyright 2024. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
