import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
const [show, handleShow] = useState(false)
const navigate = useNavigate();

const history = () => {
    navigate("/profile")
}

const previous = () => {
    navigate("/")
}

const transitionNavBar =() => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_content">

           <img onClick={() => previous()} className='nav_logo' src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" />

           <img onClick={() => history()} className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />

        </div>
      
    </div>
  )
}

export default Navbar
