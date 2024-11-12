import React from 'react'
import logo1 from "../Assets/logo1.png";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../components/Particle';
import Reveal from 'react-reveal/Reveal'; 
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeindesign,
} from "react-icons/si";
import{ FiFigma } from "react-icons/fi"
import { LightSpeed,Flip } from 'react-reveal';


export default function About() {
  return (
    <div className="work-div" style={{display:"flex"}} >
    <Container fluid className="home-about-section" id="about">
    <Particle />
      <Container>
      
        <Row  style={{paddingBottom:"100px"}}>
        
          <Col md={8} className="home-about-description">
          <Flip bottom cascade>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Art and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="blue">Illustration, Caricature and Arts. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Art Technologies and Products </b> and
                also in areas related to{" "}
                <b className="blue">
                  Deep Art Learning and Natural Art Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for Creating Art
              with my <b className="blue"> Hands </b> and {" "}
              <i>
                <b className="blue">
                  {" "}
                  Computer Softwares
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> Adobe and Photoshop</b>
              </i>
            </p>
            </Flip>
          </Col>
          
          
          
          <Col md={4} className="myAvtar" style={{marginTop: "100px"}}>
          <Reveal effect="fadeInRight">
            <Tilt>
              <img src={logo1} className="img-fluid" alt="avatar" />
            </Tilt>
            </Reveal>
          </Col>
          
        </Row>
        </Container>

        <Container style={{paddingBottom:"50px"}}>
        <Row  >
          <Col>
            <h2 >Skills</h2>
            </Col>
        </Row>

        <Row>
        
          <Col  className='skill_icon' style={{border:"double", padding:"10px", margin:"10px",transition: "2s"}}>
          <LightSpeed left cascade>
            <SiAdobeaftereffects   size={70} />
            </LightSpeed>
          </Col>

          <Col  className='skill_icon' style={{border:"double", padding:"10px", margin:"10px",transition: "2s"}}>
          <LightSpeed left cascade>
           <SiAdobepremierepro size={70} />
           </LightSpeed>
          </Col>

          <Col   className='skill_icon' style={{border:"double", padding:"10px", margin:"10px",transition: "2s"}}>
          <LightSpeed left cascade>
          < SiAdobeillustrator  size={70}/>
          </LightSpeed>
          </Col>
        
          <Col  className='skill_icon' style={{border:"double", padding:"10px", margin:"10px",transition: "2s"}}>
          <LightSpeed left cascade>
            <SiAdobeindesign  size={70}/>
            </LightSpeed>
          </Col>

          <Col className='skill_icon'style={{border:"double", padding:"10px", margin:"10px",transition: "2s"}}>
          <LightSpeed left cascade>
            <FiFigma  size={70}/>
            </LightSpeed>
          </Col>
          
        </Row>
      </Container>
    </Container>
    </div>
  )
}
