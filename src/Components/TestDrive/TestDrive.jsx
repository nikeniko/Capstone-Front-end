import React, { useState } from 'react';
import axios from 'axios';
import './TestDrive.css'; 
import logo from "../../Assets/logo.png"
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const TestDrive = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        vehicle: '',
        date: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/testdrive/request', formData);
            setMessage(response.data);
            setFormData({
                nome: '',
                cognome: '',
                email: '',
                telefono: '',
                vehicle: '',
                date: '',
            });
        } catch (error) {
            console.error("There was an error!", error);
            setMessage('Failed to submit test drive booking. Please try again.');
        }
    };

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

    return (
        <div className="testDrive">
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
                <div className="testDriveText">
                    <h1 className="testDriveTitle">Prenota il tuo Test Drive</h1>
                    <p className="testDriveDescription">
                       Riempi con le tue informazioni per richiedere il test drive.
                    </p>
                </div>
                {message && <p>{message}</p>}
                <form className="testDriveForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="cognome">Cognome</label>
                        <input
                            type="text"
                            id="cognome"
                            name="cognome"
                            value={formData.cognome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="telefono">Cellulare</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="vehicle">Modello veicolo</label>
                        <input
                            type="text"
                            id="vehicle"
                            name="vehicle"
                            value={formData.vehicle}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="date">Test Drive Data</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Prenota Test Drive</button>
                </form>
            </div>
        </div>
    );
};

export default TestDrive;
