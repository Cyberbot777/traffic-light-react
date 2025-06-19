
import React, { useState, useEffect } from "react";


export default function TrafficLight() {
  const colors = ["red", "yellow", "green"];
  const [color, setColor] = useState("red");

  const isActive = (c) => (color === c ? "active" : "");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={wrapper}>
      <div style={trafficBox}>
        <div
          className={`light red ${isActive("red")}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${isActive("yellow")}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${isActive("green")}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
      <div style={pole}></div>
    </div>
  );
}

const wrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "60px",
};

const trafficBox = {
  backgroundColor: "#111",
  padding: "20px 10px",
  borderRadius: "20px",
  boxShadow: "0 0 20px #000",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const pole = {
  width: "20px",
  height: "350px",
  backgroundColor: "#222",
  marginTop: "-5px",
  borderRadius: "10px",
  boxShadow: "0 0 5px #000",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
};
