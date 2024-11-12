import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import profile from "../Assets/profile.jpg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";



export default function Navi() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

  }

  window.addEventListener("scroll", scrollHandler);
    return (
      <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/">
        <img
                src={profile}
                alt="logo"
                className="img-fluid"
                style={{ height: "40px" , width:"40px" , margin:"10px"}}
              />
            VFA
          </Navbar.Brand>


        <Navbar.Toggle  aria-controls="responsive-navbar-nav" 
        onClick={() => {updateExpanded(expand ? false : "expanded");
          }} >
        <span></span>
          <span></span>
          <span></span>
          </Navbar.Toggle >
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className = "responsive-navbar-nav ml-auto ">
          <Nav.Link className = "responsive-navbar-nav ml-auto " as={Link}
                to="/home"><AiOutlineHome style={{ marginBottom: "2px" }} /> Home</Nav.Link>
          
            <Nav.Link className = "responsive-navbar-nav ml-auto " as={Link}
                to="/work"><AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                /> Work</Nav.Link>
                
            <Nav.Link className = "responsive-navbar-nav ml-auto "  as={Link}
                to="/about"><AiOutlineUser style={{ marginBottom: "2px" }} /> About </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    )
  
}
