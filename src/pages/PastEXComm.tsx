import React from "react";
import { Helmet } from "react-helmet";

const PastEXComm: React.FC = () => {
  const committeeData = [
    { title: "President", name: "Dr. Dinesh Prasad Koirala" },
    { title: "General Secretary", name: "Dr Mukesh Prashad Shah" },
 
    { title: "Joint Secretary", name: "Dr. Santosh  Raj Manandhar" },
    { title: "Treasurer", name: "Dr. Pinky Shah" },
    { title: "Joint Treasurer", name: "Dr. Mithlesh Yadav" },
  ];

  const VicePresident = [
    "Dr. Bishwo Pokhrel",
    "Dr. Lalit Kumar Das",
    "Dr. Rita Kumari mahaseth",
   
  ];

  const members = [
    "Dr. bashanta Baral",
    "Dr. Siba Thakali",
    "Dr. Mukesh Shah",
    "Dr. Archana Shrestha Yadav",
    "Dr. Niranjan Shah",
    "Dr. Nehal Asharaf",
    "Dr. Ritesh Ghimire",
    "Dr. Amrita Shrestha",
    "Dr. Upasana Sharma",
   
  ];

  return (
    <>
      <Helmet>
        <title>
          Past Executive Committee | Society of Nepal Doctors of Bangladesh
        </title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Explore the past Executive Committee members of the Society for Nepalese Doctors from Bangladesh (SNDB). Learn about their contributions to healthcare services and the organization's growth in Nepal."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="past SNDB Executive Committee, former SNDB leadership, Nepalese doctors, Bangladesh doctors, healthcare leadership, SNDB history, healthcare in Nepal"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative text-center pb-8">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            Past Executive Committee <span className="text-red-600">(2021-2022)</span>
          </p>
          <span className="block w-80 h-[2px] bg-red-500 mx-auto mt-1"></span>
        </div>

        {/* Highlighted Executive Positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {committeeData.slice(0, 2).map((person, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-200 to-green-300 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-green-800">
                {person.title}
              </h3>
              <p className="mt-2 text-gray-700">{person.name}</p>
            </div>
          ))}
        </div>

        {/* Vice-President & Provincial Coordinators */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 inline-block border-red-500">
          Vice-President & Provincial Coordinators:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VicePresident.map((vp, index) => (
            <li
              key={index}
              className="bg-blue-50 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <p className="text-gray-800 font-medium">{vp}</p>
            </li>
          ))}
        </ul>

        {/* Highlighted Executive Positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {committeeData.slice(2).map((person, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-100 to-green-200 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-green-800">
                {person.title}
              </h3>
              <p className="mt-2 text-gray-700">{person.name}</p>
            </div>
          ))}
        </div>

        {/* Members List */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 inline-block border-red-500">
          Members
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {members.map((member, index) => (
            <li
              key={index}
              className="bg-blue-50 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <p className="text-gray-800 font-medium">{member}</p>
            </li>
          ))}
        </ul>

        {/* Additional Executive Positions */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 inline-block border-red-500">
          Additional Executive Positions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-green-700">
            Founder & Ext. Affairs Coordinator:
            </h3>
            <p className="mt-2 text-gray-700">Dr. Rakesh  Shah</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-green-700">
              Editor-in-Chief
            </h3>
            <p className="mt-2 text-gray-700">Dr. Amresh Karn </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastEXComm;
