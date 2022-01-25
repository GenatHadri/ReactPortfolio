import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Front End Developer", "Back End Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 52,
      }}
    />
  );
}

export default Type;
