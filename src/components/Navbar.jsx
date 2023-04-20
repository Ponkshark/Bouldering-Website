import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CustomButton } from './CustomButton';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    const XmarkIcon = <FontAwesomeIcon icon={faXmark} />;
    const barsIcon = <FontAwesomeIcon icon={faBars} />;

    return (
    <>
        <nav className="narbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                     BoulderBound {/*<FontAwesomeIcon icon={faCircleQuestion} /> */}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? XmarkIcon : barsIcon}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/centers" className='nav-links' onClick={closeMobileMenu}>
                            Centers
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/info" className='nav-links' onClick={closeMobileMenu}>
                            Info
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {button && <CustomButton buttonStyle='btn--outline'>SIGN UP</CustomButton>}
            </div>
        </nav>
    </>
  )
}

export default Navbar