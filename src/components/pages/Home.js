import React from 'react';
import './Home.css';

const image = require('../../assets/profilephoto.jpg');

export default function Resume() {

  const styles = {
    marginLeft: '1rem',
    width: '250px',
    height: '250px',
  };

  return (
    <div className='row'>
      <h1 className='background'>Eric George Zytaruk Francey</h1>
      <div className='profile-image'>
        <img className = 'img-thumbnail m-5' style = {styles} src = {image} alt = "profile"></img>
      </div>
      <p className = 'intro-blurb ml-3'>
        Hey! I'm Eric! While you browse, choose some music from the top bar (new songs daily).
      </p>
  </div> 
  );  
}