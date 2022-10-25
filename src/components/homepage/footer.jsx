import { MDBCardFooter } from "mdb-react-ui-kit";

export default function StyledFooter(){
    function handleGithub(){
        window.open("https://github.com/TaylorHartsfield", "_blank")
    }
   
   function handleLinkedIn(){
       window.open("https://linkedin.com/in/TaylorMHartsfield", "_blank")
   }

   function handleYouTube(){

    window.open("https://www.youtube.com/watch?v=T5ZozcJGobc&list=PL4n4VHJ7Pj_AhvDLaUozrTFcZfdtZRJp8")
   }
    return (
        <footer 
        className="text-right" 
        style={{
            textAlign: "right",
            alignContent: "right",
            textAnchor:"bottom",

        }}>
            <section className="mb-4">
            <i style={{
                padding:"0.5em",
                animationIterationCount: "3",
            }}
            className="fa-brands fa-linkedin fa-2xl fa-bounce" 
            onClick={handleLinkedIn}></i>
            <i 
            style={{
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
            </section>
        </footer>)
  
}