import React, { useContext } from "react";
import useTheme from "../Data/utils/ThemeContext";
import download from "../assets/download.png";
import { SiApple } from "react-icons/si";
import Line from "../assets/line.png";
import Line2 from "../assets/line2.png";
import Star from "../assets/whitestar1.png";
import Star2 from "../assets/whitestar2.png";
import BStar from "../assets/star.svg";
import BlurCircle from "../assets/blurcircle.png";

const Download = () => {
  const Theme = useContext(useTheme);
  return (
    <section className={`${Theme} w-full py-[50px]`}>
      <div className="container flex justify-center items-center relative">
        <img src={BStar} alt="" className="absolute -top-10 left-10" />
        <img
          src={BlurCircle}
          alt=""
          className="absolute -top-36 hidden md:block left-10 max-w-xs"
        />
        <article className="bg-black w-full items-center rounded-lg lg:w-[90%] pl-4 text-white grid md:grid-cols-2 relative overflow-hidden">
          <img
            src={Line}
            alt=""
            className="absolute bottom-0 left-0 max-w-[15rem]"
          />
          <img
            src={Line2}
            alt=""
            className="absolute top-0 right-0 max-w-[10rem] md:max-w-[15rem]"
          />
          <div className="flex flex-col gap-4 py-8 items-start z-10 relative">
            <img
              src={Star2}
              alt=""
              className="absolute top-0 right-0 md:top-24"
            />
            <h1 className="capitalize font-bold text-4xl md:text-5xl max-w-2xl">
              ready to get started?
            </h1>
            <p className={`mx-w-lg `}>
              Risus habitant leo egestas mauris diam eget morbi tempus
              vulputate.
            </p>
            <a
              href=""
              role="button"
              className="btn bg-white text-black flex gap-3 items-center px-5 py-3 capitalize font-medium leading-relaxed transition rounded"
            >
              download <SiApple />
            </a>
          </div>
          <div className="z-10 relative">
            <img
              src={Star}
              alt=""
              className="absolute top-0
             left-0
             "
            />
            <img src={download} alt="" className="max-w-[18rem] ml-auto" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Download;
