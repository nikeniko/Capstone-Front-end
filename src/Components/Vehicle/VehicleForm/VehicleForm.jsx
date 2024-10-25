import React, { useState } from 'react';
import axios from 'axios';
import './VehicleForm.css'; 

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
        } catch (error) {
            console.error('There was an error creating the vehicle!', error);
        }
    };

    return (
        <div>
            <h1>Create a New Vehicle</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Marca:</label>
                    <input type="text" name="marca" value={vehicle.marca} onChange={handleChange} required />
                </div>
                <div>
                    <label>Modello:</label>
                    <input type="text" name="modello" value={vehicle.modello} onChange={handleChange} required />
                </div>
                <div>
                    <label>Anno:</label>
                    <input type="number" name="anno" value={vehicle.anno} onChange={handleChange} required />
                </div>
                <div>
                    <label>Prezzo:</label>
                    <input type="number" name="prezzo" value={vehicle.prezzo} onChange={handleChange} required />
                </div>
                <div>
                    <label>Chilometraggio:</label>
                    <input type="number" name="chilometraggio" value={vehicle.chilometraggio} onChange={handleChange} required />
                </div>
                <div>
                    <label>Descrizione:</label>
                    <textarea name="descrizione" value={vehicle.descrizione} onChange={handleChange} required />
                </div>
                <div>
                    <label>Disponibilità:</label>
                    <select name="disponibilita" value={vehicle.disponibilita} onChange={handleChange}>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>
                <div>
                    <label>Immagine URL:</label>
                    <input type="text" name="immagine" value={vehicle.immagine} onChange={handleChange} required />
                </div>
                <button type="submit">Create Vehicle</button>
            </form>
        </div>
    );
};

export default VehicleForm;
