import {Container, Row, Col} from 'react-bootstrap';
import Headshot from '../assets/headshot.jpeg';
import LeanrningCounter from "./learningCounter";
import Github from "../assets/github.png";
import LinekdIn from "../assets/linkedin.png";
import YouTube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";

export default function Homepage(){


    function handleGithub (){
        window.open('https://github.com/taylorhartsfield', "_blank")
    }
    function handleLinkedIn(){
        window.open('https://linkedin.com/in/taylormhartsfield', "_blank")
    }
    
    function handleYouTube() {
        window.open('https://www.youtube.com/watch?v=T5ZozcJGobc&list=PL4n4VHJ7Pj_AhvDLaUozrTFcZfdtZRJp8', '_blank')
    }

    function handleInstagram(){
        window.open('https://www.instagram.com/tmwhitlow/', '_blank')
    }

    return (
       <div className="homepage-container">
            <Container className="homepage">
                <Row>
                    <Col xs={{span: 12, order: 2}} 
                        sm={{span: 12, order:2 }} 
                        md={{span: 12, order:2 }} 
                        l={{span: 6, order: 1 }} 
                        xl={{span: 6, order: 1 }}
                        style={{
                            textAlign: "center"}}>
                        <img className="headshot" src={Headshot} alt="headshot"
                        style={{
                            width: "70vw",
                            height: "70vh"
                           }}/>
                    </Col>
                    <Col xs={{span: 12, order:1}} 
                         sm={{span: 12, order:1 }} 
                         md={{span: 12, order:1 }} 
                         l={{span: 6, order:2 }} 
                         xl={{span: 6, order:2 }}
                         style={{
                            textAlign: "center"}}
                        >
                         <h1
                            style={{fontSize: "6vh",
                                    textAlign:"center"}}>
                            Taylor Hartsfield
                        </h1>
                        <h4 style={{
                            textAlign: "center",
                            fontSize: "4vh",
                            color: "#172c66"}}>
                        Software Engineer
                        </h4>
                        <div className="socials">
                        <p
                        style={{textAlign: "center",
                                display:"inline",
                                fontSize: '1.5em'}}>
                        It's been <strong style={{color:"#078080"}}>{<LeanrningCounter />} days </strong>
                        since I wrote my first 'Hello World'!</p>
                        </div>
                        <div className="socials">
                            <img className="footeritem" src={Github} alt="github" onClick={handleGithub}/>
                            <img className="footeritem" src={LinekdIn}  alt="linkedin" onClick={handleLinkedIn}/>
                            <img className="footeritem" src={Instagram}   alt="instagram" onClick={handleInstagram}/>
                            <img className="footeritem" src={YouTube}   alt="youtube" onClick={handleYouTube}/>
                        </div>

                      
                    </Col>
                    </Row>
            
                </Container>
                </div>
    
       
    )
}