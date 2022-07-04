import React from 'react'
import 'assets/styles/Navbar.css'
import {HiMailOpen} from 'react-icons/hi'

export default function Navbar() {
  return (
    <div className="navbar-fixed-wrapper">
      <div className="navbar-container">
        <section className="logo-container">
          <div className="logo-img">
            <HiMailOpen size={30} fill="rgb(111, 101, 232)"/>
          </div>
          <div className="logo-text" style={{color:'rgb(49, 44, 83)',fontSize:"20px",fontWeight:"bold"}}>
            Estatery
          </div>
        </section>
        <nav className="nav-items">

        </nav>
        <section className="user-info">
          <div className="sign-in">
            Sign In
          </div>
          <div className="sign-up">
            Sign Up
          </div>
        </section>
      </div>
    </div>
    
  )
}
