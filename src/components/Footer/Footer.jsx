import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Project name */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <p className="text-sm text-gray-400">Crafting Spaces, Building Legacies</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href="#" className="hover:text-gray-400 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between mt-8 border-t border-gray-700 pt-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="#about" className="hover:text-gray-400 text-sm transition">About</a>
            <a href="#projects" className="hover:text-gray-400 text-sm transition">Projects</a>
            <a href="#contact" className="hover:text-gray-400 text-sm transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
