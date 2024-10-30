import React, { useEffect, useState } from 'react';
import logo from "../../../Assets/logo.png"
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import VehicleCard from '../VehicleCard/VehicleCard';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
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

    useEffect(() => {
        const fetchVehicles = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3001/veicoli/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVehicles(data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
                setError('Failed to fetch vehicles.');
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    

    return (
        <div className="auction">
             <div className={header}>
      <div className="logoDiv">
      <Link to="/home" >
        <img src={logo} alt="logo image" className="logo" />
        </Link>
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
            <div className="secContainer">
                <div className="secHeading">
                    <h2 className="secTitle">Veicoli Disponibili</h2>
                </div>
                <div className="carContainer" style={{ display: 'grid', gap: '2rem' }}>
                    {vehicles.map(vehicle => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VehicleList;
