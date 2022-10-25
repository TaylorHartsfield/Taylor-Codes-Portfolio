import Name from "./name";
import {Container, Row, Col} from 'react-bootstrap';
import Headshot from '../assets/headshot.jpeg';

export default function Homepage(){
    
    const beginning = new Date("January 20, 2022");
    const current = new Date()
    const days = Math.floor(((current - beginning)/(1000*60*60*24)))


    return (
        <div>
            <Container style={{
                margin: "0",
                alignContent: "center",
                justifyContent: "center",
                paddingTop: "20%",
            }}>
                <Row>
                    <Col>
                        <div className="img-holder">
                            <img src={Headshot} alt="" style={{
                                borderRadius: "50%",
                                width: "400px",
                                height: "400px",
                                border: "solid",
                                borderColor: "#a786df",
                                borderWidth: "10px",
                            }}></img>
                        </div>
                    </Col>
                    <Col style={{
                        paddingTop: "4em"
                    }}>
                        <Name />
                        <p>Full Stack Developer</p>
                        <p>It's been {days} days since I wrote my first 'Hello World'!</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}