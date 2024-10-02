import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ViewModel from "../components/ViewModel";

import Rakesh from "/doctor3.jpeg";
import Dinesh from "/doctor1.jpeg";
import Ritesh from "/doctor14.jpeg";
import Nehal from "/doctor19.jpeg";
import Pinky from "/doctor10.jpeg";
import Amrita from "/doctor19.jpeg";
import AbhisekRaj from "/doctor18.jpeg";

// Vice Presidents
import Rajendra from "/doctor20.jpeg";
import Amresh from "/doctor19.jpeg";
import Narendra from "/doctor19.jpeg";
import Kathit from "/doctor19.jpeg";
import Narayan from "/doctor19.jpeg";
import Khim from "/doctor19.jpeg";
import Pawan from "/doctor8.jpeg";

// Members
import Shrish from "/doctor16.jpeg";
import Mayank from "/doctor12.jpeg";
import Mukesh from "/doctor19.jpeg";
import AbhisekTiwari from "/doctor15.jpeg";
import Manu from "/doctor17.jpeg";
import Ankita from "/doctor7.jpeg";
import Manish from "/doctor6.jpeg";
import Prajwol from "/doctor4.jpeg";
import Saruta from "/doctor2.jpeg";
import Milan from "/doctor11.jpeg";

const ExecutiveCommittee: React.FC = () => {
  // const committeeData = [
  //   {
  //     title: "President",
  //     name: "Dr. Rakesh Shah",
  //     phone: 1234567890,
  //     email: "info@rakesh123@gmail.com",
  //     photo:Rakesh,
  //     workingPlace: "Everest  Hospital",
  //     Degree: "MBBs",
  //     specialist: "Surgeon",
  //     Address: "Kalanki",
  //   },
  //   {
  //     title: "Immediate Past President",
  //     name: "Dr. Dinesh Prasad Koirala",
  //     phone: 1234567890,
  //     email: "info@rakesh123@gmail.com",
  //     photo: "/doctor1.jpeg",
  //     workingPlace: "Everest  Hospital",
  //     Degree: "MBBs",
  //     specialist: "Surgeon",
  //     Address: "Kalanki",
  //   },
  //   {
  //     title: "General Secretary",
  //     name: "Dr Ritesh Ghimire",
  //     phone: 1234567890,
  //     email: "info@rakesh123@gmail.com",
  //     photo: "doctor19.jpeg",
  //     workingPlace: "Everest  Hospital",
  //     Degree: "MBBs",
  //     specialist: "Surgeon",
  //     Address: "Kalanki",
  //   },
  //   {
  //     title: "Secretary",
  //     name: "Dr. Nehal Asharaf",
  //     phone: 1234567890,
  //     email: "info@rakesh123@gmail.com",
  //     photo: "doctor19.jpeg",
  //     workingPlace: "Everest  Hospital",
  //     Degree: "MBBs",
  //     specialist: "Surgeon",
  //     Address: "Kalanki",
  //   },
  //   {
  //     title: "Joint Secretary",
  //     name: "Dr. Pinky Shah",
  //     phone: 1234567890,
  //     email: "info@rakesh123@gmail.com",
  //     photo: "doctor10.jpeg",
  //     workingPlace: "Everest  Hospital",
  //     Degree: "MBBs",
  //     specialist: "Surgeon",
  //     Address: "Kalanki",
  //   },
  //   {
  //     title: "Treasurer",
  //     name: "Dr. Amrita Shrestha",
  //     phone: 1234567890,
  //     email: "info@rakesh123@gmail.com",
  //     photo: "doctor19.jpeg",
  //     workingPlace: "Everest  Hospital",
  //     Degree: "MBBs",
  //     specialist: "Surgeon",
  //     Address: "Kalanki",
  //   },
  //   {
  //     title: "Joint Treasurer",
  //     name: "Dr. Abhisek Raj",
  //     phone: 1234567890,
  //     email: "info@rakesh123@gmail.com",
  //     photo: "doctor18.jpeg",
  //     workingPlace: "Everest  Hospital",
  //     Degree: "MBBs",
  //     specialist: "Surgeon",
  //     Address: "Kalanki",
  //   },
  // ];

  const committeeData = [
    {
      title: "President",
      name: "Dr. Rakesh Shah",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Rakesh, // Use imported image
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      title: "Immediate Past President",
      name: "Dr. Dinesh Prasad Koirala",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Dinesh, // Use imported image
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      title: "General Secretary",
      name: "Dr Ritesh Ghimire",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Ritesh, // Use imported image
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      title: "Secretary",
      name: "Dr. Nehal Asharaf",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Nehal, // Use imported image
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      title: "Joint Secretary",
      name: "Dr. Pinky Shah",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Pinky, // Use imported image
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      title: "Treasurer",
      name: "Dr. Amrita Shrestha",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Amrita, // Use imported image
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      title: "Joint Treasurer",
      name: "Dr. Abhisek Raj",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: AbhisekRaj, // Use imported image
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
  ];

  const VicePresident = [
    {
      name: "Dr. Rajendra Chaudhary (Koshi)",
      title: "Vice-President",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Rajendra,
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Amresh Karn (Madhesh)",
      title: "Vice-President",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Amresh,
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Narendra Salikhe (Bagmati)",
      title: "Vice-President",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Narendra,
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Kathit Raj Ghimire (Gandaki)",
      title: "Vice-President",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Kathit,
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Narayan Dulal (Lumbini)",
      title: "Vice-President",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Narayan,
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Khim KC (Karnali)",
      title: "Vice-President",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Khim,
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Pawan K. Shah (Sudurpaschim)",
      title: "Vice-President",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Pawan,
      workingPlace: "Everest Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
  ];

  const members = [
    {
      name: "Dr. Shrish Silwal",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Shrish,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Mayank Acharya",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Mayank,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Mukesh Shah",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Mukesh,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Abhisek Tiwari",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: AbhisekTiwari,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Manu Bhattarai",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Manu,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Ankita Palikhe",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Ankita,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Manish Gurmaita",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Manish,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Prajwol Gauchan",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Prajwol,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Saruta Gurung",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Saruta,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
    {
      name: "Dr. Milan Subedi",
      title: "Members",
      phone: 1234567890,
      email: "info@rakesh123@gmail.com",
      photo: Milan,
      workingPlace: "Everest  Hospital",
      Degree: "MBBs",
      specialist: "Surgeon",
      Address: "Kalanki",
    },
  ];

  // State to handle selected person
  const [selectedPerson, setSelectedPerson] = useState<{
    title: string;
    name: string;
    phone: number;
    email: string;
    photo: string;
    workingPlace: string;
    Degree: string;
    specialist: string;
    Address: string;
  } | null>(null);
  const handleItemClick = (person: {
    title: string;
    name: string;
    phone: number;
    email: string;
    photo: string;
    workingPlace: string;
    Degree: string;
    specialist: string;
    Address: string;
  }) => {
    setSelectedPerson(person);
  };

  return (
    <>
      <Helmet>
        <title>
          Executive Committee | Society of Nepal Doctors of Bangladesh
        </title>
        <meta
          name="description"
          content="Meet the Executive Committee of the Society for Nepalese Doctors from Bangladesh (SNDB). Learn about the leadership team dedicated to improving healthcare services and supporting Nepalese doctors who studied in Bangladesh."
        />
        <meta
          name="keywords"
          content="SNDB Executive Committee, SNDB leadership, Nepalese doctors, Bangladesh doctors, healthcare organization leadership, SNDB committee members, healthcare in Nepal"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative text-center pb-8">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            Executive Committee
          </p>
          <span className="block w-80 h-[2px] bg-red-500 mx-auto mt-1"></span>
        </div>

        {/* Highlighted Executive Positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {committeeData.slice(0, 2).map((person, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-200 to-green-300 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => handleItemClick(person)}
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
              onClick={() => handleItemClick(vp)}
            >
              <p className="text-gray-800 font-medium">{vp.title}</p>
              <p className="text-gray-800 font-medium">{vp.name}</p>
            </li>
          ))}
        </ul>

        {/* Highlighted Executive Positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {committeeData.slice(2).map((person, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-100 to-green-200 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => handleItemClick(person)}
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
          {members.map((person, index) => (
            <li
              key={index}
              className="bg-blue-50 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() => handleItemClick(person)}
            >
              <p className="text-gray-800 font-medium">{person.title}</p>
              <p className="text-gray-800 font-medium">{person.name}</p>
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

      {/* Render ViewModel with selected person */}
      {selectedPerson && (
        <ViewModel
          title={selectedPerson.title}
          name={selectedPerson.name}
          phone={selectedPerson.phone}
          email={selectedPerson.email}
          photo={selectedPerson.photo}
          workingPlace={selectedPerson.workingPlace}
          Degree={selectedPerson.Degree}
          specialist={selectedPerson.specialist}
          Address={selectedPerson.Address}
          onClose={() => setSelectedPerson(null)}
        />
      )}
    </>
  );
};

export default ExecutiveCommittee;
