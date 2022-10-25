import './main.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Icon } from '@iconify/react';
// import Button from 'react-bootstrap/Button';
import React from 'react';
import Iframe from 'react-iframe'
import rhythmCard from "../.././assets/rhythmrocks.jpg";
import visionCard from "../.././assets/visiontest.jpg"
import zooCard from "../.././assets/zoologic.jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const resume1 = require('../../assets/resume1.jpg');
const resume2 = require('../../assets/resume2.jpg');
const resume3 = require('../../assets/resume3.jpg');
const resume4 = require('../../assets/resume4.jpg');
const resume5 = require('../../assets/resume5.jpg');




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
      <div>
        <button className='back-to-top'onClick={scrollToTop}>Back to top</button>
      </div>
      <div>
        <button className='back-to-top-mobile'onClick={scrollToTop}><Icon icon="cil:arrow-top" /></button>
      </div>

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
      
   

      <div className = "scrolldown">
      <div className='skill-points-available'> Skill Points Available: 
        <div className='skill-point-flex'>
            <div className="outer-main-point">
              <div className='inner-main-point'></div>
            </div>
       </div>&emsp;x unlimited
      </div>

       <div className='eric-info-under'>&emsp;  A little about me: I like to make music, skateboard, game and code. I have recently begun my professional programming career, and I intend to have a long and interwoven experience with the coming decades of software development. </div>
        
      
        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Hobbies and Interests <div className='skills-title-under'>&emsp; Always learning and doing something new. Recently, I've been trying to polish my skills in piano and music production. I make cool video game music and hip-hop beats!</div></div>
        </AnimationOnScroll>

        <div className='home-project-flex'>
        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">hello</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
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

        <Card className='grid-item following-card'>
            <Card.Img variant="top" src={rhythmCard} />
            <Card.Body>
              <a href="https://ericfrancey.github.io/Rhythm-Finder/" target="_blank" rel="noreferrer">
                <Button variant="success">Rhythm Rocks</Button>
              </a>
            <Card.Text>
              Drum sequencer written in vanilla HTML, CSS, and JavaScript. Set your drum pattern and speed, save your own presets, and more!
            </Card.Text>
            </Card.Body>
        </Card>
          </div>

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Languages & Tools <div className='skills-title-under'>&emsp; I have developed a comfortable style of my own when it comes to front-end development. I love to collaborate on use and design ideas, and am always open to try new frameworks. What do you suggest?</div></div>
        </AnimationOnScroll>

        <div className='home-project-flex'>
        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">HTML</div>
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
              <div className = "skill-name">CSS</div>
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
              <div className = "skill-name">JavaScript</div>
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
              <div className = "skill-name">SQL</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="bi:filetype-sql" />          
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
              <div className = "skill-name">Python</div>
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
              <div className = "skill-name">Git</div>
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
              <div className = "skill-name">Node</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:nodejs" /> 
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
              <div className = "skill-name">Heroku</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:heroku-icon" />         
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
              <div className = "skill-name">VS Code</div>
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

          </div>
        </AnimationOnScroll>




        <Card className='grid-item following-card'>
            <Card.Img variant="top" src={visionCard} />
            <Card.Body>
              <a href="https://ericfrancey.github.io/drag-drop-photo-editor/" target="_blank" rel="noreferrer">
                <Button variant="success">Vision Test</Button>
              </a>
            <Card.Text>
              Test your vision with a dynamic perspective image - use classic vision test images or drag in your own photos.
            </Card.Text>
            </Card.Body>
          </Card>
</div>
    

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Libraries & Frameworks <div className='skills-title-under'>&emsp; Always trying to keep up with the latest and greatest, I am familiar with SQL, MongoDB, and GraphQL. </div></div>
        </AnimationOnScroll>

        <div className='home-project-flex'>
                  <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">Bootstrap</div>
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
              <div className = "skill-name">Tailwind</div>
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

            <div className='flex'>
              <div className = "skill-name">React</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:react" />          
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
              <div className = "skill-name">jQuery</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:jquery" />          
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
              <div className = "skill-name">GraphQL</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:graphql" />          
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
              <div className = "skill-name">MondoDB</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:mongodb" />         
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
              <div className = "skill-name">Animate.css</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:animation" /> 
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

        <Card className='grid-item following-card'>
            <Card.Img variant="top" src={zooCard} />
            <Card.Body>
              <a href="https://ericfrancey.github.io/ZooLogic/" target="_blank" rel="noreferrer">
                <Button variant="success">ZooLogic</Button>
              </a>
            <Card.Text>
              Designed to help conservation and documentation efforts. A full-stack application built with React.js and GraphQL. 
            </Card.Text>
            </Card.Body>
          </Card>
</div>
        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Work and Education <div className='skills-title-under'>&emsp; Prior to web and software development, I enjoyed a career in public speaking as a presenter and tour guide across Ontario. At Toronto Harbour Tours and African Lion Safari, I became the confident speaker I am today.</div></div>
        </AnimationOnScroll>
        
{/* 
        <Icon className='scaling' icon="bx:swim" />
                <Icon className='scaling' icon="game-icons:jump-across" />
                <Icon className='scaling' icon="emojione-monotone:monkey" />
                <Icon className='scaling' icon="ph:microphone-stage-duotone" />
                <Icon className='scaling' icon="game-icons:juggling-clubs" />
                <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />  */}
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

      
      
   
    
           
         */}
    
    </div>
  


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


        <h1 className=' header header-contact'>Contact Me</h1>
        <div className="resume-flex">
          <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSe51-6ZS9nYlR2Itc2u1xJSCoUFK7dVNhr3XXgcPBgOlhCylQ/viewform?embedded=true"
            width="100%"
            height="900"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            id=""
            className="scaled"
            display="block"
            position="relative"/>
            <div className="contact-me-info">Contact me! I'm open to work and personal collaboration.</div>
        </div>
  
  </div> 
  );  
}


