import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer'

import {Container} from "react-bootstrap";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return(
    <div>
    <Container>
      <CustomNav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}></CustomNav>
    </Container>
      <main>
        <Container>
        {contactSelected ? (
          <>
            <Contact></Contact>
          </>
        ) : (
          <></>
        )}
        {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <></>
        )}
        {portfolioSelected ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) : (
          <></>
        )}
        {resumeSelected ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <></>
        )}
        </Container>
      </main>
      <Container>
      <Footer></Footer>
      </Container>
      </div>
  )
}

export default App;
