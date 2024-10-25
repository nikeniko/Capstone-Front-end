import React from "react";
import "./Trending.css"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import car1 from "../../../Assets/car.png"
import car2 from "../../../Assets/car2.png"
import car3 from "../../../Assets/car3.png"

const Trending =() => {
  return (
    <div className="trending section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Tendenze
          </h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon rightIcopn"/>
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Usato challenger 
            </h5>
            <span className="kilometri">
              11354 kilometri
            </span>
            <span className="AWD">

            </span>
            <div className="price_seller flex">
              <span className="price">
                €52,000
              </span>
              <span className="seller">
                Best seller
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Usato challenger 
            </h5>
            <span className="kilometri">
              11354 kilometri
            </span>
            <span className="AWD">

            </span>
            <div className="price_seller flex">
              <span className="price">
                €52,000
              </span>
              <span className="seller">
                Best seller
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Usato challenger 
            </h5>
            <span className="kilometri">
              11354 kilometri
            </span>
            <span className="AWD">

            </span>
            <div className="price_seller flex">
              <span className="price">
                €52,000
              </span>
              <span className="seller">
                Best seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending