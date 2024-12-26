import React from "react";
import Email from "../assets/images/Email.svg";
import Map from "../assets/images/Map.svg";

const Contact = () => {
  const openNewTab = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@Scientistry.in"
    );
  };

  return (
    <div className="flex items-center justify-center h-[40rem] max-[580px]:h-[50rem]">
      <div className="flex flex-col px-10 gap-10 font-medium font-mono">
        <div className="flex gap-2.5 items-center">
          <img src={Map} alt="map" style={{ width: "30px", height: "50px" }} />
          <div className="flex flex-col">
            <span>FORMUCHEM INNOVATION LAB Office 320,</span>
            <span>South Bopal Trade Center,</span>
            <span>South Bopal</span>
            <span>Gujarat, 380058</span>
          </div>
        </div>
        {/* <div className="flex flex-col">
          <span>+91 9726072525</span>
          <span>Every Day 9AM To 6PM</span>
        </div> */}
        <div className="flex gap-2.5 items-center">
          <img src={Email} alt="email" />
          <div className="flex flex-col">
            <span className="cursor-pointer" onClick={openNewTab}>
              contact@Scientistry.in
            </span>
            <span>Email Us Your Query</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
