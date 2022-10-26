import './App.css';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import NB from './components/navbar/Nav';
import Projects from './components/projects/projects';
import {Route, Routes} from "react-router-dom";
import Resume from './components/resume/resume';
import {Container} from 'react-bootstrap';


function App() {


  return ( 
    <><NB/>
    <Container>
          <Routes>
            <Route path="/" element= {<Homepage />} />
            <Route path="/about" element= {<About />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>
        </>
  )
}

export default App;
