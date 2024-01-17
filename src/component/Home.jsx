import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className=" h-full max-w-[1000px] px-8 flex-col flex justify-center ">
        <p className="text-pink-600">Hi my name is </p>
        <h1 className="text-4xl font-bold text-[#8892b0]">Hanlun Zheng</h1>
        <h2 className="text-4xl font-bold text-[#8892b0]">
          I'm looking for a Front End Developer full time position.
        </h2>
        <p className="py-4 text-2xl text-[#8892b0]">
          I am focusing on building responsive full-stack web application
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Project
            </Link>
            <HiArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
