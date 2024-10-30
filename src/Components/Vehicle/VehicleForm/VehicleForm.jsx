import React, { useState } from 'react';
import axios from 'axios';
import './VehicleForm.css'; 
import logo from "../../../Assets/logo.png"
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const VehicleForm = () => {
    const [vehicle, setVehicle] = useState({
        marca: '',
        modello: '',
        anno: '',
        prezzo: '',
        chilometraggio: '',
        descrizione: '',
        disponibilita: true,
        immagine: '',
    });
    
    const [successMessage, setSuccessMessage] = useState(""); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicle((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/veicoli/create', vehicle);
            console.log('Vehicle created:', response.data);
            
            
            setSuccessMessage("Veicolo aggiunto con successo!");
            setVehicle({
                marca: '',
                modello: '',
                anno: '',
                prezzo: '',
                chilometraggio: '',
                descrizione: '',
                disponibilita: true,
                immagine: '',
            });

            setTimeout(() => setSuccessMessage(""), 3000);

        } catch (error) {
            console.error('There was an error creating the vehicle!', error);
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
        <div className="vehicleFormContainer">
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
            <h1 className="vehicleFormTitle">Aggiungi un nuovo veicolo</h1>
            {successMessage && <div className="successMessage">{successMessage}</div>}
            <form className="vehicleForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label className="formLabel">Marca:</label>
                    <input type="text" name="marca" className="formInput" value={vehicle.marca} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label className="formLabel">Modello:</label>
                    <input type="text" name="modello" className="formInput" value={vehicle.modello} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label className="formLabel">Anno:</label>
                    <input type="number" name="anno" className="formInput" value={vehicle.anno} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label className="formLabel">Prezzo:</label>
                    <input type="number" name="prezzo" className="formInput" value={vehicle.prezzo} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label className="formLabel">Chilometraggio:</label>
                    <input type="number" name="chilometraggio" className="formInput" value={vehicle.chilometraggio} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label className="formLabel">Descrizione:</label>
                    <textarea name="descrizione" className="formTextarea" value={vehicle.descrizione} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label className="formLabel">Disponibilità:</label>
                    <select name="disponibilita" className="formSelect" value={vehicle.disponibilita} onChange={handleChange}>
                        <option value="true">Disponibile</option>
                        <option value="false">Non Disponibile</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Immagine</label>
                    <select name="immagine" className="formSelect" value={vehicle.immagine} onChange={handleChange} required >
                    <option value="https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*">
                     Audi R8
                    </option>
                    <option value="https://www.amalgamcollection.com/cdn/shop/files/Wideredit_2000x850_crop_center.jpg?v=1701355151">
                     Ferrari f40
                     </option>
                     <option value="https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp">
                     Ford Mustang
                     </option>
                     <option value="https://graphics.gestionaleauto.com/gonline_graphics/19252037_E_64930cb956e94.jpg">
                     Dodge Challenger
                     </option>
                     <option value="https://cdn.drivek.com/configurator-imgs/cars/it/Original/MASERATI/GHIBLI-HYBRID/39892_SEDAN-4-DOORS/maserati-ghibli-hybrid-2020-side-front.jpg">
                     Maserati Ghibli
                     </option>
                     <option value="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_02_m.jpg">
                     Lamborghini Aventador
                     </option>
                     </select>
                </div>
                <button type="submit" className="formButton">Aggiungi veicolo</button>
            </form>
        </div>
    );
};

export default VehicleForm;
