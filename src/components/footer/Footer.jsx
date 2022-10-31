import {Container, Col, Row} from 'react-bootstrap';


export default function Footer(){
    return (
        <div className="footer">
            <Container>
                <Row style={{textAlign: "center"}}>
                    <p style={{textAlign:"center"}}>
                        Coded with 💜 by TAYLOR CODES
                    </p>
                  
                </Row>
            </Container>
        </div>
    )
}