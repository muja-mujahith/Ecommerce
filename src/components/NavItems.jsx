import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/images/logo/logo.png"

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [socialToggle, setSocialToggle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 200){
            setHeaderFixed(true)
        }else {
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>

        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-search-acte">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems
