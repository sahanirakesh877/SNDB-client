import React, { useState, useEffect } from "react";
import axios from "axios";
// import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Helmet } from "react-helmet";

// MemberCard Component
const MemberCard: React.FC<{
  title: string;
  phone: number;
  email: string;
  position: string;
  image: string;
}> = ({ title, position, image }) => {
  const imageUrl = `${import.meta.env.VITE_SERVERAPI}/${image.replace(
    /\\/g,
    "/"
  )}`;


  // phone ,email thapne if neccesary

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 shadow-lg max-w-7xl mx-auto rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 border border-red-200">
      <div className="p-2 px-2 text-center flex flex-col items-center mb-2 w-72">
        {/* Circular Image */}
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain object-center "
          />
        </div>

        {/* Name and Profession */}
        <h3 className="text-xl font-bold text-black ">{title}</h3>
        <p className="text-gray-500">{position}</p>

        {/* Divider Line */}
        <div className="border-t-2 border-red-600 w-16 mt-1 mb-4"></div>

        {/* Contact Info */}
        {/* <p className="text-gray-700 flex items-center gap-2">
          <FaPhone /> {phone}
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <FaEnvelope /> {email}
        </p> */}
      </div>
    </div>
  );
};

// Member Component (fetches data from backend)
const Member: React.FC = () => {
  const [profiles, setProfiles] = useState<
    {
      title: string;
      phone: number;
      email: string;
      position: string;
      image: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch member data from backend API
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/getallprofile`
        );
        console.log("Teacher", response.data.profiles);
        setProfiles(response.data.profiles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setError("Failed to load member data");
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Members | Society of Nepal Doctors of Bangladesh</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Discover the members of the Society for Nepalese Doctors from Bangladesh (SNDB). Connect with Nepalese medical professionals who studied in Bangladesh and are contributing to healthcare services in Nepal."
        />

        {/* Keywords for the page */}
        <meta
          name="keywords"
          content="SNDB members, Nepalese doctors, Bangladesh doctors, SNDB medical professionals, healthcare network, medical professionals in Nepal, SNDB community"
        />
      </Helmet>

      <div className=" py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center pb-6">
            <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
              List of Life Members
            </p>
            <span className="block w-40 h-[2px] bg-red-500 mx-auto mt-1"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {profiles.map((member, index) => (
              <MemberCard
                key={index}
                title={member.title}
                phone={member.phone}
                email={member.email}
                position={member.position}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
