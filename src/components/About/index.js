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
          <h2> Full Stack Web Developer and Music Software Designer </h2>
          <div className="image-box">
          <Image className="cover-image" src={coverImage}/>
          </div>
          </Container>
          <div className="my-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
          </p>
          </div>
      </section>
      </Container>
    )
  }
  
  export default About