import React from "react";
import { iconData } from "../data/stackData";

const SkillsSet = () => {
  return (
    <div className="relative">
      <div className=" w-11/12  mx-auto text-white max-w-maxContent font-mullish">
        <div className="xl:w-[80%] w-full mx-auto">
          <div className="flex flex-col gap-4 w-full  mx-auto px-5 pb-10 pt-10 lg:mb-40">
            <h1 className=" text-center font-bold md:text-7xl text-5xl uppercase mb-10">
              Skills Set
            </h1>
            <div className="w-full flex lg:flex-row flex-col justify-between gap-5">
              <div className=" xl:w-2/5 lg:w-1/2 flex flex-col gap-6">
                <div>
                  <h1 className=" xl:text-7xl lg:text-6xl text-3xl flex lg:flex-col">
                    Me and <span className="ml-2 lg:ml-0">My Skill Set</span>
                  </h1>
                </div>
                <div className="flex flex-col xl:gap-4 gap-3 text-1xl">
                  <p>
                    Hi Everyone! My name is Ishank Sainger. I am an aspiring
                    <span className="skillHighlight"> Software Developer</span> and a <span className="skillHighlight"> MERN Stack </span>enthusiast, eager to
                    embark on an exciting journey into the world of software
                    development after successful completion of<span className="skillHighlight"> IBM's Full Stack
                    Web Developer course</span> .
                  </p>
                  <p>
                    I am proficient in MERN (MongoDB, Express.js, React,
                    Node.js) stack with good grasp of Java, HTML, CSS, and their
                    applications in Web Development. I am capable of designing
                    and developing Web applications and their solutions. Using
                    these skills I have developed <span className="skillHighlight"> It Student-An Ed-Tech
                    Platform, Fitness World and other projects</span> which you can
                    have a look in the section above.I excel in solving complex
                    coding challenges, with a particular passion for the finer
                    aspects of data structures(solved 300+ questions on
                    LeetCode, GFG and other coding platforms).
                  </p>
                  <p>
                    I like to stay updated with the latest trends and best
                    practices in Software Development. Always eager to explore
                    new technologies and contribute to innovative projects. I am
                    ready to leverage my skills and knowledge to contribute to
                    dynamic development teams.
                  </p>
                </div>
              </div>
              <div className="grid xl:grid-cols-3 grid-cols-4 grid-rows-3  xl:grid-rows-4 xl:gap-8 lg:gap-6 xl:w-2/5 lg:w-1/2 place-items-center">
                {iconData.map((icon, index) => (
                  <img key={index} src={icon.src} alt="" className="md:w-[90px] w-[60px]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#bebcbc] opacity-50 text-[12rem] lg:flex items-end justify-end mr-16 absolute -bottom-[218px] left-0 hidden">
        Skills
      </div>
    </div>
  );
};

export default SkillsSet;
