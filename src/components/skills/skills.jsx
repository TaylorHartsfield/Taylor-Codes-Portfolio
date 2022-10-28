import Stack from '.././assets/stack.gif';
import { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import {backend} from './backend';
import { frontend } from './frontend';
import { tools } from './tools';

export default function Skills(){

    const [backendStack, setBackendStack] = useState('Python')
    const [frontendStack, setFrontendStack] = useState('React')
    const [toolsStack, setToolsStack] = useState('Git')


    useEffect(()=>{
        const interval = setInterval(() => {

            const beRandom = Math.floor(Math.random()*{backend}.backend.length)
            const feRandom = Math.floor(Math.random()*{frontend}.frontend.length)
            const toolsRandom = Math.floor(Math.random()*{tools}.tools.length)

            setBackendStack({backend}.backend[beRandom])
            setFrontendStack({frontend}.frontend[feRandom])
            setToolsStack({tools}.tools[toolsRandom])
            
        }, 2000);
        return () => clearInterval(interval);


    }, []);

    return (

        <div className="content-container">
        <Container className="projects">
        <h1 className="text-center mx-auto">Tech Stack</h1>
            <Row>
                <Col>
                    <div className="language">{backendStack}</div>
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