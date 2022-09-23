import React from 'react';
import ReactPlayer from "react-player"
import "./playerStyle.css"

const musicStyle = {
  backgroundSize: "60px 120px"
}
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className =" bg-dark">
        <div className="player-wrapper">
          <ReactPlayer style={musicStyle}
            url="https://soundcloud.com/game-game-game/jungle-japes-donkey-kong-64-soundtrack?si=0461d412c75e44a383110296ce99786a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            className="react-player"
            playing
            width="100%"
            height="100px"
            controls={false}
          />
        </div>
      <p> Eric Francey</p>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >Eric Francey
            </a>
          </li>
          <li className="nav-item bg-dark">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >Contact
            </a>
          </li>
        </ul>
     </div>  
  );
}

export default NavTabs;