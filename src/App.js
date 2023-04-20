import React, { useEffect,useState} from 'react';
import './App.css';
import Display from './components/display/display';



function App() {



  useEffect(() => {

    // add event listener to the document to listen for keydown events
    // and call the playSound function with the key pressed
    //clip id is the same as the key pressed

    document.addEventListener('keydown', (event) => {
      console.log(event.key)
      const audio = document.getElementById(event.key.toUpperCase());
    audio.currentTime = 0;
    audio.play();
   
      }
    );
  }, []);

  
  return (
    <div id='drum-machine'>
     <Display />

  </div>
  );
}

export default App;
