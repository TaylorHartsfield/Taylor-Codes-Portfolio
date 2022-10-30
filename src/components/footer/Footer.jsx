import {Container, Col, Row} from 'react-bootstrap';
import Github from "../assets/github.png";
import LinekdIn from "../assets/linkedin.png";
import YouTube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";

export default function Footer(){

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
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                <img className="footeritem" src={Github} onClick={handleGithub}/>
                <img className="footeritem" src={LinekdIn} onClick={handleLinkedIn}/>
                    </Col>
                    <Col>
                    <h6 style={{textAlign:"center", paddingTop: ".8em"}}>
                        Designed and Coded with 💜 by<br/> TAYLOR CODES
                    </h6>
                    </Col>
                <Col style={{textAlign:"right"}}>
                <img className="footeritem" src={Instagram} onClick={handleInstagram}/>
                <img className="footeritem" src={YouTube} onClick={handleYouTube}/>
                </Col>
                </Row>
            </Container>
        </div>
    )
}