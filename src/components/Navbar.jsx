import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const XmarkIcon = <FontAwesomeIcon icon={faXmark} />;
  const barsIcon = <FontAwesomeIcon icon={faBars} />;

  return (
    <>
        <nav className="narbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    INFO <FontAwesomeIcon icon={faCircleQuestion} />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? XmarkIcon : barsIcon}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar