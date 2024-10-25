import React from "react";
import "./Auction.css"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import car1 from "../../../Assets/car.png"

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
            <div className="price_buyBtn flex">
              <span className="price">
                €52,000
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>
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
            <div className="price_buyBtn flex">
              <span className="price">
                €52,000
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>
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
            <div className="price_buyBtn flex">
              <span className="price">
                €52,000
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