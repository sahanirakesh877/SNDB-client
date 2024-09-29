import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const notices = [
  {id:1,
    date: "September 12, 2024",
    title: "Annual Meeting Notice",
    imgSrc:
      "https://img.freepik.com/free-vector/flat-design-healthcare-establishment-poster_23-2149679331.jpg?t=st=1727588561~exp=1727592161~hmac=e8fc5b997a60905d5585e273d7b4a999f31c9a66b12e7bd1f570c52b57cac74c&w=826",
  },
  {
    id:2,
    date: "August 20, 2024",
    title: "Policy Update Notice",
    imgSrc:
      "https://img.freepik.com/free-psd/world-hepatitis-day-invitation-template_23-2150412744.jpg?t=st=1727588542~exp=1727592142~hmac=2d065fcc6b9b57645a3067f397b318bfd508bc16047163e49fb1693c26e21d21&w=826",
  },
  {
    id:3,
    date: "July 15, 2024",
    title: "Healthcare Training Schedule",
    imgSrc:
      "https://img.freepik.com/free-psd/healthcare-flyer-template_23-2148969697.jpg?t=st=1727588524~exp=1727592124~hmac=dc5d71749e0ed0aaf2ddd3261482c9e15d841444fbc32a51b9ffa6e4e04e4219&w=826",
  },
];

const pdfs = [
  {
    title: "Annual Report 2024",
    link: "#",
  },
  {
    title: "Healthcare Guidelines 2024",
    link: "#",
  },
  {
    title: "COVID-19 Safety Protocols",
    link: "#",
  },
];

const Notice: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center pb-8">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            Notices and Documents
          </p>
          <span className="block w-40 h-[2px] bg-red-500 mx-auto mt-1"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Notices */}
          <div className="bg-blue-50 p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-6  border-b-2 border-green-500 ">
              Latest Notices
            </h2>
            <ul className="space-y-1">
              {notices.map((notice, id) => (
                <li
                  key={id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center">
                    <Link to={`/notice/${notice.id}`}>
                    <img
                      src={notice.imgSrc}
                      alt={notice.title}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    </Link>
                    <div>
                      <p className="text-sm text-gray-500">{notice.date}</p>
                      <h3 className="text-lg font-semibold text-gray-700">
                        {notice.title}
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: PDF Downloads */}
          <div className="bg-green-50 p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-6  border-b-2 border-green-500 ">
              Important Documents
            </h2>
            <ul className="space-y-1">
              {pdfs.map((pdf, id) => (
                <li
                  key={id}
                  className="flex items-center justify-between border-b border-red-300 pb-2"
                >
                  <h3 className="text-md font-semibold">{pdf.title}</h3>
                  <a
                    href={pdf.link}
                    className="inline-flex items-center justify-center shadow-lg bg-white text-green-600 font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-gray-100 hover:text-green-600 text-md"
                    download
                  >
                    <FaDownload />
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Notice;
