import React from 'react'
import 'assets/styles/Navbar.css'
import {HiMailOpen} from 'react-icons/hi'
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

export default function Navbar() {
  console.log("Navbar render");
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
            <li className="nav-item-button">Manage property</li>
            <li className="nav-item-button">Resources</li>

            {/* <li className="nav-item-button nav-item-dropdown"><span>Manage property</span><div> </div></li>
            <li className="nav-item-button nav-item-dropdown"><span>Resources</span><div></div> </li> */}
          </ul>
        </nav>
        <section className="user-info">
          <button className="sign-in">
            Login
          </button>
          <button className="sign-up">
            Sign up
          </button>
          {/* <Stack spacing={2} direction="row">
            <Button variant="outlined" className="sign-in">Outlined</Button>
            <Button variant="contained" className="sign-up">Contained</Button>
          </Stack> */}
        </section>
      </div>
    </div>
    
  )
}
