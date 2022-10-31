import './dolly.css';
import Quotes from "./dollyquotes.json";
import DollyImg from "./dollyimg/dolly.png";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useRef } from "react";


export default function DollyChat() {

    const [quote, setQuote] = useState(getQuote())

    const quotes = useRef(null)
    const top = useRef(null)

    function getQuote(){
        return Quotes.dollyQuotes[(Math.floor(Math.random()*((Quotes.dollyQuotes.length))))]
    }

    function handleOnClick(){
        const random_quote = getQuote()
        setQuote(random_quote)
        quotes.current?.scrollIntoView({behavior: "smooth"})
    }   

    function backToTop() {
        top.current?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div ref={top}>
        <div className="content-container">
            <Container>
                <Row>
            <h1
            style={{textAlign: "center"}}>
                What Would Dolly Do?
            </h1>
            </Row>
            <Row style={{textAlign: "center", alignContent:"center"}}>
                <Col></Col>
                <Col>
            <button className="dollyButton" 
                    type="button" 
                    onClick={handleOnClick}>
                        Share Some Wisdom!
            </button>
            </Col>
            <Col></Col>
            </Row>
                <Row>
                    <Col>
                        <img 
                        src={DollyImg} alt="Dolly Parton"/>
                    </Col>
                    <Col ref={quotes} style={{textAlign: "center", paddingTop: "3em"}}>
                        <p 
                        className="dollyQuotes">
                            {quote}
                        </p>
                        <button className="dollyButton top" 
                                type="button" 
                                onClick={backToTop}>
                                Thanks, Dolly!
                        </button>
                    </Col>
                </Row>
                
            </Container>
        </div>
    </div>
    )

}