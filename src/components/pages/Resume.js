import React from 'react';

const resume1 = require('../../assets/resume1.png');
const resume2 = require('../../assets/resume2.png');
const resume3 = require('../../assets/resume3.png');
const resume4 = require('../../assets/resume4.png');


export default function Resume() {
  return (
    <div>
      <h1 className='header header-resume'>Resume</h1>
      <div className='tst'>
        <div className='resume-flex'>
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
          </div>
          <div>
            <div className='resume5'>
              <img className = 'img-thumbnail' src = {resume4} alt = "profile"></img>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
