import { Page, Document } from 'react-pdf/dist/esm/entry.webpack';
import TaylorResume from "../assets/TaylorResume.pdf";
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume(){

    function handleOnClick(){
        fetch(TaylorResume).then(respose => {
            respose.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = TaylorResume;
                alink.click();
            })
        })
    }


    return(
       <Container style={{
       }}>
        <Row>
            <Col></Col>
            <Col>
                <button onClick={handleOnClick}>Download Resume PDF</button>
            </Col>
            <Col></Col>
        
        <Row>
            <Col></Col>
            <Col>
                <Document file = {TaylorResume}>

                    <Page pageNumber={1}/>
              
                </Document>
            </Col>
            <Col></Col>
            </Row>
        </Row>
        </Container>
    )
}