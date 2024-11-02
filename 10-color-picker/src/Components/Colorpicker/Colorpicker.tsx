import React, { useState } from "react";

const Colorpicker: React.FC = () => {
  const [typeOfColor, setTypeOfColor] = useState<string>("hex");
  const [color, setColor] = useState<string>("#000000");

  // Function
  // 1. Random Generator
  // 2. RGB Functions
  // 3. HEX Function
  const random = (length: number): number => {
    const randomNumber = Math.floor(Math.random() * length);

    return randomNumber;
  };

  const HexGenerator = () => {
    const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += HEX[random(HEX.length)];
    }
    setColor(hexColor);
  };

  const RgbGenerator = () => {
    const red = random(255);
    const green = random(255);
    const blue = random(255);
    const rgbColor = `rgb(${red},${green},${blue})`;

    setColor(rgbColor);
  };

  return (
    <div
      className="flex justify-center min-h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="text-xl font-medium text-center text-white">
        <h1 className="p-6 m-6 text-2xl">Random Color Picker</h1>
        <div>
          <button
            onClick={() => RgbGenerator()}
            className="p-2 m-2 border border-slate-200 rounded-lg hover:bg-purple-500"
          >
            RGB COLOR Generator
          </button>
          <button
            onClick={() => HexGenerator()}
            className="p-2 m-2 border border-slate-200 rounded-lg hover:bg-purple-500"
          >
            HEX COLOR Generator
          </button>
        </div>
        <div className="mt-32">
          <h1 className="text-2xl">COLOR: {color}</h1>
        </div>
      </div>
    </div>
  );
};

export default Colorpicker;
