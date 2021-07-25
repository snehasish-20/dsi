import React from 'react'
import Navigationbar from './Navigationbar';
import devices from '../images/devices.svg'
import '../styles/header.css'
function Header() {
    return (
        <header id="header">
            <Navigationbar/>
            <div className="hero-section">
                <div className="left-container">
                    <h1>Making the most of the ever-growing<br/><span>Information Technology</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in quisquam commodi facilis ducimus. Cum aliqui</p>
                    <button>Read More</button>
                </div>
                <div className="right-container">
                    <img src={devices} alt="Devices illustration" />
                </div>
            </div>
        </header>
    )
}

export default Header
