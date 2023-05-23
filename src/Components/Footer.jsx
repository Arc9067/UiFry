import React, { useContext } from "react";
import useTheme from "../Data/utils/ThemeContext";
import Logo from "../assets/logo.svg";
import Messages from "../assets/message.svg";
import Phone from "../assets/call.svg";

const Footer = () => {
  const Theme = useContext(useTheme);

  return (
    <footer
      className={`py-[30px] w-full ${Theme} bg-red-00 justify-between flex-col md:flex-row`}
    >
      <div className="container flex justify-between gap-x-28 gap-y-12 flex-col md:flex-row">
        <div className="flex  flex-col gap-4 md:w-[25rem] order-2 md:order-1">
          <img src={Logo} alt="" className="w-28" />
          <a href="" className="flex items-center gap-3 text-xl font-medium">
            <img src={Messages} alt="" />
            Help@Frybix.com
          </a>
          <a href="" className="flex items-center gap-3 text-xl font-medium">
            <img src={Phone} alt="" />
            +1 234 456 678 89
          </a>
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-2 justify-between gap-y-12 md:order-2">
          <ul className=" flex flex-col gap-3 capitalize font-medium">
            <li className="text-2xl capitalize font-medium">links</li>
            <li>home</li>
            <li>about us</li>
            <li>bookings</li>
            <li>blog</li>
          </ul>
          <ul className=" flex flex-col gap-3 capitalize text-right md:text-left font-medium">
            <li className="text-2xl capitalize font-medium">legal</li>
            <li>terms of use</li>
            <li>privacy policy</li>
            <li>cookie policy</li>
          </ul>
          <ul className=" flex flex-col gap-3 capitalize font-medium">
            <li className="text-2xl capitalize font-medium">product</li>
            <li>take tour</li>
            <li>live chat</li>
            <li>reveiws</li>
          </ul>
          <ul className=" flex flex-col gap-3 capitalize text-right md:text-left font-medium">
            <li className="text-2xl capitalize font-medium">Newsletter</li>
            <li>Stay up to date</li>
            <div className="hidden md:flex">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your email"
                className="focus:outline-none  border-none outline-none focus:border-none text-black bg-white max-w-[8rem]"
              />
              <button
                type="submit"
                className="py-3 px-7 capitalize font-medium rounded-sm bg-black  text-white"
              >
                submit
              </button>
            </div>
          </ul>
        </div>
      </div>
      <footer className="w-full mx-auto h-5 container p-[20px] flex justify-center items-center mt-10">
        <p className="font-medium capitalize">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
