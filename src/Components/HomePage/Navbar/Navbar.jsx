import React, {useState} from "react";
import "./Navbar.css"

import logo from "../../../Assets/logo.png"
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar =() => {

  const [navbar, setNavbar] = useState("navbar")

  const showNavbar = ()=> {
    setNavbar("navbar showNavbar")
  }

  const removeNavbar = ()=> {
    setNavbar("navbar")
  }

  const [header, setHeader] = useState("header")
  const addBg = ()=> {
    if(window.screenY >= 20)(
      setHeader("header addBg")
    )
  }

  window.addEventListener("scroll" , addBg)

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="logo image" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li className="listItem">
          <Link to="/home" className="link">Veincoli usati</Link>
          </li>
          <li className="listItem">
          <Link to="/home" className="link">Veincoli nuovi</Link>
          </li>
          <li className="listItem">
          <Link to="/home" className="link">Aste</Link>
          </li>
          <li className="listItem">
          <Link to="/home" className="link">Vendi</Link>
          </li>
        </ul>
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
      </div>
      <div className="singUp flex">
        <Link to="/login" className="text">Login</Link>
        <Link to="/vehicleform" className="text">Aggiungi Veicoli</Link>
        <Link to="/vehiclelist" className="text">Lista Veicoli</Link>
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  )
}

export default Navbar