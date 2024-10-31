import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import about from './imagens/OIP.jfif';
import self from './imagens/SELF.jpeg';
import './styles/my_styles.css'; 

function About() {
 
  return (
  <div className='componente-seguinte'>
    
    <div>
    <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
        
          <h2 style={{ textAlign: 'left' }}>About me</h2>
          <p style={{ textAlign: 'justify' }}>Hello! My name is Anderson Filho, and I am 23 years old. I am currently pursuing my studies in Computer Engineering at the esteemed Federal University of Uberlândia (UFU). Since I was young, I have been captivated by technology and its limitless possibilities, which motivated me to delve deeper into this ever-evolving field. My academic journey has provided me with a solid foundation in essential topics, ranging from algorithms and data structures to software development and machine learning. Additionally, I have been actively involved in research projects and extracurricular activities that have enriched my learning experience and allowed me to apply my knowledge in practical settings.
          </p>
          <p style={{ textAlign: 'justify' }}>I am motivated by a passion to make a meaningful contribution to projects that expand the limits of what is achievable in Computer Engineering. I am enthusiastic about seizing new opportunities that will enhance my skills, and I invite you to connect with me as we embark on an exciting journey through the constantly evolving tech landscape. Together, let’s explore the thrilling possibilities that await us in the world of Computer Engineering.
          </p>
          <br />
          <h4 style={{ textAlign: 'left' }}>Skill</h4>
          <ul>
            <li style={{ textAlign: 'left' }} ><strong>Backend:</strong> C, Python, C# </li>
            <li style={{ textAlign: 'left' }}><strong>Frontend:</strong> JavaScript, HTML, React, CSS </li>
            <li style={{ textAlign: 'left' }}><strong>Banco de dados:</strong> PostGresql </li>
            <li style={{ textAlign: 'left' }}><strong>Cloud Computing:</strong> Architecture AWS </li>
            <li style={{ textAlign: 'left' }}><strong>Business Intelligence:</strong> PowerBI </li>
          </ul>
          <br />
        
        </div>
           
      </div>      
    </div>  
    </div>
    </div>  
   
  );
}

export default About;
