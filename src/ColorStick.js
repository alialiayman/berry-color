import React from "react";
import ColorSquare from "./ColorSquare";

const ColorStick = ({ hue, names }) => {
  return (
    <div style={{ display: "flex" }}>
      <ColorSquare name={names?.[0].name} hue={hue} palette={names?.[0]?.palette}/>
      <ColorSquare name={names?.[1].name} hue={hue + 30} palette={names?.[1]?.palette}/>
      <ColorSquare name={names?.[2].name} hue={hue + 60} palette={names?.[2]?.palette}/>
      <ColorSquare name={names?.[3].name} hue={hue + 90} palette={names?.[3]?.palette}/>
    </div>
  );
};

export default ColorStick;
