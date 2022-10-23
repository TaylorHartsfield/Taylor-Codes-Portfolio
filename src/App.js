import './App.css';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Navbar from './components/Nav';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import {Route, Routes} from "react-router-dom";

function App() {
  return ( 
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element= {<Homepage />} />
          <Route path="/about" element= {<About />} />
          <Route path="/contact" element= {<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
