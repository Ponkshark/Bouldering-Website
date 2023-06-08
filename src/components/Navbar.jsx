import React, {useState, useEffect} from 'react';
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

    // only renders signup button once, so on refresh, it doesn't create a new one in middle of screen on small screen sizes
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    const XmarkIcon = <FontAwesomeIcon icon={faXmark} />;
    const barsIcon = <FontAwesomeIcon icon={faBars} />;

    return (
    <>
        <nav className="narbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img style={{ width: 240, height: 65 }} src="/images/BoulderBoundIcon.PNG" alt="CompanyIcon" className="company-icon"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? XmarkIcon : barsIcon}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/admin" className='nav-links' onClick={closeMobileMenu}>
                            Admin
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/centers" className='nav-links' onClick={closeMobileMenu}>
                            Centers
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/climbing-log" className='nav-links' onClick={closeMobileMenu}>
                            Climbing Log
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
                {button && <CustomButton buttonStyle='btn--outline' buttonSize="btn--medium">SIGN UP</CustomButton>}
            </div>
        </nav>
    </>
  )
}

export default Navbar