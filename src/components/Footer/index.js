import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

function Footer(){
    return(
            <footer>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Collapse >
                    <Nav id="footer-nav">
                      <Nav.Link href="https://github.com/lrk83" target="_blank"> github </Nav.Link>
                      <Nav.Link href="https://www.linkedin.com/in/lukas-keel/" target="_blank"> linkedIn </Nav.Link>
                      <Nav.Link href="https://www.youtube.com/channel/UC8U0XY-hO52WWZgOkIW8aWg" target="_blank"> Music </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </footer>
          )}


export default Footer;