import { Container} from "react-bootstrap";
import {projects} from './allprojects';
import ProjectCard from "./projectcard";

export default function Projects(){
    
        return (
        
            <div className="content-container"> 
              <Container className="projects">
              <h3 className="text-center mx-auto"
               style={{
                paddingTop: "1.5%"
              }}>
                View My Projects
                </h3>
              
                <div className="cards">
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