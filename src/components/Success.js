import React from "react";
import logo from "../Assets/logo.svg";
import banner from "../Assets/banner.png";
export default function Success() {
  return (
    <div>
      <div className="bg-red-600 w-screen h-screen">
        <div className="bg-red-600 flex flex flex-wrap  flex-col ">
          <img
            className=" scale-75 mb-7 text-[1.5rem] flex justify-center "
            src={logo}
            alt="logo"
          />
          <p className="  text-6xl text-white text-center font-Barlow">
            TEBRIKLER! <br /> PIZZA'NIZ YOLA ÇIKTI!
          </p>
        </div>
        <img
          className=" scale-75 mb-7 text-[1.5rem] flex justify-center "
          src={banner}
          alt="logo"
        />
      </div>
    </div>
  );
}
