import React from 'react'
import stats from '../images/browser-stats.svg'
import '../styles/about.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="img-container">
                <img src={stats} alt="Browser stats" />
            </div>
            <div className="info-container">
                <h2>Welcome to <span>Dwidasa Samsara Indonesia(DSI)</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque asperiores recusandae magnam iure dolores earum iste eius. Ea nulla aperiam eius quidem perferendis quod ut soluta, molestiae hic odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fugiat. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo modi error quo alias voluptatum possimus dolor ipsa, libero consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, veritatis.</p>
            </div>
        </div>
    )
}

export default About
