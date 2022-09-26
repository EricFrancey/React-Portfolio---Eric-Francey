import React from 'react';
import "./Projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import githubCardImg from "../.././assets/github.jpg";
import cardimg from "../.././assets/fogbeach.png"

export default function Projects() {
  return (
    <div>
      <h1 className='header'>Projects</h1>
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
            <Card.Img variant="top" src={cardimg} />
            <Card.Body>
            <Card.Title>Rhythm Rocks</Card.Title>
            <Card.Text>
              Drum sequencer written in vanilla HTML, CSS, and JavaScript. Set your drum pattern and speed, save your own presets, and more!
            </Card.Text>
              <a href="https://ericfrancey.github.io/Rhythm-Finder/" target="_blank" rel="noreferrer">
                <Button variant="success">Rhythm Rocks</Button>
              </a>
            </Card.Body>
          </Card>

          <Card className='grid-item' style={{ width: '24rem', height: '36rem' }}>
            <Card.Img variant="top" src={cardimg} />
            <Card.Body>
            <Card.Title>Vision Test</Card.Title>
            <Card.Text>
              Test your vision with a dynamic perspective image - use classic vision test images or drag in your own photos.
            </Card.Text>
              <a href="https://ericfrancey.github.io/drag-drop-photo-editor/" target="_blank" rel="noreferrer">
                <Button variant="success">Vision Test</Button>
              </a>
            </Card.Body>
          </Card>

          <Card className='grid-item' style={{ width: '24rem', height: '36rem' }}>
            <Card.Img variant="top" src={cardimg} />
            <Card.Body>
            <Card.Title>ZooLogic</Card.Title>
            <Card.Text>
              Designed to help conservation and documentation efforts. A full-stack application built with React.js and GraphQL. 
            </Card.Text>
              <a href="https://ericfrancey.github.io/ZooLogic/" target="_blank" rel="noreferrer">
                <Button variant="success">ZooLogic</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
}