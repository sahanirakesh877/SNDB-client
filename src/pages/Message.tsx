import React from "react";
import { Helmet } from "react-helmet";
import drrakesh from '/doctor3.jpeg'

// Reusable Message Component
const MessageSection: React.FC<{
  imgSrc: string;
  imgAlt: string;
  title: string;
  message: string;
  name: string;
  position: string;
  reverse?: boolean; // Optional: To reverse layout
}> = ({ imgSrc, imgAlt, title, message, name, position, reverse }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
        <div className="relative text-center pb-8">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            President's Message
          </p>
          <span className="block w-40 h-[2px] bg-red-500 mx-auto mt-1"></span>
        </div>
        <div
          className={`bg-blue-50  py-6 flex flex-col md:flex-row items-center shadow-lg rounded-lg overflow-hidden ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="md:w-1/2 relative p-4 flex justify-center items-center">
            <div
              className={`relative w-5/6 h-auto ${
                reverse ? "border-t-8 border-r-8" : "border-t-8 border-l-8"
              } border-green-500 shadow-lg rounded-lg overflow-hidden`}
            >
              <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-auto object-contain bg-green-300"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 border-red-500 border-b-2 inline-block">{title}</h2>
            <p className="mt-4 text-gray-600 text-justify">{message}</p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
              <p className="text-gray-500">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MessageLeftImage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          President's Message | Society of Nepal Doctors of Bangladesh
        </title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Read the President's message from the Society for Nepalese Doctors from Bangladesh (SNDB). Learn about the vision, goals, and future initiatives of SNDB, aimed at enhancing healthcare services in Nepal."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="President's message SNDB, SNDB president, Nepalese doctors, Bangladesh doctors, SNDB vision, healthcare in Nepal, SNDB leadership"
        />
      </Helmet>

      <MessageSection
        imgSrc={drrakesh}
        imgAlt="Executive Director"
        title="Message From President"
        message="As the Executive Director of the Society of Nepal Doctors of Bangladesh (SNDB), I am honored to lead an organization that strives to bridge the medical communities of Nepal and Bangladesh. Our mission is to foster collaboration, share expertise, and contribute to the improvement of healthcare systems in both countries. Together, we aim to enhance the professional growth of our members and advance the medical field through innovation and research."
        name="Dr. Rakesh Shah"
        position="Executive President, SNDB"
      />
    </>
  );
};

export default MessageLeftImage;
