import React from "react";

function RatherCard({ question }) {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div
        onClick={() => {
          const current =
            localStorage.getItem("state") === "false" ? "true" : "false";
          localStorage.setItem("state", current);

          // 🔥 Dispatch a custom event
          window.dispatchEvent(new Event("customStateChange"));
        }}
        className="cursor-pointer h-[15rem] w-[30rem] bg-[#0000005c] transition-all duration-75 hover:border-2 rounded-md"
      >
        <div>
          <h1>{question}</h1>
        </div>
      </div>
    </div>
  );
}

export default RatherCard;
