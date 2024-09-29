import React from "react";

const PastEXComm: React.FC = () => {
  const committeeData = [
    { title: "President", name: "Dr. Rakesh Shah" },
    { title: "Immediate Past President", name: "Dr. Dinesh Prasad Koirala" },
    { title: "General Secretary", name: "Dr Ritesh Ghimire" },
    { title: "Secretary", name: "Dr. Nehal Asharaf" },
    { title: "Joint Secretary", name: "Dr. Pinky Shah" },
    { title: "Treasurer", name: "Dr. Amrita Shrestha" },
    { title: "Joint Treasurer", name: "Dr. Abhisek Raj" },
  ];

  const VicePresident = [
    "Dr. Rajendra Chaudhary (Koshi)",
    "Dr. Amresh Karn (Madhesh)",
    "Dr. Narendra Salikhe (Bagmati)",
    "Dr. Kathit Raj Ghimire (Gandaki)",
    "Dr. Narayan Dulal (Lumbini)",
    "Dr. Khim KC (Karnali)",
    "Dr. Pawan K. Shah (Sudurpaschim)",
  ];

  const members = [
    "Dr. Shrish Silwal",
    "Dr. Mayank Acharya",
    "Dr. Mukesh Shah",
    "Dr. Abhisek Tiwari",
    "Dr. Manu Bhattarai",
    "Dr. Ankita Palikhe",
    "Dr. Manish Gurmaita",
    "Dr. Prajwol Gauchan",
    "Dr. Saruta Gurung",
    "Dr. Milan Subedi",
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative text-center pb-8">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
          Past  Executive Committee
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
              Ext. Affairs Coordinator:
            </h3>
            <p className="mt-2 text-gray-700">Dr. Rajesh Shah</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-green-700">
              Editor-in-Chief
            </h3>
            <p className="mt-2 text-gray-700">Dr. Deepak Kumar Yadav</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastEXComm;
