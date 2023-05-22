import React, { useContext, useReducer, useState } from "react";
import useTheme from "../Data/utils/ThemeContext";
import People from "../assets/people.png";
import PeopleData from "../Data/People";
import { Personalcard } from "iconsax-react";

function reducer(state, action) {
  if (action.type === "UPDATE") {
    return { ...state, current: action.id };
  }

  throw new Error("something went wrong check actions");
}

const Testimonial = () => {
  const pData = {
    pData: PeopleData,
    current: 0,
  };

  const [state, dispatch] = useReducer(reducer, pData);
  const Theme = useContext(useTheme);
  // const [pData, setPData] = useState(PeopleData);
  // const [current, setCurrent] = useState(0);
  return (
    <section className={`pt-[50px] w-full ${Theme}`}>
      <div className="container flex flex-col gap-5">
        <div className="mx-auto text-center flex flex-col">
          <h2 className="uppercase  font-medium tracking-wide text-xl text-black">
            testimonial
          </h2>
          <h1 className="capitalize font-bold text-5xl max-w-xl leading-head">
            what our users say about us?
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-y-5 items-center">
          <article className="">
            <img src={People} alt="" />
          </article>
          <article className="flex flex-col gap-8">
            <h2 className="capitalize font-bold text-4xl max-w-xl">
              the best financial accounting app ever!
            </h2>
            <p className="max-w-lg font-medium text-black/50">
              "{state.pData[state.current].message}"
            </p>
            <div className="flex gap-3 flex-wrap lg:justify-start">
              {state.pData.map((ele, index) => {
                return (
                  <img
                    key={index}
                    src={ele.photo}
                    className={`w-[4rem] cursor-pointer person person-${index} transition hover:opacity-[1]`}
                    onClick={() => {
                      dispatch({ type: "UPDATE", id: index });
                    }}
                  />
                );
              })}
            </div>
            <h2 className="font-semibold text-3xl flex gap-3 capitalize">
              <Personalcard size="32" color="#FF5555" variant="Bulk" />
              {state.pData[state.current].name}
            </h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
