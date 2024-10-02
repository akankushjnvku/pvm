import React from "react";
import Photo from "../../assets/profile.jpg";

import {
  FaGoogleScholar,
  FaBookAtlas,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-lg h-full">
      {/* Profile Picture */}
      <div className="mb-5">
        <img
          src={Photo}
          alt="profile picture"
          width="200px"
          className="rounded-md object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-semibold mb-4 text-left px-2">
        Prahlada V Mittal
      </h2>

      {/* Links */}
      <div className="space-y-1 px-2">
      <a
          href="https://www.linkedin.com/in/prahlada-mittal"
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-700"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        
        <a
          href="mailto: prahlada_vm@es.iitr.ac.in"
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-red-500"
        >
          <MdEmail />
          <span>Email</span>
        </a>

        <a
          href="tel:+91 7217456990"
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-green-600"
        >
          <IoMdContact />
          <span>Contact</span>
        </a>

        <a
          href="https://github.com/prahlad-mittal"
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-rose-800"
        >
          <FaGithub />
          <span>Github</span>
        </a>

        <a
          href="https://orcid.org/0000-0002-9799-0607"
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-yellow-500"
        >
          <FaBookAtlas />
          <span>ORCID</span>
        </a>

        <a
          href="https://scholar.google.com/citations?hl=en&user=VaoQmPUAAAAJ"
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <FaGoogleScholar />
          <span>Google Scholar</span>
        </a>
        
      
       
       
        
      </div>
    </div>
  );
};

export default Profile;
