import React, { useContext } from "react";
import Phone from "../assets/features.png";
import Feat from "../Data/Feat";
import Star from "../assets/star2.svg";
import Blur from "../assets/blurcircle.png";
import useTheme from "../Data/utils/ThemeContext";

const Features = () => {
  const Theme = useContext(useTheme);
  return (
    <section className={`pt-[50px] w-full ${Theme} relative overflow-x-hidden`}>
      <img
        src={Star}
        alt=""
        className="absolute right-0 top-[50%]  lg:left-10 lg:top-36 lg:block"
      />
      <img src={Blur} alt="" className="absolute -right-20 top-32 max-w-xs" />
      <div className="container grid lg:grid-cols-2 justify-between items-center gap-y-10">
        <article className="order-2 lg:order-[0] flex justify-start">
          <img src={Phone} alt="" />
        </article>
        <article className="flex flex-col gap-4 z-10">
          <h2 className="uppercase tracking-normal font-medium text-xl text-primary">
            features
          </h2>
          <h1 className="capitalize font-bold text-5xl">uifry premium</h1>
          <aside className="flex flex-col gap-8 mt-4">
            {Feat.map(({ image, head, text }, index) => {
              return (
                <div className="flex flex-col gap-3" key={index}>
                  <div className="flex gap-3">
                    <img src={image} alt="" />
                    <h1 className="font-semibold text-xl capitalize">{head}</h1>
                  </div>
                  <p className="max-w-lg font-medium text-black/50">{text}</p>
                </div>
              );
            })}
          </aside>
        </article>
      </div>
    </section>
  );
};

export default Features;
