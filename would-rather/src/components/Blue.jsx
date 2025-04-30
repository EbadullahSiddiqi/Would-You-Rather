import React from "react";
import RatherCard from "./RatherCard";

function Blue({ rather }) {
  return (
    <div>
      <div className="w-[50rem] bg-blue-600 h-screen text-center">
        <div className="object-center">
          <RatherCard question={rather} />
        </div>
      </div>
    </div>
  );
}

export default Blue;
