import Stack from '.././assets/stack.gif';
import { Col, Row, Container } from 'react-bootstrap';


export default function Skills(){

    return (

        <div className="content-container">
        <Container className="projects">
        <h1 className="text-center mx-auto">View My Projects</h1>
               <h1>Tech Stack</h1>
               <img className="techstack" src={Stack} alt="techstack gif"/>
           
        
            {/* <Row style={{margin: "none"}}>
                <Col>
                <ul className="listOfLang">
                    <li className="language" >Python</li>
                    <li className="language" >Flask</li>
                    <li className="language" >SQLAlchemy</li>
                    <li className="language">Jinja</li>
                    <li className="language">PostgreSQL</li>
                    <li className="language">SQL</li>
                </ul>
                </Col>
                <Col>
                <ul>
                    <li className="languageF">React</li>
                    <li className="languageF">JavaScript</li>
                    <li className="languageF">HTML</li>
                    <li className="languageF">CSS</li>
                    <li className="languageF">jQuery</li>
                    <li className="languageF">AJAX</li>
                    <li className="languageF">Bootstrap</li>
                </ul>
                </Col>
                <Row>
                    <Col></Col>
                <Col>
                    <img className="techstack" src={Stack} alt="techstack gif"/>
                </Col>
                <Col></Col>
                </Row>
            </Row> */}
        </Container>
        </div>
        
    )

    
}