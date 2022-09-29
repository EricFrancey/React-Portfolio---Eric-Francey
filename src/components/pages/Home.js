import React, { useEffect } from 'react';
import './Home.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Icon } from '@iconify/react';

const image = require('../../assets/profilephoto.jpg');

export default function Resume() {

  const styles = {
    marginLeft: '1rem',
    width: '600px',
    height: '600px',
  };

  return (
    <div>
      <h1 className='header-home'>Eric George Zytaruk Francey</h1>

      <div className='profile-image'>
        <img className = 'img-thumbnail m-5' style = {styles} src = {image} alt = "profile"></img>
      </div>

      <p className = 'intro-blurb ml-3'>
        Hey! I'm Eric! Check out my projects page, or scroll down for my stats page.
      </p>

      <div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="game-icons:juggling-clubs" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="fluent:scan-type-24-filled" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="ant-design:read-outlined" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="fa6-solid:microphone-lines" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="akar-icons:game-controller" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="mdi:minecraft" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="game-icons:greek-temple" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="akar-icons:music" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="game-icons:grand-piano" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="game-icons:drum-kit" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="fad:logo-fl" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="fad:logo-reaper" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:blender" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:visual-studio-code" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="fa-brands:git" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="akar-icons:github-fill" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:html-5" />
          </AnimationOnScroll>
        </div>

        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:css-3" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:javascript" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon=" logos:jquery" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon=" logos:react" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon=" logos:python" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:bootstrap" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:tailwindcss-icon" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="bi:filetype-sql" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="bi:filetype-json" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:graphql" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:mysql" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:nodejs" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:sequelize" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:mongodb" />
          </AnimationOnScroll>
        </div>
        <div className='space'>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <Icon className='scaling' icon="logos:heroku-icon" />
          </AnimationOnScroll>
        </div>
    </div>
  </div> 
  );  
}
