import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"


function Menu() {
    return (
        <div className='menu'>
        <div className='menu-items'>
        <Link to='/find-donor'>
            <div className='btn'>
            <img className='btn-image' src="images/icons/FindDonor.png" alt="" />
                <p className='btn-label'>Find Donor</p>
            </div>
        </Link>
        <Link to={'/register'}>
            <div className='btn'>
            <img className='btn-image' src="images/icons/RegisterDonor.png" alt="" />
                <p className='btn-label'>Register Donor</p>
            </div>
            </Link>
        <a href="/why-donate">
            <div className='btn'>
                <img  className='btn-image' src="images/icons/WhyDonate.png" alt="" />
                <p className='btn-label'>Why Donate?</p>
            </div>
        </a>
        <a href="/about">
            <div className='btn'>
            <img className='btn-image' src="images/icons/About.png" alt="" />
                <p className='btn-label'>About</p>
            </div>
        </a>
        </div>                    
        </div>
    )
}

export default Menu
