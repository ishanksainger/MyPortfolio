import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import CountryCode from "../data/countrycode.json";
import ActiveBtn from "./ActiveBtn";
import SuccessModal from "./SuccessModal";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [confirmationModal, setConfirmationModal] = useState(null);

  const sendEmail = (data) => {
    emailjs
      .send("service_kdkhbfq", "template_10s16ll", data, "59DTAQwrL29WjSEza")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Email could not be sent:", error);
        }
      );
  };

  const onCloseModal = () => {
    setConfirmationModal(null);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        name: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit = (formData) => {
    sendEmail({
      to_name: "Ishank Sainger", // Replace with the recipient's name
      from_name: formData.name, // Use the form data for the sender's name
      message: formData.message, // Use the form data for the message
      phoneNo: `${formData.countryCode} - ${formData.phoneNo}`,
      email: formData.email,
    });
    setConfirmationModal({
      text1: 'Your Message has been Successfully Sent',
      text2: "I'll be in touch with you shortly!",
      btn1Text: 'Thank You',
      btn2Text: '',
      btn1Handler: () => setConfirmationModal(null),
    })
  };

  return (
    <form
      className="bg-[#101630] p-10 rounded-md shadow-md lg:w-1/2 w-full mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-5">
        <label htmlFor="name" className="text-whie font-semibold text-2xl">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="form-input mb-4 rounded-lg px-4 py-3 text-black"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-600 text-sm">Please enter your name.</span>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <label htmlFor="email" className="text-whie font-semibold text-2xl">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-input mb-4 rounded-lg px-4 py-3 text-black"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-600 text-sm">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <label htmlFor="phoneNo" className="text-whie font-semibold text-2xl">
          Phone Number
        </label>
        <div className="flex gap-2">
          <select
            name="countryCode"
            id="countryCode"
            className="form-select rounded-lg w-36 mb-4 px-4 py-3 text-black"
            {...register("countryCode", { required: true })}
          >
            {CountryCode.map((country, index) => (
              <option key={index} value={country.code}>
                {country.code} - {country.country}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phoneNo"
            id="phoneNo"
            placeholder="12345 67890"
            className="form-input mb-4 rounded-lg px-4 py-3 text-black w-full"
            {...register("phoneNo", {
              required: {
                value: true,
                message: "Please enter your Phone Number.",
              },
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
            })}
          />
        </div>
        {errors.phoneNo && (
          <span className="text-red-600 text-sm">{errors.phoneNo.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <label htmlFor="message" className="text-whie font-semibold text-2xl">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="7"
          placeholder="Enter your message here"
          className="form-textarea rounded-lg  mb-8 px-4 py-3 text-black"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-red-600 text-sm">
            Please enter your Message.
          </span>
        )}
      </div>

      <ActiveBtn
        type="submit"
        btnText="Send Message"
        activeClass="activeClass"
        className="py-2 px-4 rounded"
      />
    {confirmationModal && <SuccessModal modalData={confirmationModal} onClose={onCloseModal}/>}
    </form>
  );
};

export default ContactUsForm;
