import React, {useState, useEffect} from "react";
import {Card, Button,Col, Container} from "react-bootstrap";
import logo from "../../assets/images/github.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio(){

    const [work] = useState([
        {   name: 'the Backbeat',
            id: 'theBackBeat-Img-Element',
            description: 'MERN Stack',
            link: 'https://the-backbeat.herokuapp.com/',
            github: 'https://github.com/lrk83/the-backbeat'
        },
        {
            name: 'Gopher 2.0',
            id: 'GopherTwo-Img-Element',
            description: 'Node.js, SQL, Handlebars, Express, Dcrypt, Dotenv',
            link: 'https://thawing-fortress-75852.herokuapp.com/',
            github:"https://github.com/lrk83/Gopher-2.0"
        },
        {
            name: "Tech Blog",
            id: "TechBlog-Img-Element",
            description: "Node.js, SQL, Hanldebars, Express, Bcrypt, Dotenv",
            link: "https://lrk83-tech-blog.herokuapp.com/",
            github:"https://github.com/lrk83/Tech-Blog" 
        },
        {
            name: 'Gopher',
            id: 'Gopher-Img-Element',
            description: 'JS, HTML, CSS, Server Side APIs',
            link: 'https://lrk83.github.io/Gopher/',
            github: 'https://github.com/lrk83/Gopher'
        },
        {
            name: "Weather Dashboard",
            id: "WeatherDash-Img-Element",
            description: "JS, HTML, CSS, Server Side APIs",
            link: 'https://lrk83.github.io/Weather-Dashboard/',
            github: 'https://github.com/lrk83/Weather-Dashboard'
        },
        {   
            name: "Workday Scheduler",
            id: "WorkDay-Img-Element",
            description: "HTRML, Bootstrap, JQuery",
            link: "https://lrk83.github.io/Work-Day-Scheduler/",
            github: "https://github.com/lrk83/Work-Day-Scheduler/"

        },
        {
            name: "Code Quiz",
            id: "CodeQuiz-Img-Element",
            description: "HTML, Bootstrap, JS",
            link: "https://lrk83.github.io/Code-Quiz/",
            github: "https://github.com/lrk83/Code-Quiz"
        },
        {
            name: "Run Buddy",
            id: "RunBuddy-Img-Element",
            description: "HTML, CSS",
            link:"https://lrk83.github.io/run-buddy/",
            github:"https://github.com/lrk83/run-buddy"
        },
    ])

    useEffect(()=>{
        AOS.init({
          duration: 2000
        });
      });


    return(
        <Container className="outer-container">
            <div className="my-3">
        <div data-aos="fade-in" data-aos-delay="200" >
            <h1 className="my-work">
                Examples of my Work
                </h1>
        <section className="my-3" >
        <div className="portfolio-div">
            {work.map((example, i)=>(
                <Card key={example.name} id={example.id} className="WorkCard">
                    <Col className="img-col">
                        <div className="img-class" ></div>
                    </Col>
                    <Card.Body>
                        <Col>
                            <Card.Text>
                                {example.description}
                            </Card.Text>
                        </Col>
                        <div>
                        <Button variant="primary" href={example.link}>{example.name}</Button><a href={example.github} className="github-link"><img src={logo} alt="github link"/></a>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
        </section>
        </div>
        </div>
        </Container>
    )
}

export default Portfolio;