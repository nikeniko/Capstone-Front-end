import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RichiestaPreventivo.css';
import logo from "../../../Assets/logo.png";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const RichiestaPreventivo = () => {
    const location = useLocation();
    const vehicle = location.state?.vehicle; 
    const [navbar, setNavbar] = useState("navbar");
    const [header, setHeader] = useState("header");
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        marcaAuto: '',
        modelloAuto: '',
        annoAuto: '',
        chilometraggio: '',
        messaggio: '',
        consentoMarketing: false,
    });
    
    // State for success message
    const [successMessage, setSuccessMessage] = useState('');

    const showNavbar = () => {
        setNavbar("navbar showNavbar");
    }

    const removeNavbar = () => {
        setNavbar("navbar");
    }

    const addBg = () => {
        if(window.screenY >= 20) {
            setHeader("header addBg");
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare the payload for submission
        const payload = {
            dataRichiesta: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
            descrizione: formData.messaggio, // Map to `descrizione` as per backend model
            nome: formData.nome,
            cognome: formData.cognome,
            email: formData.email,
            telefono: formData.telefono,
            marca: vehicle?.marca || formData.marcaAuto,
            modello: vehicle?.modello || formData.modelloAuto,
            anno: vehicle?.anno || formData.annoAuto,
            chilometraggio: vehicle?.chilometraggio || formData.chilometraggio,
            prezzo: vehicle?.prezzo || 0, // Ensure a default in case `prezzo` is missing
            consentoMarketing: formData.consentoMarketing,
        };
    
        try {
            const response = await fetch('http://localhost:3001/api/richiesta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Form submitted successfully:', result);
            // Set the success message
            setSuccessMessage('Richiesta inviata con successo!');
    
            // Optionally reset the form after submission
            setFormData({
                nome: '',
                cognome: '',
                email: '',
                telefono: '',
                marcaAuto: '',
                modelloAuto: '',
                annoAuto: '',
                chilometraggio: '',
                messaggio: '',
                consentoMarketing: false,
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Si è verificato un errore durante l\'invio della richiesta.');
        }
    };
    
    return (
        <div>
            <div className={header}>
                <div className="logoDiv">
                    <Link to="/home">
                        <img src={logo} alt="logo image" className="logo" />
                    </Link>
                </div>
                <div className={navbar}>
                    <ul className="menu">
                        <li className="listItem">
                            <Link to="/home" className="link">Veicoli usati</Link>
                        </li>
                        <li className="listItem">
                            <Link to="/home" className="link">Veicoli nuovi</Link>
                        </li>
                        <li className="listItem">
                            <Link to="/home" className="link">Aste</Link>
                        </li>
                        <li className="listItem">
                            <Link to="/home" className="link">Vendi</Link>
                        </li>
                    </ul>
                    <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
                </div>
                <div className="singUp flex">
                    <Link to="/login" className="text">Login</Link>
                    <Link to="/vehicleform" className="text">Aggiungi Veicoli</Link>
                    <Link to="/vehiclelist" className="text">Lista Veicoli</Link>
                    <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
                </div>
            </div>
            <h1>Richiesta di Preventivo</h1>
            <div className="richiestaPreventivo">
                {vehicle && (
                    <div>
                        <h2>{vehicle.marca} {vehicle.modello}</h2>
                        <p>Prezzo: €{vehicle.prezzo.toFixed(2)}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <h2>I tuoi dati</h2>
                    <label>
                        Nome*
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Cognome*
                        <input
                            type="text"
                            name="cognome"
                            value={formData.cognome}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email*
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Telefono*
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <h2>Che auto guidi oggi?</h2>
                    <label>
                        Marca
                        <input
                            type="text"
                            name="marcaAuto"
                            value={formData.marcaAuto}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Modello
                        <input
                            type="text"
                            name="modelloAuto"
                            value={formData.modelloAuto}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Anno
                        <input
                            type="number"
                            name="annoAuto"
                            value={formData.annoAuto}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Chilometraggio
                        <input
                            type="number"
                            name="chilometraggio"
                            value={formData.chilometraggio}
                            onChange={handleChange}
                        />
                    </label>

                    <label className='note'>
                        Aggiungi le tue note
                        <textarea
                            name="messaggio"
                            value={formData.messaggio}
                            onChange={handleChange}
                        />
                    </label>

                    <div>
                        <h3>INFORMATIVA AI SENSI DEL REGOLAMENTO UE N. 2016/679 "GDPR"</h3>
                        <p>
                            I dati personali acquisiti saranno utilizzati esclusivamente per rispondere
                            alla richiesta formulata. Gli Interessati possono esercitare i diritti di cui
                            agli artt. 15 - 23 del GDPR scrivendo all'indirizzo Satiri Auto S.p.a. 
                            Informativa completa.
                        </p>
                    </div>

                    <div className="checkboxGroup">
                        <label>
                            Attività di marketing *
                            <input
                                type="checkbox"
                                name="consentoMarketing"
                                checked={formData.consentoMarketing}
                                onChange={handleChange}
                            />
                            <span>
                                Letta e compresa l’Informativa Privacy, acconsento al trattamento dei miei dati
                                personali da parte di Satiri Auto S.p.a. per finalità di marketing come indicato
                                dall’Informativa Privacy, con modalità elettroniche e/o cartacee, e, in particolare,
                                a mezzo posta ordinaria o email, telefono (es. chiamate automatizzate, SMS, sistemi
                                di messaggistica istantanea), e qualsiasi altro canale informatico (es. siti web,
                                mobile app).
                            </span>
                        </label>
                    </div>
                    {successMessage && <div className="successMessage">{successMessage}</div>}
                    <button type="submit">Invia</button>
                </form>
            </div>
        </div>
    );
};

export default RichiestaPreventivo;
