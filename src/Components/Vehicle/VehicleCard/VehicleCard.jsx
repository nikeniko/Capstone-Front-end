import React from 'react';
import { useNavigate } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/richiesta-preventivo', { state: { vehicle } });
    };

    return (
        <div className="singleCar">
            <div className="imgDiv">
                <img className="img" src={vehicle.immagine} alt={`${vehicle.marca} ${vehicle.modello}`} />
            </div>
            <h3 className="carTitle">{vehicle.marca} {vehicle.modello}</h3>
            <p className="kilometri">Chilometraggio: {vehicle.chilometraggio} km</p>
            <p className="AWD">Anno: {vehicle.anno}</p>
            <div className="price_buyBtn">
                <span className="price">Prezzo: €{vehicle.prezzo.toFixed(2)}</span>
                <button className="buyBtn" onClick={handleBuyClick}>Acquista</button>
            </div>
        </div>
    );
};

export default VehicleCard;
