import React, { useContext } from "react";
import { ArrowRight, Play } from "iconsax-react";
import Banner from "../assets/banner.png";
import Phone from "../assets/phone.svg";
import Blur from "../assets/blurcircle.png";
import Star from "../assets/star.svg";
import Star2 from "../assets/star2.svg";
import useTheme from "../Data/utils/ThemeContext";

const Hero = () => {
  const Theme = useContext(useTheme);
  return (
    <section
      className={`w-full ${Theme} hero relative md:pt-36 lg:pt-24  pt-24`}
    >
      <img src={Star} alt="" className="absolute left-10 hidden lg:block" />
      <div className="container grid md:grid-cols-1 lg:grid-cols-2 gap-y-10 items-center justify-between">
        <div className="flex flex-col gap-5 relative">
          <img
            src={Blur}
            alt=""
            className="absolute -top-20 max-w-xs md:-top-20"
          />
          <h1 className="hero-header text-5xl leading-head font-bold capitalize z-10">
            make the best financial decisions
          </h1>
          <p className="text-black/50 hero-para font-medium z-10 max-w-md">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex gap-5 hero-watch flex-wrap capitalize items-center z-10">
            <a
              href=""
              className="btn hero-btn text-white flex items-center gap-3"
            >
              get started{" "}
              <ArrowRight size="32" color="#fff" variant="TwoTone" />
            </a>
            <a
              href=""
              className=" flex items-cente hero-btnr  gap-3 btn bg-transparent hover:bg-primary"
            >
              <Play size="32" color="#000" /> watch video
            </a>
          </div>
          <div className="relative">
            <img src={Star} alt="" className="absolute top-0 left-20" />
            <img
              src={Banner}
              alt=""
              className="md:max-w-xs max-w-full block md:mx-auto lg:mx-0"
            />
          </div>
        </div>
        <div className="relative">
          <img src={Star2} alt="" className="absolute  bottom-28 left-24" />
          <img
            src={Phone}
            alt=""
            className="z-10 hero-cd md:max-w-xl mx-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
