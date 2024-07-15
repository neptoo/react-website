import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div
      className="relative mt-10 border-b border-neutral-800 min-h-[640px]"
      id="features"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 font-medium text-sm px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-6 lg:mt-12 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-6 lg:mt-12">
        {features.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-4 w-10 h-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {item.icon}
              </div>
              <div>
                <h5 className="text-xl mt-1 mb-4 text-nowrap ">{item.text}</h5>
                <p className="text-neutral-500 p-1 mb-8">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
