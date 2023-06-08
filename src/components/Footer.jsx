import React from 'react'
import { CustomButton } from './CustomButton'
import './Footer.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import axios from "axios";


function Footer() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
    const [centers, setCenters] = useState([]);
    async function fetchData() {
        const centers = await axios.get('https://localhost:7115/api/BoulderingLocations');
        setCenters(centers.data);
    }
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join our newsletter to receive our latest news
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder='Your Email' className="footer-input" />
                    <CustomButton buttonStyle='btn--outline'  buttonSize="btn--medium" onClick={handleClick}>Subscribe</CustomButton>
                </form>
            </div>
            <button onClick={fetchData}>Fetch API</button>
            {centers.map((center, i) => {
                return <div key={center.id}>
                    <p>{center.id}</p>
                    <p>{center.src}</p>
                    <p>{center.title}</p>
                    <p>{center.label}</p>
                    <p>{center.path}</p>
                    <p>{center.text}</p>
                    {i < centers.length - 1 && <hr/>}
                </div>
            })}
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up' onClick={handleClick}>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Our Goals</Link>
                    <Link to='/'>Development Lifecycle</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media & Apps</h2>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>Stōkt</Link>
                    <Link to='/'>Griptonite</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Events & Competitions</h2>
                    <Link to='/'>Spring Comp</Link>
                    <Link to='/'>Summer Comp</Link>
                    <Link to='/'>Autumn Comp</Link>
                    <Link to='/'>Winter Comp</Link>
                    <Link to='/'>Speed Climbing Comp</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Climbing Routes & Grades</h2>
                    <Link to='/'>Bouldering V Grades</Link>
                    <Link to='/'>Bouldering Font Grades</Link>
                    <Link to='/'>Roped Climbing</Link>
                    <Link to='/'>French Sport Grades</Link>
                    <Link to='/'>British Traditional Grades</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <small className="website-rights">BoulderBound © 2023</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to='/'
                    target="blank"
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                    to='/'
                    target="blank"
                    aria-label='Instagram'
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link youtube"
                    to='/'
                    target="blank"
                    aria-label='Youtube'
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link className="social-icon-link twitter"
                    to='/'
                    target="blank"
                    aria-label='Twitter'
                    >
                        <i className="fab fa-twitter"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer