import React from "react";
import "./Sellers.css"

import sellerImage1 from "../../../Assets/logo1.png"
import sellerImage2 from "../../../Assets/logo2.png"
import sellerImage3 from "../../../Assets/logo3.png"

const Sellers =() => {
  return (
    <div className="sellers section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">
            Explore top sellers in town
          </h3>
        </div>
        <div className="sellersContainer grid">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">
                Dodge
              </h4>
              <p>from €40000</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage2} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">
                Ferrari
              </h4>
              <p>from €100000</p>
            </span>
          </div>
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage3} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">
                Lamborghini
              </h4>
              <p>from €3000000</p>
            </span>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Sellers