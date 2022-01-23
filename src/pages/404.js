import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="h-screen theme-color text-white">
      <h1 className="text-5xl lg:text-7xl font-bold header-text mb-3 text-center pt-24">
        Sorry. Page Not Found
      </h1>
      <div className="w-full flex justify-center pt-12 ">
        <Link
          key="home"
          to="/"
          className={"hover:bg-gray-700 hover:text-white bg-cyan-500 px-12 py-6  rounded-md text-2xl shadow-blue-500/50 shadow-2xl font-bold text-slate-900"}
        >
          Go Home
        </Link>{" "}
      </div>
    </main>
  );
};

export default NotFoundPage;
