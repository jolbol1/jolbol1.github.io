import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const LoggedInPage = () => {
  const [userName, setUsername] = useState("Loading Profile...");
  const [textarea, setTextarea] = useState("");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  useEffect(() => {
    fetch(`/.auth/me`)
      .then((response) => response.json())
      .then((resultData) => {
        setUsername(resultData.clientPrincipal.userDetails);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = { message:  textarea};

    fetch("/api/Cloud2Device", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  };

  return (
    <main className="theme-color h-screen pb-12 text-white">
      <h1 className="header-text mb-3 pt-24 text-center text-5xl font-bold lg:text-7xl">
        Logged in successfully - AzureDev.
      </h1>
      <h2 className="mb-3 pt-12 text-center text-3xl font-bold lg:text-5xl">
        {userName}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-4 w-1/2 rounded bg-slate-600 px-8 pt-6 pb-8 shadow-md"
      >
        <div class="mb-4">
          <input onChange={handleChange}
            value={textarea}
            maxLength="35"
            pattern="[a-zA-Z0-9\s]+"
            placeholder="Send the LCD dipslay a message!"
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          class=" focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default LoggedInPage;
