import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Connect via Email",
    description: "Email me for any opportunity or queries.",
    details: "isainger29@gmail.com",
  },
  {
    icon: "BiWorld",
    heading: "Contact us",
    description: "Fill in the contact form and I'll be in touch.",
  },
  {
    icon: "IoCall",
    heading: "Call Me",
    description: "Call me for any opportunity or queries.",
    details: "+91 8860259264",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex lg:flex-col flex-col sm:flex-row md:gap-6 gap-4 p-2 rounded-xl bg-[#101630] md:p-4 lg:p-6 lg:w-2/5 h-fit w-full mx-auto">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
