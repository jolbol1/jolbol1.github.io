import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="theme-color h-screen text-white">
      <h1 className="header-text mb-3 pt-24 text-center text-5xl font-bold lg:text-7xl">
        Sorry. Page Not Found
      </h1>
      <div className="flex w-full justify-center pt-12 ">
        <Link
          key="home"
          to="/"
          className={
            "rounded-md bg-cyan-500 px-12 py-6 text-2xl  font-bold text-slate-900 shadow-2xl shadow-blue-500/50 hover:bg-gray-700 hover:text-white"
          }
        >
          Go Home
        </Link>{" "}
      </div>
    </main>
  );
};

export default NotFoundPage;
