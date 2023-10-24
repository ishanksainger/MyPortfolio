import React from "react";
import ContactUsForm from "./ContactUsForm";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <div className="bg-white relative h-fit">
      <div className=" w-11/12  lg:mt-20 mx-auto text-white max-w-maxContent font-mullish">
        <div className="lg:w-[80%] mx-auto">
          <div className="flex flex-col gap-4 w-full">
            <h1 className=" text-center font-bold md:text-7xl text-5xl uppercase mb-10 text-[#24316b] mt-12">
              Contact Us
            </h1>
            <div className="flex justify-between lg:gap-0 gap-4 lg:flex-row flex-col xl:mb-72 lg:mb-60 mb-20  ">
              <ContactDetails />

              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#E7E7E7] text-[12rem]  lg:block hidden max-h-[14.5rem]  mr-16 absolute bottom-0 right-0">
        Contact
      </div>
    </div>
  );
};

export default Contact;
