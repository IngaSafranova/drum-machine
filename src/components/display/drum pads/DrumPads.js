import React,{useState} from "react";



//create a sounds data for the drum pads

export const data = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];



  const DrumPads = (props) => {

    const[activeKey, setActiveKey] = useState('') ;
   console.log(activeKey)
//create a function to play the sound
  function playSound(selector) {
    
  const audio = document.getElementById(selector);
  audio.currentTime = 0;
  audio.play();
  setActiveKey(selector);
 

}


  
    return (
      <div id='drum-pads'>

       {/* //create a drum pads for each sound in the data */}

        {data.map((drumObj) => <div key={drumObj.id} className='drum-pad' id={drumObj.id} onClick={()=>{playSound(drumObj.keyTrigger)}}>{drumObj.keyTrigger}

        {/* //create an audio element for each sound in the data */
        }
        <audio className='clip' id={drumObj.keyTrigger} src={drumObj.url} ></audio>
        </div>)
        } 
        <p>{activeKey}</p>
      </div>
    );
  }

  export default DrumPads;


  
  
