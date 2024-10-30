import React from "react";
import "./Auction.css"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import car4 from "../../../Assets/car4.png"
import car5 from "../../../Assets/car5.png"
import car6 from "../../../Assets/car6.png"

const Auction =() => {
  return (
    <div className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Aste in questo momento
          </h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon rightIcopn"/>
          </div>
        </div>
        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car4} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Usato Cadillac Eldorado
            </h5>
            <span className="kilometri">
              1354 kilometri
            </span>
            <span className="AWD">

            </span>
            <div className="price_buyBtn flex">
              <span className="price">
                €300,000
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car5} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Usato Audi R7
            </h5>
            <span className="kilometri">
              43354 kilometri
            </span>
            <span className="AWD">

            </span>
            <div className="price_buyBtn flex">
              <span className="price">
                €72,000
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car6} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Usato Ferrari Spider
            </h5>
            <span className="kilometri">
              11354 kilometri
            </span>
            <span className="AWD">

            </span>
            <div className="price_buyBtn flex">
              <span className="price">
                €252,000
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auction