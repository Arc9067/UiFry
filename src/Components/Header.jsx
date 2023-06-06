import React from "react";
import logo from "../assets/logo.svg";
import Star2 from "../assets/star2.svg";

const Header = () => {
  return (
    <header className=" w-full py-3 absolute top-0 z-50">
      <nav className="container flex justify-between items-center relative">
        <img
          src={Star2}
          alt=""
          className="absolute logo right-0 md:right-20 top-20"
        />
        <div className="w-full bgred-700 flex items-center gap-x-20">
          <a href="">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <ul className="hidden md:flex  capitalize font-medium gap-x-9 text-xl leading-relaxed">
            <li className="text-primary font-bold ">
              <a href="">home</a>
            </li>
            <li className="  ">
              <a href="">about us</a>
            </li>
            <li className=" ">
              <a href="">pricing</a>
            </li>
            <li className="   ">
              <a href="">features</a>
            </li>
          </ul>
        </div>
        <a
          href=""
          role="button"
          className="btn hero-btn bg-black text-white px-5 py-3 capitalize font-medium leading-relaxed transition hover:bg-primary rounded"
        >
          download
        </a>
      </nav>
    </header>
  );
};

export default Header;
