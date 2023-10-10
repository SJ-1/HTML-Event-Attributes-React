import React, { useState } from "react";
import "./index.css";


let App = () => {
    const [heading , updatedheading] = useState("Hemlo");
    const [isMouseOver, setMouseOver] = useState(false);

    let handleMouseOver = () =>{
        setMouseOver(true);
    }
    let click = () => {
    updatedheading("Sup, Homie");
}
    let handleMouseOut = () => {
        setMouseOver(false);
    }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={click} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{backgroundColor: isMouseOver? "black" : "white"}}
      >Submit</button>
    </div>
  );
}

export default App;
