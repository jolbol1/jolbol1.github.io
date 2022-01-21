import React from "react";

export const IntroHero = () => {
  return (
    <div className="h-fit px-6 pt-24 sm:w-full text-white font-serif md:px-24 lg:px-32 xl:px-48 2xl:px-80">
      <p className="text-cyan-500 text-base md:text-lg lg:text-xl font-bold max-w-fit border-r-2 border-transparent whitespace-nowrap overflow-hidden anim-typewriter">
        Welcome to my site, I'm
      </p>
      <h1 className="text-5xl lg:text-7xl font-bold text-pop-up-top mb-3">
        James Shopland
      </h1>
      <h2 className="font-bold mb-3 md:mb-0 md:text-xl">
        Junior Software Developer | Surrey, UK
      </h2>
      <h3>C# | .NET | React | Redux | JavaScript | HTML | CSS | and more...</h3>
    </div>
  );
};
