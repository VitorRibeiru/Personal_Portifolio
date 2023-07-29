import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {  BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import logo from '../assets/img/VR1.png'; 
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { i18n } from '../translate/i18n';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  const I18n_STORAGE_KEY = 'i18nextLng'
  console.log('')
  
  const [language] = useState(localStorage.getItem(I18n_STORAGE_KEY))
  const handSelectChange = event => {
    localStorage.setItem(
      I18n_STORAGE_KEY,
      event.target.value
    )
    window.location = window.location
  }




  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        
        <Container>
        <Navbar.Brand className="Logo" href="/">
            <img src={logo} alt="Logo" width="150" height="81"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{i18n.t('navbar.home')}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{i18n.t('navbar.skills')}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{i18n.t('navbar.projects')}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/jvitor-ribeiro/" target="_blank" without rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/VitorRibeiru" target="_blank" without rel="noreferrer" ><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ribeirovitorj/" target="_blank" without rel="noreferrer"><img src={navIcon3} alt="" /></a>
              </div>
              <select onChange={handSelectChange}  value={language} >
                  <option>Selecione um Idioma</option>
                  <option value="pt-BR">PT</option>
                  <option value="us-EN">EN</option>
                </select>
              {<HashLink to='#connect'>
                
                <button className="vvd"><span>{i18n.t("navbar.button")}</span></button>                
              </HashLink>}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}