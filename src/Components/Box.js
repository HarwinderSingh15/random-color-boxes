import React from "react";

const Box = ({ color }) => {
  const styles = {
    width: "100px",
    height: "100px",
    margin: "5px",
    background: color,
  };

  return <div style={styles} />;
};

export default Box;
