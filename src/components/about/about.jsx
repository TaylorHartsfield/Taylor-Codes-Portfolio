import { Container, Row, Col} from "react-bootstrap";
import Skills from "../skills/skills";
import LeanrningCounter from "../homepage/learningCounter";
import {useRef} from 'react';

export default function About(){

    const tech = useRef(null);

    function handleOnClick(){
      tech.current?.scrollIntoView({behavior: "smooth"})
    }


    return (
     <>
      <div className="content-container">
       
         <Col></Col>
         <Col xl={9} l={9} md={12} s={12} xs={12}>
         <Container className="about">
            <h3 className="text-center mx-auto" style={{
              paddingTop: "1.5%"
            }}>
              Hey there 👋🏼
            </h3>
            <p style={{textAlign:"left", lineHeight:"1.5"}}>
              I'm Taylor!
              I'm a <strong>Full Stack Software Engineer</strong> based in the Western slope of Colorado.<br/>
              <p style={{
                marginTop: "1%",
              }}> My other titles include: </p>
              <ul>
                <li style={{
                margin: "none",
              }}>Wife 🏳️‍🌈</li>
                <li>Dog Mom 🐶</li>
                <li>Coffeeholic ☕️</li>
                <li>Recovering Theatre Major 🎭</li>
              </ul>
              One of my earliest memories of the internet is my dad showing me this <a className="videoLink" href="https://www.youtube.com/watch?v=GMgsFZ4rkEI" target="_blank"><strong>video</strong></a>. ⚠️<br/>
              But not even that could scare me away from my love for computers.<br/>
              It took me over 20 years to realize that I could combine my creative passions with my love for 
              problem solving and become a Software Engineer.<br/>
              I have spent the last <em><strong style={{color: "#078080"}}>{<LeanrningCounter />}</strong></em> days learning to 
              code through self-education and completing an accelerated full stack
              Software Engineering Program at <strong><a className="hb" href="https://hackbrightacademy.com/">Hackbright Academy</a>.</strong><br/>
              My dream is to build software that leaves a positive impact on the world both at a local and global scale.<br />
              Currently, I am focused on building with <strong>Python</strong> and <strong>React</strong>. While you're here, check out all of my current <button 
              onClick={handleOnClick}
              className="projectButton">
                <strong>TECHNOLOGIES</strong>
              </button> and <a className="projectButton" href="https://taylorcodes.com/#/projects">
                PROJECTS
              </a>. <br/>
              
              Thanks for stopping by! 💜
            </p>
            </Container>
            </Col>
            <Col></Col> 
          
      
          
       
      </div>

      <div className="content-container">
        <Container 
        style={{margin: "3em"}}
        ref={tech}>
          <Col></Col>
          <Col>
          <Skills />
          </Col>
          <Col></Col>
        </Container>
</div>
  
      </>
       
       
    )
}