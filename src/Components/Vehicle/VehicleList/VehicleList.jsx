import React, { useEffect, useState } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
