import Stack from '.././assets/stack.gif';
import { Col, Row, Container } from 'react-bootstrap';


export default function Skills(){

    return (

        <div className="content-container">
        <Container>
            <Row>
                <Col></Col>
                <Col>
                <h1>Tech Stack</h1></Col>
                <Col></Col>
            </Row>
            <Row>
                <ul className="listOfLang">
                    <li className="language">Github| </li>
                    <li className="language">Git| </li>
                    <li className="language">AWS| </li>
                    <li className="language">SQL| </li>
                    <li className="language">Agile/SCRUM| </li>
                    <li className="language">Jinja| </li>
                    <li className="language">Bootstrap| </li>
                    <li className="language">jQuery| </li>  
                    <li className="language">HTML| </li>
                    <li className="language">CSS| </li> 
                    <li className="language">JSON| </li> 
                    <li className="language">AJAX| </li>
                    <li className="language">PostgreSQL| </li>
                    <li className="language">Flask| </li>
                    <li className="language">SQLAlchemy| </li> 
                    <li className="language">JavaScript| </li>  
                    <li className="language">React| </li>
                    <li className="language">Python </li>
                </ul>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                    <img className="techstack" src={Stack} alt="techstack gif"/>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        </div>
        
    )

    
}