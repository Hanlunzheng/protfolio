import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import GoogleCloud from "../assets/google-cloud-icon-1.png"

const Skill = () => {
  return (
    <div name="skill" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div>
        <div>
          <p className="text-4xl px-2 font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">There are the tools I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto" src={ReactImg} alt="1" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto" src={HTML} alt="1" />
            <p className="my-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto" src={CSS} alt="1" />
            <p className="my-4">Css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto" src={JavaScript} alt="1" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto mt-3 " src={GoogleCloud} alt="1" />
            <p className="my-4">GoogleCloud</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto" src={Node} alt="1" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto" src={GitHub} alt="1" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[80px] mx-auto" src={FireBase} alt="1" />
            <p className="my-4">FireBase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
