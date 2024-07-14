import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide my-6">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-4">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2 mb-3">
                    (Most Recent)
                  </span>
                )}
              </p>
              <p className="mb-6">
                <span className="text-4xl mt-4 mr-2">{option.price}</span>
                <span className="text-neutral-500 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-6 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-12 text-xl inline-flex justify-center items-center text-center w-full h-12 p-5 border border-orange-900
                hover:bg-orange-800 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
