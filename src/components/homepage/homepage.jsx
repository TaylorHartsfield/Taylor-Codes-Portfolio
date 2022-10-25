import Name from "./name";
import {Container, Row, Col} from 'react-bootstrap';
import Headshot from '../assets/headshot.jpeg';

export default function Homepage(){

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
                    <Col>
                    <Name />
                    </Col>
                </Row>
            </Container>
          
        </div>
    )
}