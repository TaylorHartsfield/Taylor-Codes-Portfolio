import {Link, useMatch, useResolvedPath} from "react-router-dom";
import{useState} from 'react';
import {
    MDBNavbar, 
    MDBNavbarNav,
    MDBContainer, 
    MDBNavbarBrand, 
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBIcon,
    MDBCollapse} from 'mdb-react-ui-kit';

export default function Navbar(){
    const [showNavRight, setShowNavRight] = useState(false);

    return (
            <MDBNavbar  expand="lg" className="nav">
                <MDBContainer>
                <MDBNavbarBrand>
                    <Link to="/" className="site-title">
                        Taylor Codes
                    </Link>
                </MDBNavbarBrand>
                   <MDBNavbarToggler
                        type="button"
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavRight(!showNavRight)}>
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                <MDBNavbarItem className="nav-item">
                    <CustomLink to="/about">About</CustomLink>
                </MDBNavbarItem>
                <MDBNavbarItem className="nav-item">
                    <CustomLink to="/projects">Projects</CustomLink>
                    </MDBNavbarItem>
                <MDBNavbarItem className="nav-item">
                    <CustomLink to="/contact">Contact</CustomLink>
                    </MDBNavbarItem>
                <MDBNavbarItem className="nav-item">
                    <CustomLink to="/resume">Resume</CustomLink>
                </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        
       
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}