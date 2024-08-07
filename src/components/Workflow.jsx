import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-6 lg:mt-12" id="workflow">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
        Transform your
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>
        <div className="pt-8 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="text-green-400 mx-4 bg-neutral-900 w-10 h-10 p-1 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="text-xl mb-2">{item.title}</h5>
                <p className="text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
