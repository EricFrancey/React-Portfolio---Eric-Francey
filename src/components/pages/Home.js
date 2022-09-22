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
      <h1 className='background'>I'm Eric George Zytaruk-Francey</h1>
      <img className = 'img-thumbnail m-5 profile-image' style = {styles} src = {image} alt = "profile"></img>
  
    <p className = 'intro-blurb ml-3'>
      Hey, I'm Eric.
    </p>
  </div> 
  );  
}