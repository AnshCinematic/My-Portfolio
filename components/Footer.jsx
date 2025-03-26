import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        
        {/* Left Section - Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> anshsrivasrava2004@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt /> Bhubaneshwar, India
          </p>
        </div>

        {/* Middle Section - Social Links */}
        <div>
          <h2 className="text-xl font-semibold">Follow Me</h2>
          <div className="flex gap-4 mt-3 text-lg">
            <a href="https://www.linkedin.com/in/ansh-srivastava-311a16247/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://github.com/AnshCinematic" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
          </div>
        </div>

        {/* Right Section - Copyright */}
        <div>
          <h2 className="text-xl font-semibold">© {new Date().getFullYear()} Ansh Srivastava</h2>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
