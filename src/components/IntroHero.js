import React from "react";

export const IntroHero = () => {
  return (
    <div className="h-fit px-6 pt-24 font-serif text-white sm:w-full md:px-24 lg:px-32 xl:px-48 2xl:px-80">
      <p className="anim-typewriter max-w-fit overflow-hidden whitespace-nowrap border-r-2 border-transparent text-base font-bold text-cyan-500 md:text-lg lg:text-xl">
        Welcome to my site, I'm
      </p>
      <h1 className="text-pop-up-top mb-3 text-5xl font-bold lg:text-7xl">
        James Shopland
      </h1>
      <h2 className="mb-3 font-bold md:mb-0 md:text-xl">
        Junior Software Developer | Surrey, UK
      </h2>
      <h3>C# | .NET | React | Redux | JavaScript | HTML | CSS | and more...</h3>
    </div>
  );
};
