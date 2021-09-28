import React, { useState } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { BiHome, BiUser, BiFileBlank, BiBookOpen, BiBookContent} from "react-icons/bi"

function CustomNav(props){

    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    function handleClick(target){
      setContactSelected(false);
      setPortfolioSelected(false);
      setAboutSelected(false);
      setResumeSelected(false);

      if (target===0){
        setContactSelected(true);
      }
      if (target===1){
        setAboutSelected(true);
      }
      if(target===2){
        setPortfolioSelected(true);
      }
      if(target===3){
        setResumeSelected(true);
      }
    }

  return (
    <header className="fixed-top header-scrolled">
      <Container class="nav-container">
      <Navbar bg="dark" variant="dark" className="nav-menu">
        <h1 class="logo">
        <Nav.Link onClick={() => handleClick(1)}><span>Lukas</span> </Nav.Link>
        </h1>
        <ul>
          <li>
            {contactSelected ? (
                  <><Nav.Link id="nav-selected"><span>Contact</span></Nav.Link></>
                ) : (
                  <><Nav.Link onClick={() => handleClick(0)}><span>Contact</span> </Nav.Link></>
                )
            }
          </li>
          <li>
            {aboutSelected ? (
                  <><Nav.Link id="nav-selected"><span>About Me</span></Nav.Link></>
                ) : (
                  <><Nav.Link onClick={() => handleClick(1)}><span>About Me</span> </Nav.Link></>
                )
            }
          </li>
          <li>
            {portfolioSelected ? (
                  <><Nav.Link id="nav-selected"><span>Portfolio</span></Nav.Link></>
                ) : (
                  <><Nav.Link onClick={() => handleClick(2)}><span>Portfolio</span> </Nav.Link></>
                )
            }
          </li>
          <li>
            {resumeSelected ? (
                  <><Nav.Link id="nav-selected"><span>Resume</span></Nav.Link></>
                ) : (
                  <><Nav.Link onClick={() => handleClick(3)}><span>Resume</span> </Nav.Link></>
                )
            }
          </li>
          </ul>
      </Navbar>
      </Container>
    </header>
  )}

export default CustomNav;