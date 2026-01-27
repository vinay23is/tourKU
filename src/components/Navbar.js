 import React, {useState, useEffect} from 'react';
 import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import kulogo from "./kulogo.svg"

 function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
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
          <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-left">
                <img src={kulogo} alt="KU Logo" className="logo" onClick={closeMobileMenu} />
                <Link to="/" className="navbar-logo">
                  TOUR KU <i className="fab fa-typo3" />
                </Link>
              </div>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                            Schedule a Tour
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tourtimes" className='nav-links' onClick={closeMobileMenu}>
                            Tour Times
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button &&<Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
          </nav>
        </>
      );
    }
 
 export default Navbar
 