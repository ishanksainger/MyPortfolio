import React, { useState } from "react";
import Logo from "../assets/logo/Frame 2.png";
import ActiveBtn from "./ActiveBtn";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = (btnText) => {
    setActiveButton(btnText);
    scrollToSection(btnText.toLowerCase());
    // Close the menu when a menu item is clicked
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="w-full xl:w-10/12 lg:w-11/12 flex justify-between items-center mx-auto text-white text-3xl p-4 lg:p-10">
        <div className="flex items-center md:gap-2 gap-4 lg:gap-3">
          <img src={Logo} alt="" />
          <p className="lg:text-4xl text-3xl xl:text-5xl">Ishank Sainger</p>
        </div>
        <div className="md:flex hidden gap-10 items-center">
          <ul className="flex xl:gap-10 lg:gap-5 gap-4 p-4 items-center">
            <li onClick={() => handleButtonClick("Home")}>
              <ActiveBtn
                btnText="Home"
                activeClass={activeButton === "Home" ? "activeClass" : ""}
              />
            </li>
            <li onClick={() => handleButtonClick("Portfolio")}>
              <ActiveBtn
                btnText="Portfolio"
                activeClass={activeButton === "Portfolio" ? "activeClass" : ""}
              />
            </li>
            <li onClick={() => handleButtonClick("Skills")}>
              <ActiveBtn
                btnText="Skills"
                activeClass={activeButton === "Skills" ? "activeClass" : ""}
              />
            </li>
            <li onClick={() => handleButtonClick("Contact")}>
              <ActiveBtn
                btnText="Contact"
                activeClass={activeButton === "Contact" ? "activeClass" : ""}
              />
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl text-white p-4">
            ☰
          </button>
        </div>
      </div>
      {menuOpen && <div
        className={`md:hidden fixed z-50 top-23 left-0 right-0 py-2 transform bg-slate-800 ${
          menuOpen ? "mobile-menu-animation" : ""
        } transition-transform duration-300 `}
      >
        <ul className="flex flex-col gap-4 p-4 text-white items-center">
          <li onClick={() => handleButtonClick("Home")}>
            <ActiveBtn
              btnText="Home"
              activeClass={activeButton === "Home" ? "activeClass" : ""}
            />
          </li>
          <li onClick={() => handleButtonClick("Portfolio")}>
            <ActiveBtn
              btnText="Portfolio"
              activeClass={activeButton === "Portfolio" ? "activeClass" : ""}
            />
          </li>
          <li onClick={() => handleButtonClick("Skills")}>
            <ActiveBtn
              btnText="Skills"
              activeClass={activeButton === "Skills" ? "activeClass" : ""}
            />
          </li>
          <li onClick={() => handleButtonClick("Contact")}>
            <ActiveBtn
              btnText="Contact"
              activeClass={activeButton === "Contact" ? "activeClass" : ""}
            />
          </li>
        </ul>
      </div>
      }
    </div>
  );
};

export default NavBar;
