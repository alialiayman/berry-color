import React from "react";

const luminance = "50%";
const textLuminance = "10%";
const saturation = "100%";

const commonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  height: "400px",
  width: "25%",
  paddingLeft: "1rem",
  paddingRight: "0.5rem",
};


const ColorSquare = ({ name, hue, palette }) => {
  return (
    <div
      style={{
        background: `hsl(${hue},${saturation},${luminance})`,
        color: `hsl(${hue},${saturation},${textLuminance})`,
        ...commonStyle,
      }}
    >
      <div>{`${name} - ${hue}`}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "16px",
          width: "100%",
        }}
      >
        {palette
          .sort((a, b) => {
            if (parseInt(a.hsl.split(',')[2].replace('%','')) > parseInt(b.hsl.split(',')[2].replace('%',''))) {
              return -1;
            }
            return 1;
          })
          .map((p) => (
            <div style={{ backgroundColor: `hsl(${p.hsl})`, width: "100%" }}>
              {`${p.name} ${p.hsl}`}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ColorSquare;
