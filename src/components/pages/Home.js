import './main.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Icon } from '@iconify/react';
import React from 'react';
import rhythmCard from "../.././assets/rhythmrocks.png";
import visionCard from "../.././assets/visiontest.png"
import zooCard from "../.././assets/zoologic.jpg";
import cardimg from "../.././assets/fogbeach.png"
import Contact from './Contact';
import Resume from './Resume';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const image = require('../../assets/profilephoto.jpg');

export default function Home() {
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
            <div className='eric-info-under'>&emsp;  Skilled in CSS, JavaScript, Node, React, Bootstrap, and GraphQL with experience implementing many front-end and back-end development frameworks and libraries.</div>
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

       <div className='eric-info-under'>&emsp;  A little about me: I like to make music, skateboard, game and code. I have recently begun my professional programming career, and I intend to have a long and interwoven experience with the coming decades of software development. Prior to web development, I spent years as a professional tour guide, speaker and salesperson across Ontario. </div>
        
      
        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Work and Education <div className='skills-title-under'>&emsp; I come from a background in psychology, sales and tourism. These days, I spend my time reading and writing code. I'm open to freelance work and collaborative personal projects.</div></div>
        </AnimationOnScroll>

        <div className='home-project-flex'>
        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
        <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">Psychology</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="icon-park-twotone:degree-hat" />
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>
       
            <div className='flex'>
              <div className = "skill-name">Full Stack Web Developer</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="grommet-icons:certificate" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Freelance Coder</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="icon-park:code-computer" />          
                <div className="outer">
                  <div className='inner'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Captain</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="akar-icons:boat" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
            
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>


            
            <div className='flex'>
              <div className = "skill-name">Driver</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="cil:bus-alt" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
            
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Speaker</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="ph:microphone-stage-duotone" />         
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
            
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Tour Guide</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="emojione-monotone:lion-face" /> 
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
            
               
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>

        <Card className='grid-item following-card'>
            <Card.Img variant="top" src={rhythmCard} />
            <Card.Body>
              <a href="https://ericfrancey.github.io/Rhythm-Rocks/" target="_blank" rel="noreferrer">
                <Button variant="success">Rhythm Rocks</Button>
              </a>
            <Card.Text>
              Drum sequencer written in vanilla HTML, CSS, and JavaScript. Set your drum pattern and speed, save your own presets, and more!
            </Card.Text>
            </Card.Body>
        </Card>
          </div>

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Languages & Tools <div className='skills-title-under'>&emsp; Though some are more familiar than others, I like to use a variety of avenues to get the job done. What do you suggest?</div></div>
        </AnimationOnScroll>

        <div className='home-project-flex'>
        <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">HTML</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:html-5" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>
       
            <div className='flex'>
              <div className = "skill-name">CSS</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:css-3" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">JavaScript</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:javascript" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">SQL</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="bi:filetype-sql" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>


            
            <div className='flex'>
              <div className = "skill-name">Python</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:python" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Git</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="fa-brands:git" />         
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Node</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:nodejs" /> 
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Heroku</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:heroku-icon" />         
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">VS Code</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:visual-studio-code" />         
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">FL Studio</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="fad:logo-fl" />         
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

          </div>
        </AnimationOnScroll>

        <Card className='grid-item following-card'>
            <Card.Img variant="top" src={visionCard} />
            <Card.Body>
              <a href="https://ericfrancey.github.io/Vision-Test/" target="_blank" rel="noreferrer">
                <Button variant="success">Vision Test</Button>
              </a>
            <Card.Text>
              Test your vision with a dynamic perspective image - use classic vision test images or drag in your own photos.
            </Card.Text>
            </Card.Body>
          </Card>
</div>
    

        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Libraries & Frameworks <div className='skills-title-under'>&emsp; It's important to keep up with the latest and greatest. For now, I have a focus on React and GraphQL. </div></div>
        </AnimationOnScroll>

        <div className='home-project-flex'>
                  <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">Bootstrap</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:bootstrap" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>
       
            <div className='flex'>
              <div className = "skill-name">Tailwind</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:tailwindcss-icon" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
               
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">React</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:react" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">jQuery</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:jquery" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
               
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">GraphQL</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:graphql" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">MongoDB</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="logos:mongodb" />         
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Animate.css</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:animation" /> 
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
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
              (In Progress) Designed to help conservation and documentation efforts. A full-stack application built with React.js and GraphQL. 
            </Card.Text>
            </Card.Body>
          </Card>
</div>
        <AnimationOnScroll animateIn="animate__backInRight">
          <div className="skills-title"> Hobbies & Interests <div className='skills-title-under'>&emsp; Always learning and doing something new. Recently, I've been trying to polish my skills in piano and music production. I make cool video game music and hip-hop beats!</div></div>
        </AnimationOnScroll>
      
         
        <div className='home-project-flex'>
                  <AnimationOnScroll className='skill-before' animateIn="animate__backInLeft">
          <div className='skills'>
            <div className='flex'>
              <div className = "skill-name">Skateboarding</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="material-symbols:skateboarding-sharp" />        
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
               
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>
       
            <div className='flex'>
              <div className = "skill-name">Gaming</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="akar-icons:game-controller" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
               
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Music Production</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="ri:sound-module-fill" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
               
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>

            <div className='flex'>
              <div className = "skill-name">Piano</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="game-icons:grand-piano" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
               
                <div className='skill-point-off'></div>
                <div className='skill-point-off'></div>
              </div>
            </div>


            
            <div className='flex'>
              <div className = "skill-name">Monkeys</div>
              <div className='skill-item space flex'>
                <Icon className='scaling' icon="emojione-monotone:monkey" />          
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
                <div className="outer-skill-point">
                  <div className='inner-skill-point'></div>
                </div>
              </div>
            </div>

          </div>
        </AnimationOnScroll>

        <Card className='grid-item following-card'>
            <Card.Img variant="top" src={cardimg} />
            <Card.Body>
              {/* <a href="#" target="_blank" rel="noreferrer"> */}
                <Button variant="success">Future Project</Button>
              {/* </a> */}
            <Card.Text>
              ... 
            </Card.Text>
            </Card.Body>
          </Card>
      </div>
    </div>
  
      <Resume></Resume>
      <Contact></Contact>
  </div> 
  );  
}


