import React from "react";

export const TextContainer = () => {
  return (
    <div className="m-3 px-3 py-3 shadow-blue-500/50 shadow-2xl bg-slate-900/75 rounded-xl xl:w-1/2 h-fit">
      <h4 className="text-xl font-bold mb-1 text-center">
        <span className="underline">Career</span> 💼
      </h4>
      <p className="text-base md:text-lg text-justify	">
        I am a junior software developer currently working for a medium sized
        finance firm, developing in house apps to improve workflows. I have
        skills in developing CRUD apps with .NET, Building OfficeJS add-ins and
        full-stack web design.
      </p>
      <br />
      <h4 className="text-xl font-bold text-center">
        <span className="underline">Personal</span> 💻
      </h4>
      <p className="text-base md:text-lg text-justify">
        I started coding over 10 years ago in Java, developing plugins for games
        I liked. Since then I have always had an interest in all things tech,
        from microcontrollers to full-stack development. The combination of
        problem solving and creativity continue to fuel my passion in the
        rapidly changing field of technology.
      </p>
    </div>
  );
};
