import React, { useContext } from "react";
import useTheme from "../Data/utils/ThemeContext";
import FaqData from "../Data/FaqData";

const Faq = () => {
  const Theme = useContext(useTheme);
  return (
    <section className={`py-[50px] ${Theme}`}>
      <div className="container flex flex-col gap-3">
        <div>
          <h2 className="uppercase tracking-normal font-medium text-xl text-primary">
            faq
          </h2>
          <h1 className="capitalize font-bold text-5xl max-w-2xl">
            Frequently asked questions
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-5">
          {FaqData.map(({ head, text, bg, textColor }, index) => {
            return (
              <div
                key={index}
                className={`${
                  bg ? "bg-primary" : "bg-transparent"
                } px-4 py-5 faq-div rounded-md transition flex flex-col gap-3 `}
              >
                <h1
                  className={`${
                    textColor ? "text-white" : "text-black"
                  } font-semibold text-xl capitalize "`}
                >
                  {head}
                </h1>
                <p
                  className={`${
                    textColor ? "text-white" : "text-black"
                  } max-w-lg font-medium text-black/50`}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
