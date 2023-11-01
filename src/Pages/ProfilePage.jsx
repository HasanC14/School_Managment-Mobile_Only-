import { useState } from "react";
import Header from "./Header";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState("/Assets/profile.png");

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setProfileImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Header title={"Profile"}></Header>
      <div className="max-w-md mx-auto p-4  rounded-md bg-green-100 flex flex-col justify-center items-center min-h-screen">
        <div className="bg-white rounded-md px-12 py-4 mb-4">
          <div className="flex justify-center items-center relative mb-2 -mt-16">
            <div className="relative w-32 h-32 overflow-hidden rounded-full">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <label
                htmlFor="imageUpload"
                className="absolute bottom-0 right-0 p-2 bg-green-500 rounded-full cursor-pointer transform translate-x-1/2 translate-y-1/2 z-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 100-18 9 9 0 000 18zm-1-8h2v-2a1 1 0 012 0v2h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleChangeImage}
            />
          </div>
          <div className="text-center my-3">
            <p className="text-gray-700 font-bold text-2xl">
              Md. Hasan Chowdhury
            </p>
            <p className="text-gray-700">Batch:201</p>
          </div>
        </div>

        {/* Other Info */}
        <div className="grid grid-cols-3 gap-2 text-xl space-y-4">
          <div className="flex space-x-2 mt-4">
            <p className="text-gray-700 font-bold">CGPA:</p>
            <p className="text-gray-700">3.9</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-gray-700 font-bold">Semester:</p>
            <p className="text-gray-700">6</p>
          </div>
          <div className="flex space-x-2 col-span-3">
            <p className="text-gray-700 font-bold ">Address:</p>
            <p className="text-gray-700">35, Srizoni Sorok, Dhaka</p>
          </div>
          <div className="flex space-x-2 col-span-1">
            <p className="text-gray-700 font-bold">Program:</p>
            <p className="text-gray-700">CSE(Regular)</p>
          </div>
          <div className="flex space-x-2 col-span-3">
            <p className="text-gray-700 font-bold">Student ID:</p>
            <p className="text-gray-700">201002134</p>
          </div>
          <div className="flex space-x-2 col-span-2">
            <p className="text-gray-700 font-bold">Email:</p>
            <p className="text-gray-700">dev.hasanchowdhury@gmail.com</p>
          </div>
          <div className="flex space-x-2 col-span-3">
            <p className="text-gray-700 font-bold">Phone Number:</p>
            <p className="text-gray-700">01839934433</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
