import React, { useEffect } from "react";
import coverImage from "../../assets/images/1564436137954.jpg"
import {Container, Image} from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{
    AOS.init({
      duration: 2000
    });
  });

    return (
      <Container className="outer-container">
      <section className="my-3">
        <Container data-aos="fade-in" data-aos-delay="300">
          <h1 id="about">Lukas Keel</h1>
          <h2> Full Stack Web Developer </h2>
          <div className="image-box">
          <Image className="cover-image" src={coverImage}/>
          </div>
          </Container>
          <div className="my-2">
            <p>
            Full Stack Web Developer with a background in the humanities and a unique perspective on tailoring the MERN stack to support creative and easy to use websites. Earned a certificate in Full Stack Web Development from the University of Texas Coding Boot Camp. Focussed on structuring back-end databases to smoothly serve end-user interactions, and designing mobile-first intuitive front-ends. A creative problem-solver with a conceptual orientation.
          </p>
          </div>
      </section>
      </Container>
    )
  }
  
  export default About