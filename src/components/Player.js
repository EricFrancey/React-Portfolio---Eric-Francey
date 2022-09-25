import ReactPlayer from "react-player"
import "./playerStyle.css"
import React, { useState, useEffect } from 'react';


function Player() {
  const musicStyle = {
    backgroundSize: "60px 120px"
  }

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

  const [playerStatus, setPlayerHidden] = useState('showing');
  // const [playerSwitchText, setSwitchText] = useState('Hide Music Player')

  // useEffect(() => {
  //   const switchID = document.querySelector("#player-switch-id");
  //   if (switchID.classlist.contains("hidden")) {
  //     setPlayerHidden("showing")
  //     setSwitchText("Hide Music Player")
  //   }

  //   if (switchID.classlist.contains("showing")) {
  //     setPlayerHidden("hidden")
  //     setSwitchText("Show Music Player")
  //   }
  // },[]);

  // let playerSwitch;


  const hidePlayer = () => {
    setPlayerHidden("hidden")
    // setSwitchText("Show Music Player")
    // playerSwitch = showPlayer;
  }
  const showPlayer = () => {
  setPlayerHidden("showing")
  // setSwitchText("Hide Music Player")
  // playerSwitch = hidePlayer;
  }

// let playerSwitch = hidePlayer;
// let playerSwitch = hidePlayer;

  return (
    <div className ="bg-dark">
      <button onClick={hidePlayer}>Hide Music Player</button>
      <button onClick={showPlayer}>Show Music Player</button>
      <div id = "player-switch-id" className ={playerStatus}>
        <div className="player-wrapper">
          <ReactPlayer style={musicStyle}
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
