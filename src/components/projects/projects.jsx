import { Container } from "react-bootstrap";
import { useState } from "react";
import ProjectCard from "./projectcard";
import { projects } from "./allprojects";

export default function Projects(){

        const [projects, allProjects] = useState()
        
        return (
            <div className="content-container">
              <Container className="projects">
                  <h3 className="text-center mx-auto">View My Projects</h3>
                  <p style={{textAlign:"center"}}>
                    Under construction! Check out my <a href="https://github.com/TaylorHartsfield">GITHUB</a> for the latest projects.
                    <br/>
                    PS: This entire site is a project of mine. Have a look around!
                    <br/>
                    PPS: Here is a fun little <a href="https://taylorhartsfield.github.io/trafficlight/">🚦</a> I made.
                    <br/>
                    PPPS: And of course a <a href="https://taylorhartsfield.github.io/ReactWeatherApp/">🌦</a> app! Because every new dev needs one!
                    <br/>
                    <bold>PPPPS: Use the contact page to get in touch!</bold>
                    </p>
              </Container>
              </div>
             
          )
    
}