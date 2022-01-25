import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children, uri }) {

  const handleScript = () =>{
    console.log("Fucking finally")
    loadStars()
  }
  
  React.useEffect(() => {
    console.log("Testing");
    const script = document.createElement("script");
    script.addEventListener("load", handleScript);
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/tsparticles/1.39.0/tsparticles.slim.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", width: "100%", zIndex: 50 }}>
        <NavBar uri={uri}/>
      </div>
      {children}
      <footer className="h-12 bg-slate-900 flex justify-center items-center z-50 relative -mt-12">
        <a href="mailto:enquiries@jamesshopland.com" className="font-bold text-center text-gray-300 w-fit h-fit">enquiries@jamesshopland.com</a>
      </footer>
      <div id="tsparticles"></div>
    </>
  );
}
