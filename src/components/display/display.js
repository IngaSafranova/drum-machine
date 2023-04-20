import React from "react"; 
import DrumPads from "./drum pads/DrumPads";
import Logo from "../logo/logo";


const Display = () => {
  
    //console.log(activeKey)
  return (
    <div id="display">
      <Logo />
      <DrumPads  />
     <h2>Drum Machine</h2>
    </div>
  )
      }

export default Display;