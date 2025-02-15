"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Fix: Use next/navigation for App Router
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Group from "../../public/Group.png";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

const StringContent = [
  { Content: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." },
  { Content: "Difficult roads often lead to beautiful destinations." },
  { Content: "Do what you can, with what you have, where you are." },
  { Content: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
  { Content: "Happiness is not something ready-made. It comes from your own actions." },
  { Content: "Every day is a new beginning. Take a deep breath, smile, and start again." },
  { Content: "Dream big, work hard, stay focused, and surround yourself with good people." },
  { Content: "Your only limit is your mind." },
  { Content: "Small steps in the right direction can turn out to be the biggest step of your life." },
  { Content: "Don’t watch the clock; do what it does. Keep going." }
];


export const Main = () => {
  const router = useRouter();
  const [userName, setuserName] = useState("");

 
 
  
  const ChangeHandlefn = (e) => {
    
    setuserName(e.target.value);
  };

  const SendDatafn = () => {
    if (!userName.trim()) return; // Prevent empty input
  
    const TotStr = StringContent.length;
    const RandomNumber = Math.floor(Math.random() * TotStr);
  
    const FinalData = {
      UserName: userName,
      Content: StringContent[RandomNumber].Content,
    };
  
    localStorage.setItem("message", JSON.stringify(FinalData));
    router.push("/ImageSharing");

  };

  return (
    <div className="min-h-screen flex flex-col items-center text-center font-sans bg">
      <div className="flex flex-col items-center bg-gradient-to-br from-yellowBackground to-yellowSecondary w-full py-4 rounded-t-3xl">
        <NavBar />

        {/* Header Section */}
        <h1 className="text-black text-3xl md:text-[40px] font-black mt-4 font-myFont">
          See what awaits you <span className="block mt-2"> in 2025</span>
        </h1>

        {/* Input Section */}
        <div className="mt-8 relative w-80  mb-32 md:mb-40">
          <input
            type="text"
            placeholder="Enter your Name to Generate"
            className="w-full px-4 py-4 rounded-full border border-gray-500 focus:outline-none text-gray-800 bg-gray-200 opacity-80 font-bold text-center placeholder:text-md placeholder:text-left placeholder:pl-5"
            value={userName}
            onChange={ChangeHandlefn}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-2 text-yellow-400 rounded-full font-medium bg-black"
            onClick={SendDatafn}
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "red",
          clipPath: "ellipse(60% 100% at 50% 100%)",
          
         
        }}
      ></div>
      <div className="flex flex-col items-center absolute top-[750px] md:top-[800px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[400px]  z-20 rounded-lg">
        <Image src={Group} alt="Mid Image" className="rounded-3xl w-[350px] md:w-[400px]" />
        <div className="relative -top-72">
        <div className="text-white  bg-gradient-to-br from-yellowBackground to-yellowSecondary p-2 w-[330px] rounded-3xl border-white border-2">
          <h1 className="text-2xl font-myFontMountain p-2 px-10 py-3 mb-5 bg-emerald-950 rounded-full">YOUR NAME HERE</h1>
          <p className="text text-black font-myFont py-8">Enter your name below to see what awaits you in 2025</p>
        </div>
        <Footer/>
        </div>

      </div>
      
    </div>
  );
};
