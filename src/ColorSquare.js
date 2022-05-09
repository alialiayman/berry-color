import React from "react";
import convert from "color-convert";

const luminance = "50%";
const textLuminance = "10%";
const saturation = "100%";

const commonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  minHeight: "100%",
  maxWidth: "25%",
  paddingLeft: "1rem",
  paddingRight: "0.5rem",
};

const ColorSquare = ({ name, hue, palette }) => {
  const squareHex = convert.hsl.hex([hue, `${saturation.replace('%','')}`, `${luminance.replace('%','')}`]);
  return (
    <div
      style={{
        background: `hsl(${hue},${saturation},${luminance})`,
        color: `hsl(${hue},${saturation},${textLuminance})`,
        padding: "1rem",
        ...commonStyle,
      }}
    >
      <div>
        {`${name} - ${hue}`}
        <hr />
        <button
          style={{
            border: "none",
            color: 'black',
            background: `hsl(${hue},${saturation},${luminance})`,

          }}
          onClick={() => navigator.clipboard.writeText(`#${squareHex}`)}
        >
          {squareHex}
        </button>
      </div>
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
            if (
              parseInt(a.hsl.split(",")[2].replace("%", "")) >
              parseInt(b.hsl.split(",")[2].replace("%", ""))
            ) {
              return -1;
            }
            return 1;
          })
          .map((p) => {
            const hex = convert.hsl.hex([
              p.hsl.split(",")[0],
              p.hsl.split(",")[1].replace("%", ""),
              p.hsl.split(",")[2].replace("%", ""),
            ]);
            return (
              <div style={{ backgroundColor: `hsl(${p.hsl})`, width: "100%" }}>
                {`${p.name} ${p.hsl}`}
                <button
                  style={{
                    backgroundColor: `hsl(${p.hsl})`,
                    border: "none",
                    color: `'#${hex}'`,
                  }}
                  onClick={() => navigator.clipboard.writeText(`#${hex}`)}
                >
                  {hex}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ColorSquare;
