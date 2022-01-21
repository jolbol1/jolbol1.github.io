import React from "react";

export const ProjectTree = () => {
  const handleClick = (url) => {
    window.open(url);
  };

  const handleKeyPress = (event, url) => {
    if (event.key === "Enter") {
      window.open(url);
    }
  };

  return (
    <div>
      <div class="relative wrap overflow-hidden p-10">
        <div
          class="border-2-2 absolute border-opacity-20 border-gray-700 border hidden md:block"
          style={{ left: "50%", height: "80%" }}
        ></div>
        <div class="md:mb-8 mb-3 flex justify-between items-center w-full right-timeline md:flex-row flex-col">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full mb-3 md:mb-0">
            <h1 class="mx-auto font-semibold text-lg text-white">
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 128 128">
                <path
                  d="M109 50h-4.8l-1.2 6h-3.8l1.2-6h-4.9l-1.2 6H89v5h4.4l-.9 4H89v5h2.5l-1.2 6h4.8l1.2-6h3.8l-1.2 6h4.9l1.2-6h5v-5h-4.1l.9-4h3.2v-5h-2.2l1.2-6zm-7.9 15h-3.8l.9-4h3.8l-.9 4zm15.4-32.7c-.6-1.1-1.4-2.1-2.3-2.6L66.1 1.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L11.4 29.7c-1.7 1-3.4 3.5-3.4 5.4v55.7c0 1.1.7 2.3 1.4 3.4l.1.1c.5.8 1.3 1.5 2 1.9l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 2.4-3.5 2.4-5.4V35.1c0-.8.4-1.8 0-2.6l.5-.2zm-4.2 2.1c0 .3-.3.5-.3.7v55.7c0 .8-.2 1.7-.4 2L64 120.6c-.1.1-.5.2-1.1.2-.6 0-1-.1-1.1-.2L13.6 92.8s-.1-.1-.2-.1l-.6-.6c-.4-.7.2-1.1-.8-1.2V35.2c1-.5.9-1.7 1.4-1.9L61.7 5.4c.1 0 .6-.2 1.2-.2s1 .1 1.1.2l48 27.7.4.9c.1.1-.1.3-.1.4zM63 87.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6C80.1 82.5 72.1 87.5 63 87.5z"
                  fill="#fff"
                ></path>
              </svg>
            </h1>
          </div>
          <div
            tabIndex={0}
            role="button"
            class="order-1 bg-gray-400 rounded-lg md:w-5/12 px-6 py-4 shadow-white/20 shadow-xl cursor-pointer hover:bg-gray-100"
            onClick={() => handleClick("https://github.com/jolbol1/HeardIt")}
            onKeyPress={(e) =>
              handleKeyPress(e, "https://github.com/jolbol1/HeardIt")
            }
          >
            <h3 class="mb-3 font-bold text-gray-800 text-xl">HeardIt</h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              A reddit client to read posts and comments to you. Built with
              TailwindCSS, C# and Blazor.
            </p>
          </div>
        </div>

        <div class="md:mb-8 mb-3 flex justify-between md:flex-row-reverse items-center w-full left-timeline flex-col">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full mb-3 md:mb-0">
            <h1 class="mx-auto text-white font-semibold text-lg">
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 128 128">
                <g fill="#fff">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
            </h1>
          </div>
          <div
            tabIndex={0}
            role="button"
            class="order-1 bg-slate-900 rounded-lg shadow-xl md:w-5/12 px-6 py-4 shadow-blue-500/20 cursor-pointer hover:bg-slate-700"
            onClick={() => handleClick("https://github.com/jolbol1/jammming")}
            onKeyPress={(e) =>
              handleKeyPress(e, "https://github.com/jolbol1/jammming")
            }
          >
            <h3 class="mb-3 font-bold text-white text-xl">Jammming</h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Search songs and add them to your own spotify playlist. Part of a
              Codecademy course. Built using React
            </p>
          </div>
        </div>

        <div class="md:mb-8 mb-3 flex justify-between items-center w-full right-timeline md:flex-row flex-col">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full mb-3 md:mb-0">
            <h1 class="mx-auto font-semibold text-lg text-white">
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 128 128">
                <path
                  fill="#fff"
                  d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
                ></path>
              </svg>
            </h1>
          </div>
          <div
            tabIndex={0}
            role="button"
            class="order-1 bg-gray-400 rounded-lg md:w-5/12 px-6 py-4 shadow-white/20 shadow-xl cursor-pointer hover:bg-gray-100"
            onClick={() => handleClick("https://github.com/jolbol1/bedTime")}
            onKeyPress={(e) =>
              handleKeyPress(e, "https://github.com/jolbol1/bedTime")
            }
          >
            <h3 class="mb-3 font-bold text-gray-800 text-xl">BedTime</h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              A custom HTML element for Organizr. Select a time, and it will
              kill your pPex stream at this time. Built with Python, PHP and
              HTML
            </p>
          </div>
        </div>

        <div class="md:mb-8 mb-3 flex justify-between md:flex-row-reverse items-center w-full left-timeline flex-col">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full mb-3 md:mb-0">
            <h1 class="mx-auto text-white font-semibold text-lg">
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 128 128">
                <path
                  fill="#fff"
                  d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                ></path>
                <path
                  fill="#fff"
                  d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                ></path>
                <path
                  fill="#fff"
                  d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                ></path>
                <path
                  fill="#fff"
                  d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
                ></path>
                <path
                  fill="#fff"
                  d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                ></path>
              </svg>
            </h1>
          </div>
          <div
            tabIndex={0}
            role="button"
            class="order-1 bg-slate-900 rounded-lg shadow-xl md:w-5/12 shadow-blue-500/20 px-6 py-4 cursor-pointer hover:bg-slate-700"
            onClick={() =>
              handleClick("https://github.com/jolbol1/RandomCoordinatesV2")
            }
            onKeyPress={(e) =>
              handleKeyPress(
                e,
                "https://github.com/jolbol1/RandomCoordinatesV2"
              )
            }
          >
            <h3 class="mb-3 font-bold text-white text-xl">RandomCoordinates</h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              A Minecraft plugin to teleport users to random locations. Includes
              a dive into the flaws of randomness in computing, lots of
              customizability and an extensive Wiki. Since it started the plugin
              has amassed 100,000 downloads.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          role="button"
          onClick={() =>
            handleClick("https://github.com/jolbol1?tab=repositories")
          }
          onKeyPress={(e) =>
            handleKeyPress(e, "https://github.com/jolbol1?tab=repositories")
          }
          class="order-1 bg-cyan-900 hover:bg-cyan-600 cursor-pointer rounded-lg shadow-xl md:w-5/12 px-6 py-4 mx-auto mt-12"
        >
          <h3 class="font-bold text-white text-xl text-center">
            View More on GitHub
          </h3>
        </div>
      </div>
    </div>
  );
};
