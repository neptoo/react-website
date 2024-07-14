import { useEffect, useState } from "react";
import { testimonials, testimonialTexts } from "../constants";

const Testimonials = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://randomuser.me/api?results=6&inc=name,location,picture,login&nat=us,gb,au,ca"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const randomUserResults = [...data.results];

        const filteredResults = randomUserResults.map((userData, index) => {
          const { name, location, picture, login } = userData;
          const { first, last } = name;
          const { city, country } = location;
          const id = login.uuid;

          return {
            id,
            text: testimonialTexts[index], // Assuming testimonialTexts is defined elsewhere
            picture: picture.thumbnail,
            name: `${first} ${last}`,
            location: `${city}, ${country}`,
          };
        });

        setUsers(filteredResults);
      })
      .catch((error) => {
        console.error("Error fetching random users:", error);
        // Handle error state or display an error message in your UI
      });
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    <div className="mt-12 tracking-wide">
      {/* what am I looking for ? */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide my-5 lg:my-10">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {users.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 py-2">
            <div className="rounded-md p-4 border font-thin bg-neutral-900 border-neutral-800 ">
              <p>{testimonial.text}</p>
              <div className="flex items-start mt-6">
                <img
                  src={testimonial.picture}
                  alt={testimonial.name}
                  className="rounded-full border border-neutral-400 w-12 h-12 mr-6"
                />
                <div>
                  <h6>{testimonial.name}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.location}
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
