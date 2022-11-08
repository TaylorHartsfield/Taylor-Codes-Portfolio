import {Container, Row} from 'react-bootstrap';



export default function Footer(){
    return (
        <div className="footer">
            <Container>
                <Row style={{textAlign: "right"}}>
                    <p style={{textAlign:"right"}}>
                        Coded with 💜 by TAYLOR CODES
                    </p>
                </Row>
            </Container>
        </div>
    )
}