import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import "./NavBar.css"

function NavBar() {

    const [showNav, setShowNav] = useState(false)

    function handleNavClick(){
        showNav ===true ? setShowNav(false):setShowNav(true)
    }

    return (
        <div className='navbar'>
        <Link to={'/'}>
        <h1 className='logo' >Donors</h1>
        </Link> 
        <div className='menu-icon' onClick={handleNavClick} >{showNav?<i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}  </div>
        
        {showNav && <NavMenu/>}
        

        </div>
    )
}

export default NavBar
