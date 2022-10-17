import ReactPlayer from "react-player"
import "./playerStyle.css"
import React, { useState, useEffect, useRef } from 'react';
import Iframe from 'react-iframe'

function Player() {

  const [isPlayerActive, setPlayerActive] = useState(false);
  const togglePlayerActive = () => setPlayerActive(!isPlayerActive)

  const [isDancing, setDancing] = useState(false);
  const toggleDancing = () => setDancing(!isDancing)

  const [isRocks, setRocks] = useState(false);
  const toggleRocks = () => setRocks(!isRocks)

  const musicURLs = [
                      "https://soundcloud.com/vgmplanet/jungle-japes-1?in=vgmplanet/sets/donkey-kong-64-ost",
                      "https://soundcloud.com/vgmplanet/frantic-factory?in=vgmplanet/sets/donkey-kong-64-ost",
                      "https://soundcloud.com/vgmplanet/sets/donkey-kong-64-ost"
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
    const playerButton = document.querySelector(".player-button");

    if (isPlayerActive === false) {
      playerButton.textContent="Show Music Player";
      console.log('hidden');
    } 
    else if (isPlayerActive === true) {
      playerButton.textContent="Hide Music Player";
      console.log('showing');
    } 
    else {
      console.log('error');
    }
  },[isPlayerActive]);

  return (
    <div>

      <button className="player-button" onClick={togglePlayerActive}></button>
    
      <div className ={isPlayerActive ? "showing player-wrapper" : "hidden player-wrapper"}>

        <button className = "nav-item" onClick={toggleDancing}>{isDancing ? "Dancing" : "Dance"}</button>
        <div className={isDancing ? "player-wrapper animated1 shake" : "player-wrapper"}>
          <ReactPlayer
            url={musicURLs[0]}
            className="react-player"
            // playing
            width="100%"
            height="70px"
            controls={false}
          />
        </div>
        <div className={isDancing ? "player-wrapper animated2 shake" : "player-wrapper"}>
          <ReactPlayer
            url={musicURLs[1]}
            className="react-player"
            // playing
            width="100%"
            height="70px"
            controls={false}
          />
        </div>
        <div className={isDancing ? "player-wrapper animated3 shake" : "player-wrapper"}>
          <ReactPlayer
            url={musicURLs[2]}
            className="react-player"
            // playing
            width="100%"
            height="70px"
            controls={false}
          />
        </div>
  
        <button className="rocks-button" onClick={toggleRocks}>{isRocks ? "Hide Rhythm Rocks" : "Make your own beat with Rhythm Rocks"}</button>
        
        <div className={isRocks ? "showing rocks-button" : "hidden"}>
          <div className="resume-flex">
            <Iframe url="https://ericfrancey.github.io/Rhythm-Finder/"
              width="32%"
              height="844px"
              id=""
              className="scaled"
              display="block"
              position="relative"/>
            <div className="player-rocks-info"> Rhythm Rocks! View this project's repo on the projects tab.</div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Player;