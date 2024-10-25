import React from "react";

import Navbar from "./Navbar/Navbar";
import Auction from "./Auction/Auction";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Review from "./Review/Review";
import Search from "./Search/Search";
import Sellers from "./Sellers/Sellers";
import Trending from "./Trending/Trending";

const HomePage =() => {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Search/>
        <Trending/>
        <Sellers/>
        <Auction/>
        <Review/>
        <Footer/>
      </div>
    )
  }
  
  export default HomePage