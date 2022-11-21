import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1 className='header header-resume'>Resume</h1>
      <div className='tst'>
        <object data="https://docs.google.com/document/d/1zRsz5wOTBTKaPqbEXzqjucoBclcT745D-GbL3bOfzFw/edit?usp=sharing" type="application/pdf" width="100%" height="100%">
          <p className='resume-alt-text'>Didn't load? Click here to go<a href="https://docs.google.com/document/d/1zRsz5wOTBTKaPqbEXzqjucoBclcT745D-GbL3bOfzFw/edit?usp=sharing">to the PDF!</a></p>
        </object>
      </div>
    </div>
  );
}
