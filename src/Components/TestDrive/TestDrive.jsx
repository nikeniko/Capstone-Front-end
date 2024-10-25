import React, { useState } from 'react';
import axios from 'axios';
import './TestDrive.css'; 

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

    return (
        <div className="testDrive">
            <div className="secContainer">
                <div className="testDriveText">
                    <h1 className="testDriveTitle">Request a Test Drive</h1>
                    <p className="testDriveDescription">
                        Fill out the form below to book your test drive.
                    </p>
                </div>
                {message && <p>{message}</p>}
                <form className="testDriveForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="nome">First Name</label>
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
                        <label htmlFor="cognome">Last Name</label>
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
                        <label htmlFor="telefono">Phone</label>
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
                        <label htmlFor="vehicle">Vehicle Model</label>
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
                        <label htmlFor="date">Test Drive Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Request Test Drive</button>
                </form>
            </div>
        </div>
    );
};

export default TestDrive;
