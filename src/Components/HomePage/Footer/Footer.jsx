import React from "react";
import "./Footer.css"

const Footer =() => {
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          <div className="singleGrid">
            <span className="footerTitle">
              About
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                how it work
              </li>
              <li className="footerLi">
                Careers
              </li>
              <li className="footerLi">
                Affliates
              </li>
              <li className="footerLi">
                Media
              </li>
            </ul>
          </div>
          <div className="singleGrid">
            <span className="footerTitle">
              Become Seller
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Add Vehicles
              </li>
              <li className="footerLi">
                Resource center
              </li>
              <li className="footerLi">
                Bonds
              </li>
              <li className="footerLi">
                Release Dates
              </li>
            </ul>
          </div>
          <div className="singleGrid">
            <span className="footerTitle">
              Recommendations
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Gift Cards
              </li>
              <li className="footerLi">
                Careers
              </li>
              <li className="footerLi">
                Top Ups
              </li>
              <li className="footerLi">
                Selling
              </li>
            </ul>
          </div>
          <div className="singleGrid">
            <span className="footerTitle">
              Booking Support
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Updates
              </li>
              <li className="footerLi">
                Help center
              </li>
              <li className="footerLi">
                Garages
              </li>
              <li className="footerLi">
                Trust & Safety
              </li>
            </ul>
          </div>
        </div>
        <div className="lowerSection grid">
          <p>2024 All right reserved</p>
          <blockquote>Concessionaria Project</blockquote>
        </div>
      </div>
    </div>
  )
}

export default Footer