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
        {/* header bottom */}
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/* logo */}
                    <div className="logo-search-acte">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    {/* menu area */}
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="">Shop</Link></li>
                                <li><Link to="">Blog</Link></li>
                                <li><Link to="">About</Link></li>
                                <li><Link to="">Contact</Link></li>
                            </ul>
                        </div>
                        {/* sign in and login  */}
                        <Link to="/sing-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="/login" className='d-none d-md-block'>Log-In</Link>
                        {/* menu toggler */}
                        <div onClick={()=> setMenuToggle(!menuToggle)}className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* social toggle */}
                        <div className='ellepsis-bar d-md-none' 
                             onClick={()=> setSocialToggle(!socialToggle)}>
                            <i className="icofont-info-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems
