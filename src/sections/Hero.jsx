import React, { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Software Developer", "Web Developer", "UI Designer"];

  const TypingText = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
      if (index < roles[roleIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + roles[roleIndex][index]);
          setIndex(index + 1);
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => {
          setText("");
          setIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);

        return () => clearTimeout(pause);
      }
    }, [index, roleIndex]);

    return (
      <h2 id="animatedText">
        {text}
        <span className="cursor">|</span>
      </h2>
    );
  };

  return (
    <div id="mainnamediv">
      <div id="nameContainer">
        <h3>
          Hi There <span id="hiemoji">👋</span>
        </h3>

        <h1>I'M VEMPARALA VISVESVARA RAO</h1>

        <TypingText />
      </div>

      <div id="img">
        <img
          src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
          alt="viswaa"
        />
      </div>
    </div>
  );
};

export default Hero;



