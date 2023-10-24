import React from "react";
import ProjectArea from "./ProjectArea";

const Portfolio = () => {
  return (
    <div className="bg-white relative">
      <div className=" w-11/12  lg:mt-40 mx-auto text-white max-w-maxContent font-mullish">
        <div className="xl:w-[80%] lg:w-[90%] mx-auto w-full">
          <div className="flex flex-col gap-4 w-full">
            <h1 className=" text-center font-bold md:text-7xl text-5xl uppercase mb-10 text-[#24316b] mt-12">
              Projects
            </h1>
            <div>
              <ProjectArea />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#E7E7E7] text-[12rem] lg:flex items-end justify-end mr-16 absolute -bottom-[30px] right-0 hidden">
        Projects
      </div>
    </div>
  );
};

export default Portfolio;
