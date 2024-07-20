import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-12">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center tracking-wide">
        A self taught
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Front-End{" "}
        </span>
        Developer
      </h1>
      <p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl ">
        Building the Web, One Pixel at a Time
      </p>
      <div className="flex justify-center my-8">
        <a
          href="mailto:heywuq@outlook.com"
          className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-3 mx-3 rounded-md"
        >
          Contact Me
        </a>
        <a
          href="https://github.com/neptoo/react-website"
          className="px-4 py-3 mx-3 rounded-md border"
        >
          Github Repository
        </a>
      </div>
      <div className="flex mt-6 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
