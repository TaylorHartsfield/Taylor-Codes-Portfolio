import Stack from '.././assets/stack.gif';
import { useState, useEffect, useRef } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import {backend} from './backend';
import { frontend } from './frontend';
import { tools } from './tools';

export default function Skills(){

    const [backendStack, setBackendStack] = useState('PYTHON')
    const [frontendStack, setFrontendStack] = useState('REACT')
    const [toolsStack, setToolsStack] = useState('AWS')

    let be = useRef(0)
    let fe = useRef(0)
    let to = useRef(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            
            setBackendStack({backend}.backend[be.current])
            setFrontendStack({frontend}.frontend[fe.current])
            setToolsStack({tools}.tools[to.current])


            be.current = be.current + 1
            fe.current = fe.current + 1
            to.current = to.current + 1

            if (be.current === {backend}.backend.length) {
                be.current = 0
            }

            if (fe.current === {frontend}.frontend.length) {
                fe.current = 0
            }

            if (to.current === {tools}.tools.length) {
                to.current = 0
            }
            
        }, 5000);

        return () => clearInterval(interval);


    }, []);

    return (

        <div className="content-container">
        <Container>
            <Row style={{
                margin: "3%",
            }}>
                <Col>
                <div className="fadeIn">
                    <div className="language">{backendStack}</div>
                    </div>
                </Col>
                <Col>
                    <div className="language">{frontendStack}</div>
                </Col>
                <Col>
                    <div className="language">{toolsStack}</div>
                </Col>

                </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <img className="techstack" src={Stack} alt="techstack gif"/>
                        </Col>
                        <Col></Col>
                    </Row>
        </Container>
        </div>
        
    )

    
}