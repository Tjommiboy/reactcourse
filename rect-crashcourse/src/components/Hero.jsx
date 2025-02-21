import React from "react";
import DSC_4108 from "../assets/images/DSC_4108.jpg";

const Hero = ({
  title = "Innkjøring nå før innlevering!",
  subtitle = "Stå på!",
}) => {
  return (
    <>
      <section
        className="bg-indigo-700 py-20 mb-4 bg-cover "
        style={{ backgroundImage: `url(${DSC_4108})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl ">
              {title}
            </h1>
            <p className="my-4 text-xl text-white">{subtitle}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
