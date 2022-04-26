import React from "react";
import { Link } from "gatsby";

export const TextContainer = () => {
  return (
    <div className="flex w-full flex-col xl:w-1/2">
      <div className="m-3 h-fit rounded-xl bg-slate-900/75 px-3 py-3 shadow-2xl shadow-blue-500/50">
        <h4 className="mb-1 text-center text-xl font-bold">
          <span className="underline">Career</span> 💼
        </h4>
        <p className="text-justify text-base md:text-lg	">
          I am a software engineer currently working for a leading systems, engineering and technology company in the Cloud Technologies department.
          Previosuly worked for a medium sized finance firm, developing in house apps to improve workflows. 
          I have skills in developing CRUD apps with .NET, Building OfficeJS add-ins and full-stack web design.
        </p>
        <br />
        <h4 className="text-center text-xl font-bold">
          <span className="underline">Personal</span> 💻
        </h4>
        <p className="text-justify text-base md:text-lg">
          I started coding over 10 years ago in Java, developing plugins for
          games I liked. Since then I have always had an interest in all things
          tech, from microcontrollers to full-stack development. The combination
          of problem solving and creativity continue to fuel my passion in the
          rapidly changing field of technology.
        </p>
      </div>
      <Link
        key={"more-info"}
        to={"/about"}
        className={
          "my-12 mx-auto w-5/6 cursor-pointer rounded-lg bg-cyan-900 px-6 py-4 text-center font-bold shadow-2xl shadow-blue-500/50 hover:bg-cyan-600"
        }
      >
        Read More About Me
      </Link>
    </div>
  );
};
