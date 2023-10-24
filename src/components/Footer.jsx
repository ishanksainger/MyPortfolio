import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"; // Use the specific icon you want
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the envelope (email) icon

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className=" font-mullish p-4">
      <div className="footer-wrapper flex md:flex-row flex-col md:gap-0 gap-3 justify-evenly items-center">
        <div className="text-[#535c87] font-normal text-7xl xl:flex hidden">
          Ishank Sainger
        </div>
        <div className="flex text-white md:text-2xl lg:text-3xl gap-8">
          <div>
            <a href="#projects" onClick={() => scrollToSection("portfolio")}>
              Projects
            </a>
          </div>
          <div>
            <a href="#skills" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </div>
          <div>
            <a href="#contactme" onClick={() => scrollToSection("contact me")}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex xl:gap-7 gap-6 text-white cursor-pointer">
          <a href="https://www.linkedin.com/in/ishank-sainger-904575104/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="icon text-3xl md:text-4xl hover:text-red-400 cursor-pointer"/>
            </a>
            <a href="https://github.com/ishanksainger" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="icon text-3xl md:text-4xl hover:text-red-400"
          />
          </a>
          <a href="https://twitter.com/isainger29" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faTwitter}
            className="icon text-3xl md:text-4xl hover:text-red-400"
          />
          </a>
          <a href="https://www.instagram.com/ishanksainger/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            className="icon text-3xl md:text-4xl hover:text-red-400"
          />
          </a>
          <a href="mailto:isainger29@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon text-3xl md:text-4xl hover:text-red-400"
          />
          </a>
          <a href="https://www.facebook.com/ishank.sainger" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            className="icon text-3xl md:text-4xl hover:text-red-400"
          />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
