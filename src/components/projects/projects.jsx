import { Container } from "react-bootstrap";
import {projects} from './allprojects';
import ProjectCard from "./projectcard";

export default function Projects(){
    
        return (
            <div className="content-container">
              <Container className="projects">
                  <h3 className="text-center mx-auto">View My Projects</h3>
                  <div className="card">
                  {projects.map((project) => {
                    return (
                      <ProjectCard 
                      project={project} />
                    );
                  })}
                  </div>
              </Container>
              </div>
             
          )
    
}