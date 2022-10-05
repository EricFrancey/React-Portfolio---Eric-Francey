import React from 'react';
import './Resume.css';

const resume1 = require('../../assets/resume1.jpg');
const resume2 = require('../../assets/resume2.jpg');
const resume3 = require('../../assets/resume3.jpg');
const resume4 = require('../../assets/resume4.jpg');
const resume5 = require('../../assets/resume5.jpg');

export default function Resume() {

  return (
    <div>
      <h1 className='header-resume'>Resume</h1>
        <div className='resume-flex bg-dark'>
          <div>
            <div className='resume1'>
              <img className = 'img-thumbnail' src = {resume1} alt = "profile"></img>
            </div>
            <div className='resume1'>
              <img className = 'img-thumbnail' src = {resume2} alt = "profile"></img>
            </div>
            <div className='resume1'>
              <img className = 'img-thumbnail' src = {resume3} alt = "profile"></img>
            </div>
            <div className='resume1'>
              <img className = 'img-thumbnail' src = {resume4} alt = "profile"></img>
            </div>
          </div>
          <div>
            <div className='resume5'>
              <img className = 'img-thumbnail' src = {resume5} alt = "profile"></img>
            </div>
          </div>
        </div>
      </div>
  );
}