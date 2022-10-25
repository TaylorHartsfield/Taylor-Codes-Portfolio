import Name from "./name";
import {Container, Row, Col} from 'react-bootstrap';
import Headshot from '../assets/headshot.jpeg';

export default function Homepage(){
    
    const beginning = new Date("January 20, 2022");
    const current = new Date()
    const days = Math.floor(((current - beginning)/(1000*60*60*24)))


    return (
        <div className="homepage">
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
                        xl={{span: 16, order: 1 }}
                        >
                            <img src={Headshot} alt="headshot" style={{
                                borderRadius: "50%",
                                width: "400px",
                                height: "400px",
                                border: "solid",
                                borderColor: "#a786df",
                                borderWidth: "10px",
                                boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                            }}/>
                      
                    </Col>
                    <Col xs={{span: 12, order:1}} 
                         sm={{span: 12, order:1 }} 
                         md={{span: 12, order:1 }} 
                         lg={{span: 6, order:2 }} 
                         xl={{span: 16, order:2 }}>
                        <Name />
                        <h4 style={{
                            fontSize: "4vh",
                            paddingBottom: "1em"}}>
                        Full Stack Developer</h4>
                        <p>It's been <bold style={{color:"#078080"}}>{days} days</bold> since I wrote my first 'Hello World'!</p>
                    </Col>
                    </Row>
            
                </Container>
        </div>
       
    )
}