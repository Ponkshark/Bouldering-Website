import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

export default function Info() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    return (
        <>
            <h1 className='info'>About Us</h1>
            <div  className='info-text-wrapper'>
                <p  className='info-text'>
                    Welcome to our website, your ultimate guide to bouldering and rock climbing! We are a team of passionate climbers and enthusiasts who are dedicated to providing you with all the information you need to get started with bouldering, as well as details about different climbing centers and the sport in general. <br/>

                    Our mission is to make bouldering accessible to everyone, regardless of their age, skill level, or experience. We believe that climbing is not only a great way to stay fit and healthy, but also a fun and rewarding activity that brings people together.<br/>

                    We understand that getting into bouldering can be daunting, especially if you're new to the sport. That's why we have created this website to offer guidance, tips, and advice to help you get started. We cover everything from the basics of bouldering, such as technique and equipment, to more advanced topics like training and competitions.<br/>

                    In addition, we provide comprehensive information about different climbing centers and gyms, so you can find the perfect place to practice and improve your skills. We also offer reviews and recommendations based on our own experiences, as well as feedback from the climbing community.<br/>

                    Our team is composed of experienced climbers and industry experts who are passionate about sharing their knowledge and love for the sport. We believe that bouldering and climbing can be enjoyed by anyone, and we are here to help you make the most of your experience.<br/>

                    Thank you for visiting our website, and we hope you find it useful and informative. If you have any questions or comments, please don't hesitate to <Link to='/sign-up' onClick={handleClick} className='info-text-link'>contact us.</Link>
                </p>   
        </div>
        </>
    );
}