import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NB(){

    function CustomLink({to, children, ...props}){
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({path: resolvedPath.pathname, end:true})
    
        return(
            <li style={{
                padding:".5em",
                textAlign:"right",
                
            }}
            className={isActive ? "active" : ""}>
                <Link className="navitem" to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    return (
      <>
        <Navbar expand="sm">
           <Container>
                <Navbar.Brand>
                    <Link to="/" className="site-title">
                        Taylor Codes
                    </Link> 
                </Navbar.Brand>
                            <Nav className="me-auto">
                                <CustomLink to="/about">About</CustomLink>
                                <CustomLink to="/projects">Projects</CustomLink>
                                <CustomLink to="/contact">Contact</CustomLink>
                                <CustomLink to="/resume">Resume</CustomLink>
                            </Nav>
                    </Container>
        </Navbar>
    </>
    )
}
