import React from "react";
import RatherCard from "./RatherCard";

function Red({ rather }) {
  return (
    <div>
      <div className="bg-red-600 w-[50rem] h-screen text-center">
        <RatherCard question={rather}/>
      </div>
    </div>
  );
}

export default Red;
