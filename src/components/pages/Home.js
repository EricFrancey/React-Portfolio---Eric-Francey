import React, { useEffect } from 'react';
import './main.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';

const image = require('../../assets/profilephoto.jpg');

export default function Resume() {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'

    });
  };
  
  return (
    <div>
      <h1 className='header header-home'>Eric George Zytaruk Francey</h1>
        <div className='home-main resume-flex'>
          <div className='profile-image'>
            <img className = 'img-thumbnail' src = {image} alt = "profile"></img>
            <div className='profile-image-under'> Level 30 Humanoid</div>
          </div>
          <div className=''>
          <div className="eric-info"> Hey! I'm Eric! Check out my projects page, or scroll down to learn more about me.</div>
          <div className='eric-info-under'>&emsp;  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          {/* <div className = "eric-info-under">Special Ability</div>
          <div className = "eric-info-under">equilibrioception</div>
          <div className = "eric-info-under">Weakness</div>
          <div className = "eric-info-under">deuteranopia</div> */}
          </div>
         
        </div>
      
        <div>
          <Button className="back-to-top" onClick={scrollToTop} variant="success">Back to top</Button>
        </div>

   

    
      <div className = "scrolldown">
      <div className='skill-points-available'> Skill Points Available: 
          <div className='skill-point-flex'>
            <div className="outer">
              <div className='inner'></div>
            </div>
       </div>
       x 8</div>
        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-blurb"> Hey! I'm Eric! Check out my projects page, or scroll down to learn more about me.</div>
        </AnimationOnScroll>

        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div>Skills 1</div>

              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />          
                <div className="outer">
                  <div className='inner'></div>
                </div>

                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:juggling-clubs" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
         
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="ph:microphone-stage-duotone" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
        
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="emojione-monotone:monkey" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:jump-across" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
           
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="bx:swim" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
          
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-blurb"> Hey! I'm Eric! Check out my projects page, or scroll down to learn more about me.</div>
        </AnimationOnScroll>

        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div>Skills 2</div>

              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />          
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:juggling-clubs" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
         
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="ph:microphone-stage-duotone" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
        
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="emojione-monotone:monkey" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:jump-across" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
           
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="bx:swim" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
          
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className='skills'>
            <div>Skills 3</div>

              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />          
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:juggling-clubs" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
         
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="ph:microphone-stage-duotone" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
        
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="emojione-monotone:monkey" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:jump-across" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
           
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="bx:swim" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
          
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInLeft">
          <div className='skills'>
            <div>Skills 4</div>

              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />          
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:juggling-clubs" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
         
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="ph:microphone-stage-duotone" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
        
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="emojione-monotone:monkey" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
       
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:jump-across" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
           
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="bx:swim" />
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
              </div>
          
          </div>
        </AnimationOnScroll>

              {/* emojione-monotone:lion-face
        emojione-monotone:monkey
        ph:microphone-stage-duotone
        emojione-monotone:balance-scale
        game-icons:body-balance
        bi:soundwave
        entypo:sound-mix
        cil:bus-alt
        akar-icons:boat
        emojione-monotone:locomotive
        game-icons:rat
        mdi:snowboard */}
        {/* 
            <Icon className='scaling' icon="fluent:scan-type-24-filled" />
            <Icon className='scaling' icon="ant-design:read-outlined" />
            <Icon className='scaling' icon="fa6-solid:microphone-lines" />
            <Icon className='scaling' icon="akar-icons:game-controller" />
            <Icon className='scaling' icon="mdi:minecraft" />
            <Icon className='scaling' icon="game-icons:greek-temple" />
            <Icon className='scaling' icon="akar-icons:music" />
            <Icon className='scaling' icon="game-icons:grand-piano" />
            <Icon className='scaling' icon="game-icons:drum-kit" />
            <Icon className='scaling' icon="fad:logo-fl" />
            <Icon className='scaling' icon="fad:logo-reaper" />
            <Icon className='scaling' icon="logos:blender" />
            <Icon className='scaling' icon="logos:visual-studio-code" />
            <Icon className='scaling' icon="fa-brands:git" />
            <Icon className='scaling' icon="akar-icons:github-fill" />
            <Icon className='scaling' icon="logos:html-5" />
            <Icon className='scaling' icon="logos:css-3" />
            <Icon className='scaling' icon="logos:javascript" />
            <Icon className='scaling' icon=" logos:jquery" />
            <Icon className='scaling' icon=" logos:react" />
            <Icon className='scaling' icon=" logos:python" />
            <Icon className='scaling' icon="logos:bootstrap" />
            <Icon className='scaling' icon="logos:tailwindcss-icon" />
            <Icon className='scaling' icon="bi:filetype-sql" />
            <Icon className='scaling' icon="bi:filetype-json" />
            <Icon className='scaling' icon="logos:graphql" />
            <Icon className='scaling' icon="logos:mysql" />
            <Icon className='scaling' icon="logos:nodejs" />
            <Icon className='scaling' icon="logos:sequelize" />
            <Icon className='scaling' icon="logos:mongodb" />
            <Icon className='scaling' icon="logos:heroku-icon" />
         */}
    </div>
  </div> 
  );  
}
