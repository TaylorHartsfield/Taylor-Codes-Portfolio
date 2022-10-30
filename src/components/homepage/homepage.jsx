import Name from "./name";
import {Container, Row, Col} from 'react-bootstrap';
import Headshot from '../assets/headshot.jpeg';
import LeanrningCounter from "./learningCounter";

export default function Homepage(){

    return (
       <div className="homepage-container">
            <Container style={{
                margin: "0",
                alignContent: "center",
                justifyContent: "center",
                paddingTop: "15%", 
            }}>
                <Row>
                    <Col xs={{span: 12, order:2 }} 
                        sm={{span: 12, order:2 }} 
                        md={{span: 12, order:2 }} 
                        lg={{span: 6, order: 1 }} 
                        xl={{span: 6, order: 1 }}
                        >
                            <img src={Headshot} alt="headshot" 
                            style={{
                                borderRadius: "50%",
                                width: "auto",
                                maxWidth: "400px",
                                height: "auto",
                                maxHeight: "400px",
                                border: "solid",
                                borderColor: "#a786df",
                                borderWidth: "10px",
                                dropShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                            }}/>
                    </Col>
                    <Col xs={{span: 12, order:1}} 
                         sm={{span: 12, order:1 }} 
                         md={{span: 12, order:1 }} 
                         lg={{span: 6, order:2 }} 
                         xl={{span: 6, order:2 }}>
                        <Name />
                        <h4 style={{
                            fontSize: "4vh",
                            paddingBottom: "2em"}}>
                        Full Stack Developer</h4>
                        <p className="text-center text-sm-start" style={{display:"inline"}}>It's been <bold style={{color:"#078080"}}>{<LeanrningCounter />} days</bold> since I wrote my first 'Hello World'!</p>
                    </Col>
                    </Row>
            
                </Container>
                </div>
    
       
    )
}