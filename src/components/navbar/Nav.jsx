import {Link, useMatch, useResolvedPath} from "react-router-dom";
import './nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import MusicPlayer from "../musicplayer/MusicPlayer";

export default function NB(){

    function CustomLink({to, children, ...props}){
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({path: resolvedPath.pathname, end:true})
    
        return(
            <li
            className={isActive ? "active" : ""}>
                <Link className="navitem" to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    return (

      <Navbar expand="lg">
        <Container>
            <Navbar.Brand className="brand">
                <CustomLink to="/"
                style={{style:"none"}}>TAYLOR CODES</CustomLink>
            </Navbar.Brand>
                <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item className="nav-item">
                                <CustomLink to="/about">About</CustomLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <CustomLink to="/projects">Projects</CustomLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <CustomLink to="/dolly">WWDD?</CustomLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <CustomLink to="/contact">Contact</CustomLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <CustomLink to="/resume">Resume</CustomLink>
                            </Nav.Item>
                        </Nav>
                        <MusicPlayer />        
            </Navbar.Collapse>
            </Container>
    </Navbar>

    )
}
