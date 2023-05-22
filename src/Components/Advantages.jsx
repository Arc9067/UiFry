import React, { useContext } from "react";
import useTheme from "../Data/utils/ThemeContext";
import Advantage from "../assets/advantage.svg";
import Notification from "../assets/noti.svg";
import Customize from "../assets/full.png";
import Visa from "../assets/advantage1.png";

const Advantages = () => {
  const Theme = useContext(useTheme);
  return (
    <section className={`pt-[50px] w-full ${Theme}`}>
      <div className="container grid lg:grid-cols-2 items-center justify-between">
        <article className="flex flex-col gap-2">
          <h2 className="uppercase tracking-normal font-medium text-xl text-primary">
            advantage
          </h2>
          <h1 className="capitalize font-bold text-5xl">why choose Uifry?</h1>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex gap-3 items-center">
              <img src={Notification} alt="" />
              <h1 className="font-semibold text-xl capitalize">
                clever notifications
              </h1>
            </div>
            <p className="max-w-lg font-medium text-black/50">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </article>
        <article className="">{<img src={Advantage} alt="" />}</article>
        <article className="order-4">
          <img src={Visa} alt="" />
        </article>

        <article className="flex flex-col gap-2 lg:order-4">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <img src={Customize} alt="" />
              <h1 className="font-semibold text-xl capitalize">
                fully customizable
              </h1>
            </div>
            <p className="max-w-lg font-medium text-black/50">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Advantages;
