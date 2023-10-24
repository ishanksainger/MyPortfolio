import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import ActiveBtn from "../components/ActiveBtn";
import Portfolio from "../components/Portfolio";
import SkillsSet from "../components/SkillsSet";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SuccessModal from "../components/SuccessModal";

const Home = () => {
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    var typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Coder",
      ],
      loop: true, // This setting ensures the animation loops infinitely
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Clean up the Typed instance when the component unmounts
    return () => {
      typeData.destroy();
    };
  }, []);

  const onCloseModal = () => {
    setConfirmationModal(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resumeChoice = () => {
    setConfirmationModal({
      text1: "Please select one.",
      text2: "",
      btn1Text: "View",
      btn2Text: "Download",
      btn1Handler: () => viewResume(),
      btn2Handler: () => downloadResume(),
    });
  };
  const viewResume = () => {
    const resumeURL = `${process.env.PUBLIC_URL}/Deedy_CV.pdf`;
    window.open(resumeURL, "_blank");
    setConfirmationModal(null);
  };

  const downloadResume = () => {
    // Construct the URL to  resume file
    const resumeURL = `${process.env.PUBLIC_URL}/Deedy_CV.pdf`;

    // Create a temporary anchor element
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = resumeURL;
    // Set the download attribute with the desired filename
    a.download = "IshankSainger-Resume.pdf";
    // Append the anchor element to the document body
    document.body.appendChild(a);
    // Trigger a click event to start the download
    a.click();
    // Clean up by removing the anchor element
    document.body.removeChild(a);
    setConfirmationModal(null);
  };

  return (
    <div
      className="min-h-screen w-screen overflow-hidden"
      onClick={() => confirmationModal && onCloseModal()}
    >
      <div
        id="home"
        className="w-11/12 mx-auto text-white max-w-maxContent font-mullish relative"
      >
        {/* Two sections of hero */}
        <div className="lg:w-[80%] mx-auto">
          <div className="flex justify-between items-center flex-row">
            {/* content inside first section */}
            <div className="flex lg:mt-10 md:p-10 sm:p-7 p-4  lg:mb-40 flex-col lg:flex-row gap-10 lg:gap-5">
              <div className="lg:w-[50%] w-fit flex flex-col gap-10 justify-center  items-center text-4xl mx-auto order-2 lg:order-1">
                <div className="w-full ">
                  I am a <span className="role text-[#01B7D6]"></span>
                </div>

                <p className=" md:text-justify">
                  I’m a software developer and here is my portfolio website.
                  Here you’ll learn about my journey as a software developer.
                </p>
                {/* buttons */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full md:justify-start">
                  <ActiveBtn
                    btnText="Hire Me"
                    activeClass="activeClass"
                    onClick={() => scrollToSection("contact")}
                  />
                  <ActiveBtn
                    btnText="Resume"
                    activeClass="normal"
                    onClick={resumeChoice}
                  />
                </div>
              </div>
              {/* second image section */}
              <div className="lg:w-1/2 flex justify-end items-center mx-auto mt-10 relative order-1 lg:order-2">
                <img
                  className="w-full lg:h-[400px] md:w-[350px] transform scale-100 group-hover:scale-110 group-hover:grayscale-0 transition-transform duration-500 ease-in-out"
                  src="https://res.cloudinary.com/doiij4hn1/image/upload/v1698055657/ishanksainger/glpyn3eyb1fl079xmxn3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-[#bebcbc] opacity-50 text-[8rem] lg:flex items-end justify-end mr-16 absolute -bottom-[180px] left-0 hidden ">
            Ishank Sainger
          </div>
        </div>
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="skills">
        <SkillsSet />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      {confirmationModal && (
        <SuccessModal modalData={confirmationModal} onClose={onCloseModal} />
      )}
    </div>
  );
};

export default Home;
