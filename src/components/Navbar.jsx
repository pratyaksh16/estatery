import React from 'react'
import 'styles/Navbar.css'
import {HiMailOpen} from 'react-icons/hi'
import {BiChevronDown} from 'react-icons/bi'

export default function Navbar() {
  // console.log("Navbar render");
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
        <nav className="nav-items-container">
          <ul className="nav-item-list">
            <li className="nav-item-button">Rent</li>
            <li className="nav-item-button">Buy</li>
            <li className="nav-item-button">Sell</li>
            <li className="nav-item-button"><span>Manage property</span> <BiChevronDown size={25}/></li>
            <li className="nav-item-button"><span>Resource</span> <BiChevronDown size={25}/></li>
          </ul>
        </nav>
        <section className="user-info">
          <button className="sign-in">
            Login
          </button>
          <button className="sign-up">
            Sign up
          </button>
        </section>
      </div>
    </div>
  )
}
