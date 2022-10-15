import React from 'react';
import Iframe from 'react-iframe'

export default function Contact() {
  return (
    <div className="flex">
     <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSe51-6ZS9nYlR2Itc2u1xJSCoUFK7dVNhr3XXgcPBgOlhCylQ/viewform?embedded=true"
      width="640"
      height="1179"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      id=""
      className="scaled"
      display="block"
      position="relative"/>
    <div className="player-rocks-info"> Rhythm Rocks! View this project's repo on the projects tab.</div>
  </div>
  );
}
