import React from "react";
import Myimage from "../assets/IMG_3867.JPG";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img
          className="w-[240px] flex justify-center items-center py-5 rounded-full sm:w-[380px]"
          src={Myimage}
          alt="selfy"
        />
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Hanlun Zheng, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              a passionate web developer with a keen eye for detail and a
              commitment to delivering high-quality, innovative solutions. With
              a foundation in front-end and some back-end technologies, I thrive
              in turning ideas into powerful, interactive user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
