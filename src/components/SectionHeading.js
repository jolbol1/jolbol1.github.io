import React from "react";

export const SectionHeading = ({ text, id }) => {
  return (
    <h1
      id={id}
      className="title-underline theme-title-underline scroll-fix mx-auto w-fit pr-6 text-5xl font-bold text-white"
    >
      {text}
    </h1>
  );
};
