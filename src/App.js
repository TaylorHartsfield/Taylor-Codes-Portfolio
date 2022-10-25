import './App.css';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/Nav';
import Projects from './components/projects/projects';
import {Route, Routes} from "react-router-dom";
import {Container} from './components/styles/Container.styled';
import {useRef} from 'react';


function App() {

  const about = useRef(null) 
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return ( 
    
    <Container>
        <Navbar />
        <div className="homepage">
          <Routes>
            <Route path="/" element= {<Homepage />} />
            <Route path="/about" element= {<About />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          </div>
          <div className="about">
          <About />
          </div>
          <div className="about">
          <Projects />
          </div>
          <div className="about">
          <Contact />
          </div>
        </Container>
 


  )
}

export default App;
