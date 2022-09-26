import ReactPlayer from "react-player"
import "./playerStyle.css"
import React, { useState, useEffect, useRef } from 'react';


function Player() {

  const [isPlayerActive, setPlayerActive] = useState(false);
  const togglePlayerActive = () => setPlayerActive(!isPlayerActive)
  // const switchID = document.querySelector("#player-switch-id");

  const musicURLs = [
                      "https://soundcloud.com/game-game-game/jungle-japes-donkey-kong-64-soundtrack",
                      "https://soundcloud.com/blacksabbath/war-pigs"
                    ]

  let currentURL;

  const d = new Date();
  let current = d.getHours();

  if (current === 20) {
    currentURL = musicURLs[0];
  }
  if (current === 21) {
    currentURL = musicURLs[1];
  }
  else {
    currentURL = musicURLs[0];
  }

  useEffect(() => {

    if (isPlayerActive === false) {
      console.log('hidden');
    } 
    else if (isPlayerActive === true) {
      console.log('showing');
    } 
    else {
      console.log('error');
    }
  },[isPlayerActive]);

  return (
    <div className ="bg-dark">
      <button onClick={togglePlayerActive}>{isPlayerActive ? "Hide Music Player" : "Show Music Player"}</button>
      <div id = "player-switch-id" className ={isPlayerActive ? "showing" : "hidden"}>
        <div className="player-wrapper animated shake">
          <ReactPlayer
            url={currentURL}
            className="react-player"
            playing
            width="100%"
            height="70px"
            controls={false}
          />
        </div>
      </div>
    </div>     
  );
}

export default Player;