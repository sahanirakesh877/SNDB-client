import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className=" py-10">
        <div className="max-w-7xl mx-auto ">
        <div className="relative text-center pb-8">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
           contact us
          </p>
          <span className="block w-20 h-[2px] bg-red-500 mx-auto mt-1"></span>
          
        </div>

          <div className="grid grid-cols-1 md:grid-cols-12 border shadow-md rounded-lg overflow-hidden">
            {/* Left section - Contact Information */}
            <div className="bg-gray-900 md:col-span-4 p-10 text-white flex flex-col justify-between">
              <div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Contact Us
                </p>
                <h3 className="text-4xl leading-normal font-extrabold tracking-tight text-indigo-400 mt-2">
                  Get In <span className="text-red-400">Touch</span>
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-gray-300">
                  We’d love to hear from you! Feel free to reach out to us for
                  any queries, collaborations, or support.
                </p>
              </div>
              <div className=" space-y-4 ">
                <div className="space-y-4 mb-12">
                  <div className="flex items-center ">
                    <FaLocationArrow className="text-blue-700 mr-3  w-5 h-5" />
                    <span className="text-sm text-gray-300">
                      Kathmandu, Nepal
                    </span>
                  </div>
                  <div className="flex items-center ">
                    <FaPhone className="text-blue-700 mr-3 w-5 h-5" />
                    <span className="text-sm text-gray-300">
                      +977 1234 567 890
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-5 mt-4 ">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right section - Contact Form */}
            <form className="md:col-span-8 p-10 bg-white">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Enter Your Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="John"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="tel"
                    placeholder="9812345678"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-message"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-message"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-1 bg-gradient-to-r from-red-500 to-green-500 text-white font-semibold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
