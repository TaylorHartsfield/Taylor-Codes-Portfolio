import { Container } from "react-bootstrap";

export default function About(){
    return (
      <div className="content-container">
        <Container className="about">
            <h3 className="text-center mx-auto">About Me</h3>
            <p style={{textAlign:"center"}}>Under construction! Check out my <a href="https://github.com/TaylorHartsfield">GITHUB</a> for the latest projects.
                    <br/>Use the contact page to get in touch!
                    <br/> Want to know a little about my past life?<br/> <a href="https://www.youtube.com/watch?v=vy4U4TL-GTw">Watch me sing and dance!</a></p>
        </Container>
        </div>
       
    )
}