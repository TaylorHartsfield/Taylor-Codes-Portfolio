import './App.css';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/Nav';
import Projects from './components/projects/projects';
import {Route, Routes} from "react-router-dom";
import {Container} from './components/styles/Container.styled';


function App() {


  return ( 
    
    <Container>
        <Navbar />
          <Routes>
            <Route path="/" element= {<Homepage />} />
            <Route path="/about" element= {<About />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>
  )
}

export default App;
