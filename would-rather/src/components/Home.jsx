import React, { useEffect, useState } from "react";
import questions from "../would_you_rather_questions.json";

function Home() {
  const [ques, setQues] = useState(null);
  const [blueCount, setBlueCount] = useState(
    parseInt(localStorage.getItem("blueCount")) || 0
  );
  const [redCount, setRedCount] = useState(
    parseInt(localStorage.getItem("redCount")) || 0
  );
  const [lastIndex, setLastIndex] = useState(-1); // To avoid repetition

  // Load first question
  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = () => {
    let index;
    do {
      index = Math.floor(Math.random() * questions.length);
    } while (index === lastIndex); // Ensure different from last

    setLastIndex(index);
    setQues(questions[index]);
  };

  const handleBlueClick = () => {
    const updated = blueCount + 1;
    setBlueCount(updated);
    localStorage.setItem("blueCount", updated);
    loadNewQuestion();
  };

  const handleRedClick = () => {
    const updated = redCount + 1;
    setRedCount(updated);
    localStorage.setItem("redCount", updated);
    loadNewQuestion();
  };

  if (!ques)
    return <div className="text-center mt-20 text-white">Loading...</div>;

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans bg-black">
      {/* Score box */}
      <div className="absolute top-4 right-4 bg-white text-black p-4 rounded-lg shadow-md z-10 text-sm">
        <p>🔵 Blue: {blueCount}</p>
        <p>🔴 Red: {redCount}</p>
      </div>

      {/* Heading */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text text-4xl text-zinc-800 font-extrabold z-20">
        Would You Rather...?
      </div>

      {/* Main Choice Layout */}
      <div className="flex h-full w-full text-white font-bold text-xl">
        {/* Blue Option */}
        <div
          onClick={handleBlueClick}
          className="w-1/2 bg-gradient-to-br from-blue-500 to-blue-800 hover:brightness-110 transition-all duration-300 flex justify-center items-center cursor-pointer"
        >
          <div className="p-10 text-center max-w-[80%]">
            <h1>{ques.option1}</h1>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center items-center w-[5rem] text-black bg-white text-3xl z-10">
          <h1>OR</h1>
        </div>

        {/* Red Option */}
        <div
          onClick={handleRedClick}
          className="w-1/2 bg-gradient-to-br from-red-500 to-red-800 hover:brightness-110 transition-all duration-300 flex justify-center items-center cursor-pointer"
        >
          <div className="p-10 text-center max-w-[80%]">
            <h1>{ques.option2}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
