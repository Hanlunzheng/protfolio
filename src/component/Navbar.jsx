import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";
import Logo from "../assets/logo.png";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <span className="text-pink-300 text-xl">Hanlun</span>
      </div>
      {/* {main menu} */}
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* {mobile menu} */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li> */}
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-green-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              FaceBook
              <FaFacebook size={30} />
            </a>
          </li> */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-gray-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Hanlunzheng?tab=repositories"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-yellow-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume
              <AiOutlineMail size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
