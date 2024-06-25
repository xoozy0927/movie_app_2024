import React from 'react';
import './About.css'

function About(props) {
    console.log(props)
    return (
        <div className='about__container' >
            <span>About this page: I built it becaues I love movies
            About this page: I built it becaues I love movies.</span>
            <span>- George Owelll, 1943</span>
        </div>
    ); 
}

export default About;