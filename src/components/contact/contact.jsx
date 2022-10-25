import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [messageSent, setMessageSent] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y1exa7t', 'template_kqan4af', form.current, 'wH8VqXns5KriulWat')
          .then((result) => {
              console.log(result.text);
              setMessageSent(true);
          }, (error) => {
              console.log(error.text);
              setMessageError(true);
          });
      }

    function handleGithub(){
        window.open("https://github.com/TaylorHartsfield", "_blank")
    }
   
    function handleLinkedIn(){
        window.open("https://linkedin.com/in/TaylorMHartsfield", "_blank")
    }

    function handleYouTube(){

        window.open("https://www.youtube.com/watch?v=T5ZozcJGobc&list=PL4n4VHJ7Pj_AhvDLaUozrTFcZfdtZRJp8")
    }

    function MessageSent(){
        return (
            <div style={{textAlign:"center"}}>
            <h3 style={{textAlign:"center"}}>Message recieved! Thanks for getting in touch!</h3>
            </div>
        )
    }
    
    function MessageError(){
        return(
        <p style={{textAlign:"center"}}>
            Whoops! Something went wrong here. Please try again or e-mail me directly at:<br/>
            <em>taylormhartsfield@gmail.com</em>
        </p>)
    }


    return (
        <div className="content-container">
        <Container className="contact">
            <Row>
            <h3 style={{
                paddingTop: "1em",
                paddingBottom: ".3em",
                fontSize: "40px",
                color:"#001858",
            }}
            className="text-center mx-auto">Get In Touch</h3>
            </Row>
            <Row>
                <Col>
                <Row style={{marginBottom: "1em"}}></Row>
                {messageError? <MessageError /> :
                <p className="reachout">
                    I would love to hear from you!<br/>
                    I am open to full-time positions, freelance work, or a quick chat.<br/>
                    Please include details about your project and the best way for me to get in touch with you!<br />
                    XOXO,
                    Taylor

                </p>}
                <div style={{
                    alignContent:"cetnter",
                    textAlign:"center",
                    justifyContent:"center"
                }}>
            <div className="mb-4">
            <i style={{
                padding:"0.5em",
                animationIterationCount: "3",
                }}
                className="fa-brands fa-linkedin fa-2xl fa-bounce" 
                onClick={handleLinkedIn}></i>
            <i style={{
                animationIterationCount: "3",
                }}
                onClick={handleGithub} 
                className="fa-brands fa-github fa-2xl fa-bounce"></i>
            <i 
                onClick={handleYouTube}
                style={{
                padding:"0.5em",
                animationIterationCount: "3",
                }}
                className="fa-brands fa-youtube fa-2xl fa-bounce"></i>
            </div>
            </div>
                </Col>
                <Col className="contact-me">
                {messageSent ? <MessageSent/> : <>
                <form ref={form} onSubmit={sendEmail}>
                    <h4><label>Name</label></h4>
                    <input type="text" name="from_name" required/>
                    <h4><label style={{paddingTop: ".3em"}}>Email</label></h4>
                    <input type="email" name="user_email" required/>
                    <h6><label>Message</label></h6>
                    <textarea name="message" required rows="4" cols="50"/><br />
                    <input className="submit-button" type="submit" value="Send" />
                </form>
        
</>}
                </Col>
            
            </Row>
        
            </Container>
        </div>)
  
}