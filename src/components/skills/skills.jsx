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
                <Row>
                    <Col xl={6} l={6} md={6} s={12} xs={12}>
                       
                        <div className="fullstack">
                        <Row>
                            <div className="language">{backendStack}</div>
                        </Row>
                        <Row style={{
                            margin: "5%"
                        }}>
                            <div className="language">{frontendStack}</div>
                        </Row>
                        <Row>
                            <div className="language">{toolsStack}</div>
                         </Row>
                        </div>
                    </Col>
                    <Col xl={6} l={6} md={6} s={12} xs={12}>
                        <img className="techstack" src={Stack} alt="techstack gif"/>
                    </Col>
                    
                </Row>
            </Container>
        </div>
        
    )

    
}