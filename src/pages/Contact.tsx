import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Status message state
  const [status, setStatus] = useState<{
    success: string | null;
    error: string | null;
  }>({
    success: null,
    error: null,
  });

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/notice/contact`,
        formData,
     
      );

      if (response.status === 200) {
        setStatus({ success: "Your message has been sent!", error: null });
        // Clear the form after successful submission
        setFormData({ name: "", phone: "", email: "", message: "" });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Check if error is an Axios error
        setStatus({
          success: null,
          error:
            error.response?.data?.message ||
            "Failed to send message. Please try again later.",
        });
      } else {
        // Handle other types of errors (non-Axios errors)
        setStatus({
          success: null,
          error: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  };

  return (

    <>
   <Helmet>
    <title>Contact Us | Society of Nepal Doctors of Bangladesh</title>

    {/* Meta description for SEO */}
    <meta
      name="description"
      content="Get in touch with the Society for Nepalese Doctors from Bangladesh (SNDB). Contact us for inquiries, membership information, and to learn more about our healthcare initiatives in Nepal."
    />

    {/* Keywords for the page */}
    <meta
      name="keywords"
      content="contact SNDB, Nepalese doctors contact, Bangladesh doctors, healthcare inquiries, SNDB membership, Nepal healthcare organization"
    />
</Helmet>

    <div className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative text-center pb-8">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            Contact Us
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
                We’d love to hear from you! Feel free to reach out to us for any
                queries, collaborations, or support.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-center">
                <FaLocationArrow className="text-blue-700 mr-3 w-5 h-5" />
                <span className="text-sm text-gray-300">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-700 mr-3 w-5 h-5" />
                <span className="text-sm text-gray-300">+977 9817073670</span>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-blue-700 mr-3 w-5 h-5" />
                <span className="text-sm text-gray-300">sndbdoctors@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-5 mt-4">
              <a
                href="https://www.facebook.com/share/PxQiCqxYdNR851RL/?mibextid=LQQJ4d"
                className="text-white hover:text-yellow-400 transition"
                target="-blank"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/9779817073670"
                className="text-white hover:text-yellow-400 transition"
                 target="-blank"
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

          {/* Right section - Contact Form */}
          <form className="md:col-span-8 p-10 bg-white" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Enter Your Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9812345678"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  rows={6}
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
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

            {/* Status message */}
            {status.success && (
              <p className="text-green-500 mt-4">{status.success}</p>
            )}
            {status.error && (
              <p className="text-red-500 mt-4">{status.error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
