import { FaEnvelope, FaPhone } from "react-icons/fa";

const membersData = [
  {
    name: "Dr. John Doe",
    phone: "+1 234 567 890",
    email: "johndoe@example.com",
    profession: "Cardiologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  {
    name: "Dr. Rakesh",
    phone: "+1 987 654 321",
    email: "janesmith@example.com",
    profession: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  {
    name: "Dr. Prakash",
    phone: "+1 987 654 321",
    email: "janesmith@example.com",
    profession: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  {
    name: "Dr. Jane Smith",
    phone: "+1 987 654 321",
    email: "janesmith@example.com",
    profession: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  {
    name: "Dr. Udit",
    phone: "+1 987 654 321",
    email: "janesmith@example.com",
    profession: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  {
    name: "Dr. Jane Smith",
    phone: "+1 987 654 321",
    email: "janesmith@example.com",
    profession: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  {
    name: "Dr. John Doe",
    phone: "+1 234 567 890",
    email: "johndoe@example.com",
    profession: "Cardiologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  {
    name: "Dr. Rakesh",
    phone: "+1 987 654 321",
    email: "janesmith@example.com",
    profession: "Neurologist",
    image:
      "https://img.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg?t=st=1727357493~exp=1727361093~hmac=b1dd313f54c1182a7ad2a2103fcbcb9a4919edc2837adc239c520363fb7a9f71&w=826",
  },
  // Add more members as needed
];

const MemberCard: React.FC<{
  name: string;
  phone: string;
  email: string;
  profession: string;
  image: string;
}> = ({ name, phone, email, profession, image }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-300 to-indigo-500 shadow-lg max-w-7xl mx-auto rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="p-2 px-6 flex flex-col items-center mb-2">
          {/* Circular Image */}
          <div className="w-36 h-36  rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Profession */}
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-gray-200">{profession}</p>

          {/* Divider Line */}
          <div className="border-t-2 border-white w-16 mt-1 mb-4 "></div>

          {/* Contact Info */}
          <p className="text-white  flex items-center gap-2  ">
           <FaPhone/> {phone}
          </p>
          <p className="text-white text-start flex items-center gap-2">
          <FaEnvelope/>{email}
          </p>
        </div>
      </div>
    </>
  );
};

const Member: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative text-center pb-6">
          <p className="text-gray-500 uppercase relative inline-block text-4xl font-semibold">
            List of Members
          </p>
          <span className="block w-40 h-[2px] bg-red-500 mx-auto mt-1"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {membersData.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              phone={member.phone}
              email={member.email}
              profession={member.profession}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
