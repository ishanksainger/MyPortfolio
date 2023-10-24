import React from "react";
import ActiveBtn from "./ActiveBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"; // Use the specific icon you want

const Card = ({ items }) => {
  const handleBtnClick = () => {
    window.open(items.website, "_blank");
  };

  return (
    <div className=" flex gap-3 justify-between items-center">
      <div
        className={`imageSet relative xl:mb-40 lg:mb-20 mb-10 ${
          items.id % 2 === 0 ? " xl:ml-32" : ""
        }`}
        style={{ backgroundImage: `url(${items.img})` }}
      >
        <div
          className={`project-number absolute text-8xl md:text-9xl xl:text-[200px] font-[600] text-white z-10 hidden ${
            items.id % 2 === 0
              ? "-left-[16px] -top-[22px]"
              : "-right-[19px] -top-[22px]"
          }`}
        >
          0{items.id}
        </div>
        <div
          className={`absolute flex flex-col items-center lg:items-start  gap-4 md:gap-8 xl:mr-[30px] text-white z-10 ${
            items.id % 2 !== 0
              ? "lg:left-[10%]"
              : "lg:left-[10%] xl:right-0 xl:items-end xl:left-auto"
          }  bottom-[15%] p-5 transition-all duration-200 xl:max-w-[60%]`}
        >
          <div className="flex gap-5 flex-wrap xl:max-w-[70%] w-[90%] sm:w-fit transition-all duration-200">
            {items.icons.map((icon, index) => (
              <img src={icon.src} key={index} className=" w-[40px]" alt="" />
            ))}
          </div>
          <h1 className=" sm:text-3xl md:text-5xl leading-10">{items.title}</h1>
          <div className=" w-[90%] text-base italic">{items.text}</div>
          <div className="flex items-center gap-5">
            <ActiveBtn
              btnText="Read More"
              onClick={handleBtnClick}
              activeClass="activeClass"
            />
            <a href={items.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                title="GitHub Link"
                className="icon text-4xl hover:text-red-400"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
