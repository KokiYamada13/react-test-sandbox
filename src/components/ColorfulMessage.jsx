import React from "react";

const ColorfulMessage = (props) => {
  const { color, message } = props;
  console.log(color, message);
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
