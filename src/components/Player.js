import React from 'react';
import ReactPlayer from "react-player"
import "./playerStyle.css"

const musicStyle = {
    backgroundSize: "60px 120px"
  }

const musicURLs = ["https://soundcloud.com/game-game-game/jungle-japes-donkey-kong-64-soundtrack",
                   "https://soundcloud.com/blacksabbath/war-pigs"
]

let currentURL;

function Player() {
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
    
const hidePlayer = event => {
  event.currentTarget.classList.add('hidden');
}

    return (
      <div className =" bg-dark">
        <button onClick={hidePlayer}>Hide Music Player</button>;
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
    );
}
  
  export default Player;
