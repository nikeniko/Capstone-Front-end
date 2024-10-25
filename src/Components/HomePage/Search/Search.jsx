import React, { useEffect } from "react";
import "./Search.css"
import { AiOutlineSearch } from "react-icons/ai";


import Aos from "aos";
import "aos/dist/aos.css"

const Search =() => {

  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])
  return (
    <div className="search">
      <div className="secContainer container">
        <h3 data-aos="fade-up" className="title">
          Quale macchina vuoi vedere?
        </h3>
        <div className="searchDiv grid">
          <input data-aos="fade-up" type="text" placeholder="Tipo" />
          <input data-aos="fade-up" type="number" placeholder="Anno" />
          <input data-aos="fade-up" type="text" placeholder="Modello" />
          <input data-aos="fade-up" type="number" placeholder="Prezzo" />
          <button data-aos="fade-left" className="btn primaryBtn flex"> 
            <AiOutlineSearch className="icon"/>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search