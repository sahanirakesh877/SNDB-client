

import React from "react";
import { ImCross } from "react-icons/im";

interface ViewModelProps {
  title: string;
  name: string;
  phone?: number;
  email?: string;
  photo?: string;
  workingPlace?: string;
  Degree?: string;
  specialist?: string;
  Address?: string;
  onClose: () => void;
}

const ViewModel: React.FC<ViewModelProps> = ({
  title,
  name,
  phone,
  email,
  photo,
  workingPlace,
  Degree,
  specialist,
  Address,
  onClose,
}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
        <div className="bg-sky-100 p-8 rounded-lg shadow-2xl max-w-xl w-full relative mx-4" >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-red-600 hover:text-red-900 transition duration-200 border p-2 border-green-500 rounded-full"
            onClick={onClose}
          >
            <ImCross size={20} />
          </button>

          {/* Profile section */}
          <div className="flex items-center mb-6 ">
            {photo && (
              <img
                src={photo}
                alt={name}
                className="w-40 h-40 rounded-full border-2 border-green-600 shadow-lg mr-6 object-contain transform transition-transform duration-300 hover:scale-110"
                />
            )}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <p className="text-green-700 text-lg font-semibold">{name}</p>
            </div>
          </div>

          {/* Details section */}
          <div className="space-y-2 text-gray-700">
            {phone && (
              <p>
                <strong className="font-semibold">Phone:</strong> {phone}
              </p>
            )}
            {email && (
              <p>
                <strong className="font-semibold">Email:</strong> {email}
              </p>
            )}
            {workingPlace && (
              <p>
                <strong className="font-semibold">Working Place:</strong>{" "}
                {workingPlace}
              </p>
            )}
            {Degree && (
              <p>
                <strong className="font-semibold">Degree:</strong> {Degree}
              </p>
            )}
            {specialist && (
              <p>
                <strong className="font-semibold">Specialist:</strong>{" "}
                {specialist}
              </p>
            )}
            {Address && (
              <p>
                <strong className="font-semibold">Address:</strong> {Address}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewModel;
