import ReactPlayer from "react-player"
import "./playerStyle.css"
import React, { useState, useEffect, useRef } from 'react';

function Player() {

  const [isPlayerActive, setPlayerActive] = useState(false);
  const togglePlayerActive = () => setPlayerActive(!isPlayerActive)
  // const switchID = document.querySelector("#player-switch-id");

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

  // useEffect(() => {
  //   setTimeout(() => {
  //       setLoading(false);
  //    }, 3000);
  //   },[]);
    
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


  // if (isLoading) {
  //   return (
  //   <div className="bg-dark loading-message">Loading music player {console.log("loading state")}</div>
  //   );
  // }

  return (
    <div className ="bg-dark loading-message">
      <button onClick={togglePlayerActive}>{isPlayerActive ? "Hide Music Player" : "Show Music Player"}</button>
      <div id = "player-switch-id" className ={isPlayerActive ? "showing" : "hidden"}>
        <div className="player-wrapper animated1 shake">
          <ReactPlayer
            url={musicURLs[0]}
            className="react-player"
            playing
            width="100%"
            height="70px"
            controls={false}
          />
        </div>
        <div className="player-wrapper animated2 shake">
          <ReactPlayer
            url={musicURLs[1]}
            className="react-player"
            playing
            width="100%"
            height="70px"
            controls={false}
          />
        </div>
        <div className="player-wrapper animated3 shake">
          <ReactPlayer
            url={musicURLs[2]}
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