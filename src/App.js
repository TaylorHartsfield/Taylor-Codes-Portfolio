import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import NB from './components/navbar/Nav';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import {Route, Routes} from "react-router-dom";
import Resume from './components/resume/resume';
import {Container} from 'react-bootstrap';
import Skills from './components/skills/skills';



function App() {


  return ( 
    <>
    
    <Container>
    <NB/>
          <Routes>
            <Route path="/" element= {<Homepage />} />
            <Route path="/about" element= {<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
      </Container>
    </>
  )
}

export default App;
