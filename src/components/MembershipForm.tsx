import React, { useState } from "react";

const MembershipForm: React.FC = () => {
  // State for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // State for profile image and payment voucher previews
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [voucherImage, setVoucherImage] = useState<File | null>(null);

  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null
  );
  const [voucherImagePreview, setVoucherImagePreview] = useState<string | null>(
    null
  );

  // Handle profile image upload and preview
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle payment voucher image upload and preview
  const handleVoucherImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVoucherImage(file);
      setVoucherImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log form data to console (replace with API call or other logic)
    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Profile Image:", profileImage);
    console.log("Voucher Image:", voucherImage);

    // You can also add form validation logic here
  };

  return (
    <div className="max-w-lg mx-auto bg-blue-50 shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-red-500">
        Membership Form
      </h2>

      {/* Form Start */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-2">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-2">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Input */}
        <div className="mb-2">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Profile Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="mt-2 "
          />
          {profileImagePreview && (
            <div className="mt-4">
              <img
                src={profileImagePreview}
                alt="Profile Preview"
                className="w-32 h-32 object-contain rounded-full border border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Payment Voucher Upload */}
        <div className="mb-6">
          <label className="block text-gray-700">Payment Voucher</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleVoucherImageChange}
            className="mt-2"
          />
          {voucherImagePreview && (
            <div className="mt-4">
              <img
                src={voucherImagePreview}
                alt="Voucher Preview"
                className="w-32 h-32 object-contain rounded-lg border border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="px-8 py-1 bg-gradient-to-r from-red-500 to-green-500 text-white font-semibold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default MembershipForm;
