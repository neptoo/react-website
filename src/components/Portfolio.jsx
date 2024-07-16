import { CheckCircle2 } from "lucide-react";
import { projectOptions } from "../constants";

const Portfolio = () => {
  return (
    <div className="mt-12" id="portfolio">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 font-medium text-sm px-2 py-1 uppercase">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide my-6">
          My Complete Projects
        </h2>
      </div>
      <div className="flex flex-wrap">
        {projectOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-2xl mb-4 uppercase">{option.title}</p>
              <p className="mb-6">
                <span className="text-xl mt-1">{option.description}</span>
                {option.id === 1 && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text ml-2 mb-3">
                    (Most Recent)
                  </span>
                )}
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
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
