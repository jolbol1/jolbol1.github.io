import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children, uri }) {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", zIndex: 50 }}>
        <NavBar uri={uri}/>
      </div>
      {children}
    </>
  );
}
