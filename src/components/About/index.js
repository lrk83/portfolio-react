import React from "react";
import coverImage from "../../assets/images/1564436137954.jpg"
import {Image} from "react-bootstrap";

function About() {

    return (
      <section className="my-3">
        <h1 id="about">Lukas Keel</h1>
        <h2> Full Stack Web Developer and Music Software Designer </h2>
        <div className="image-box">
        <Image className="cover-image" src={coverImage}/>
        </div>
        <div className="my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
        </div>
      </section>
    )
  }
  
  export default About