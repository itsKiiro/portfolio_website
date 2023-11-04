import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { Button } from "../components/Button";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Let's go!
              <ion-icon style={{ color: "white", marginLeft: "10px" }} name="barbell-outline"></ion-icon>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <ion-icon style={{ color: "white" }} name={click ? "close-outline" : "menu-outline"}></ion-icon>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about-me'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Über mich
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Angebot
                </Link>
              </li>
  
              <li>
                <Link
                  to='/contact'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>KONTAKT</Button>}
          </div>
        </nav>
      </>
    );
}
  
export default Navbar;