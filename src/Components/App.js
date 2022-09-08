import React, { useState, useEffect } from "react";
import { COLORS_ARR, BOXES_LENGTH } from "../Constants/Constants";
import Box from "./Box";

const App = () => {
  const [boxes, setBoxes] = useState(
    COLORS_ARR.filter((value, i) => i < BOXES_LENGTH && value)
  );

  const getRandNum = (length) => {
    return Math.floor(Math.random() * length);
  };

  useEffect(() => {
    const clearId = setInterval(() => {
      const randColor = getRandNum(COLORS_ARR.length);
      const randIdx = getRandNum(BOXES_LENGTH);
      let boxesCopy = boxes.slice();
      boxesCopy[randIdx] = randColor;
      setBoxes(boxesCopy);
    }, 300);

    return () => {
      clearInterval(clearId);
    };
  }, []);

  return (
    <div className="container">
      {boxes.map((color, i) => (
        <Box key={i} color={color} />
      ))}
    </div>
  );
};

export default App;
