import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-12 tracking-wide">
      {/* what am I looking for ? */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide my-5 lg:my-10">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 py-2">
            <div className="rounded-md p-4 border font-thin bg-neutral-900 border-neutral-800 ">
              <p>{testimonial.text}</p>
              <div className="flex items-start mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="rounded-full border border-neutral-400 w-12 h-12 mr-6"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
