import './main.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Icon } from '@iconify/react';
// import Button from 'react-bootstrap/Button';
import React from 'react';

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
      <div className='character-card'>
        <div className='home-main resume-flex'>
          <div className='profile-image'>
            <img className = 'img-thumbnail' src = {image} alt = "profile"></img>
            <div className='profile-image-under'> Level 30 Humanoid</div>
          </div>
          <div className=''>
            <div className="eric-info"> Hey! I'm Eric! Check out my projects page, or scroll down to learn more about me.</div>
            <div className='eric-info-under'>&emsp;  This character is skilled in CSS, JavaScript, Node, React, Bootstrap, and GraphQL with experience implementing many front-end and back-end development frameworks and libraries.</div>
            <div className = "eric-info-under">Minor Skills: Psychology, Charisma, Lion Whispering, FL Studio, Reaper, Python.</div>
            <div className = "eric-info-under">Special Ability: equilibrioception</div>
            <div className = "eric-info-under">Weakness: deuteranopia</div>
          </div>
        </div>
      </div>
      
      <div>
          <button className='back-to-top'onClick={scrollToTop}>Back to top</button>
      </div>

      <div className = "scrolldown">
      <div className='skill-points-available'> Skill Points Available: 
        <div className='skill-point-flex'>
            <div className="outer">
              <div className='inner'></div>
            </div>
       </div>&emsp;x unlimited
      </div>

       <div className='eric-info-under'>&emsp;  A little about me: I like to make music, skateboard, game and code. I have recently begun my professional programming career, and I intend to have a long and interwoven experience with the coming decades of software development. </div>
        
        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Hobbies and Interests <div className='skills-title-under'>&emsp; Always learning and doing something new. Recently, I've been trying to polish my skills in piano and music production. I make cool video game music and hip-hop beats!</div></div>
        </AnimationOnScroll>
        
        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">hello</div>
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
            </div>
       
            <div className='flex'>
              <div className = "skill-name">hello</div>
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
            </div>

            <div className='flex'>
              <div className = "skill-name">hello</div>
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
            </div>

            <div className='flex'>
              <div className = "skill-name">hello</div>
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
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Front-end <div className='skills-title-under'>&emsp; I have developed a comfortable style of my own when it comes to front-end development. I love to collaborate on use and design ideas, and am always open to try new frameworks. What do you suggest?</div></div>
        </AnimationOnScroll>

        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:html-5" />          
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
            </div>
       
            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:css-3" />          
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
            </div>

            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:javascript" />          
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
            </div>

            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:python" />          
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
            </div>


            
            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:visual-studio-code" />          
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
            </div>

            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="fa-brands:git" />         
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
            </div>

            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:bootstrap" /> 
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
            </div>

            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:tailwindcss-icon" />         
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
            </div>

          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Back-end <div className='skills-title-under'>&emsp; Always trying to keep up with the latest and greatest, I am familiar with SQL, MongoDB, and GraphQL. </div></div>
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
          <div className="skills-title"> Work and Education <div className='skills-title-under'>&emsp; Prior to web and software development, I enjoyed a career in public speaking as a presenter and tour guide across Ontario. At Toronto Harbour Tours and African Lion Safari, I became the confident speaker I am today.</div></div>
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

      
            <Icon className='scaling' icon=" logos:jquery" />
            <Icon className='scaling' icon=" logos:react" />

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


