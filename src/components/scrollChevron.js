import React from "react";

export const ScrollChevron = ({ scrollToId }) => {
  const handleClick = () => {
    console.log(scrollToId);
    document
      .getElementById(scrollToId)
      .scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(undefined, undefined, `#${scrollToId}`);
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      document
      .getElementById(scrollToId)
      .scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(undefined, undefined, `#${scrollToId}`);
    }
  }

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={handleClick}
      className="w-full flex flex-col items-center pointer"
      style={{ position: "absolute", bottom: "2rem" }}
      onKeyPress={handleKeyPress}
    >
      <p>View More</p>
      <button className="bounce-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
};
