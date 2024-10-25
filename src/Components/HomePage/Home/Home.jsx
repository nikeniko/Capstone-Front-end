import React, { useEffect } from "react";
import "./Home.css"


import homeImage from "../../../Assets/homeImage.png"

import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(()=>{
    Aos.init(
      {
        duration: 3000
      }
    )
  }, [])

  return (
    <div className="home">
      <div className="secContainer">
        <div data-aos="fade-up" className="homeText">
          <span  className="homeSpan">
            Scopri la tua nuova macchina
          </span>
          <h1 className="homeTitle">
            Ford Mustang
          </h1>
          <div className="btns flex">
            <button data-aos="fade-right" className="btn">More Details</button>
            <Link to="/testdrive">
            <button data-aos="fade-left" className="btn primaryBtn">Test Drive</button>
            </Link>
          </div>
        </div>

        <div data-aos="fade-down" className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>
  )
}

export default Home