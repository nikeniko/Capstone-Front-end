import React from "react";
import "./Review.css"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";


import car1 from "../../../Assets/car5.png"
import car2 from "../../../Assets/car8.png"
import car3 from "../../../Assets/car7.png"
import user1 from "../../../Assets/user1.png"
import { AiFillStar } from "react-icons/ai";

const Review =() => {
  return (
    <div className="review section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Recent Reviews
          </h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon rightIcon"/>
          </div>
        </div>

        <div className="reviewContainer grid">
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 audi
            </h5>
            <span className="desc">
              Delle buone macchine
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Pino Lino
                  </span>
                  <p>Capo dei capi</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon"/>
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
            Honda ZR-V
            </h5>
            <span className="desc">
              Ci sta
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Pino Lino
                  </span>
                  <p>Capo dei capi</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon"/>
                <blockquote>4.51</blockquote>
              </div>
            </div>
          </div>
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
             2023 FIAT 500X SUV
            </h5>
            <span className="desc">
              Bella
            </span>
            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Pino Lino
                  </span>
                  <p>Capo dei capi</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon"/>
                <blockquote>4.62</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review