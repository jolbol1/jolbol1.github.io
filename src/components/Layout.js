import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children, uri }) {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", zIndex: 50 }}>
        <NavBar uri={uri}/>
      </div>
      {children}
      <footer className="h-12 bg-slate-900 flex justify-center items-center z-50 relative -mt-12">
        <a href="mailto:enquiries@jamesshopland.com" className="font-bold text-center text-gray-300 w-fit h-fit">enquiries@jamesshopland.com</a>
      </footer>
    </>
  );
}
