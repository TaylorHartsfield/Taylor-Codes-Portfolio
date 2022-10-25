import { Container } from "react-bootstrap";
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
            <div>
            <h3>Message recieved! Thanks for getting in touch!</h3>
            <em>taylormhartsfield@gmail.com</em>
            </div>
        )
    }
    
    function MessageError(){
        <h3>
            Whoops! Something went wrong here. Please try again or e-mail me directly at:
            <em>taylormhartsfield@gmail.com</em>
        </h3>
    }


    return (
        <div className="content-container">
        <Container className="contact">
            <h3 className="text-center mx-auto">Get In Touch</h3>
            {messageError? <MessageError />: null}
            {messageSent ? <MessageSent/> : <>

            <div className="contact-me">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            </div>
</>}
               
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
            </Container>
        </div>)
  
}