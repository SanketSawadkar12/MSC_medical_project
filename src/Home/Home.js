import React from 'react'
import { Container, Row, Col ,Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particle from '../components/Particle';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    
    <div className='home-div' >
      

       <Particle />
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
          
            
            
            <Reveal effect="fadeInUp">
              <h1 style={{ color:"#222831"  , border:"20px"  }} className="heading">
                MEDICAL INSURANCE COST PREDICTION 
                
              </h1>

              
               <h2 style={{color:"#31363F",fontStyle:"italic",fontWeight: "400"}}>
               
              <Typewriter
      options={{
        strings: [
          "Protecting Your Health, Securing Your Future.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}/>
     </h2>

              </Reveal>
              <Row>
                <Col style={{paddingTop:'14%'}}>
                <Link to="/age">
                  
                  <Button style={{fontSize:'50px'}} className='btnprdct'>Predict Your Insurance</Button>
                 
                  </Link>
                
                </Col>
              </Row>

              <Row>
                <Col style={{paddingTop:'19.1%'}}>
                </Col>
              </Row>
            
            
            
          
        

        </Container>
      </Container>
      
      </div>

  )
}
