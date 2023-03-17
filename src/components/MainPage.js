import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";

export default function MainPage() {
  return (
    <div className=" bg-[url('../Assets/mvp-banner.png')] h-screen w-screen bg-cover bg-center ">
      <div
        className=" grid  
      place-items-center 
      pt-20"
      >
        <img src={logo} alt="logo" />
      </div>

      <div
        className="grid 
      place-items-center  
      font-Quattrocento 
      text-[3rem] 
      text-white 
      pt-[10vh] 
      pb-10"
      >
        <h1>KOD ACIKTIRIR</h1>
        <h1> PİZZA, DOYURUR</h1>
      </div>

      <div
        className="grid 
      place-items-center"
      >
        <Link to={"/siparis-sayfasi"}>
          <button
            data-test-id="mainpage-btn"
            className=" hover:bg-black hover:text-yellow-tek   font-bold py-2 px-4 rounded-full font-Barlow  bg-yellow-tek w-52"
          >
            ACIKTIM
          </button>
        </Link>
      </div>
    </div>
  );
}
