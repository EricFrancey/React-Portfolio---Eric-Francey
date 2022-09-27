import "./Projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useRef } from 'react';
import githubCardImg from "../.././assets/github2.jpg";
import cardimg from "../.././assets/fogbeach.png"
import rhythmCard from "../.././assets/rhythmrocks.jpg";
import visionCard from "../.././assets/visiontest.jpg"
import zooCard from "../.././assets/zoologic.jpg";




export default function Projects() {
  const [isCurious, setCurious] = useState(false);
  const toggleCurious = () => setCurious(!isCurious)

  return (
    <div className = {isCurious ? "curious" : ""}>
      <h1 className='header'>Projects</h1>
      <div onClick={toggleCurious} className = "not-curious">Sharp eye! Click me!</div>
        <div className='grid-container bg-dark'>
          <Card className='grid-item top-card invert'>
            <Card.Img variant="top" src={githubCardImg} />
            <Card.Body>
            <Card.Title  className='github'>GitHub</Card.Title>
            <Card.Text>
              Visit my GitHub page! Browse both my personal projects and my work done with University of Toronto: School of Continuing Studies.
            </Card.Text>
              <a href="https://github.com/ericfrancey" target="_blank" rel="noreferrer">
                <Button variant="success">GitHub</Button>
              </a>
            </Card.Body>
          </Card>

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
    </div>
  );
}