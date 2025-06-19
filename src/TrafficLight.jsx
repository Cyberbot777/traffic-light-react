import React, { useState } from 'react';

export default function TrafficLight() {
  const [color, setColor] = useState("red");

  const isActive = (c) => color === c ? 'active' : '';

  return (
    <div style={container}>
      <div className={`light red ${isActive("red")}`} onClick={() => setColor("red")}></div>
      <div className={`light yellow ${isActive("yellow")}`} onClick={() => setColor("yellow")}></div>
      <div className={`light green ${isActive("green")}`} onClick={() => setColor("green")}></div>
    </div>
  );
}

// Inline styles
const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
};

