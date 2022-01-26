import React from 'react'
import { Link } from 'react-router-dom'
function NavMenu() {
    return (
        <div className='nav-menu-container'>
        <div className='nav-menu'>
            <ul>
               <Link to="/"> <li className='nav-link'> HOME</li></Link>
               <Link to={"/register"}><li className='nav-link'>REGISTER DONOR</li></Link>
               <Link to={"/find-donor"}><li className='nav-link'>FIND DONOR</li></Link>
               <Link to={"/about"}><li className='nav-link'>ABOUT</li></Link>
               <Link to={"/why-donate"}><li className='nav-link'>WHY DONATE BLOOD ?</li></Link>
            </ul>
        </div>
        </div>
    )
}

export default NavMenu
