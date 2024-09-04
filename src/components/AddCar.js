// src/components/AddCar.js

import React, { useState } from 'react';
import { addCar } from '../services/carService';

const AddCar = () => {
    const [car, setCar] = useState({
        carNo: '',
        carYear: '',
        carMake: '',
        carModel: '',
        carTrim: '',
        carBody: '',
        carTransmission: '',
        carCondition: '',
        carOdometer: '',
        carFleetNo: '',
        carSelllingPrice: '',
        carHourlyRentalPrice: '',
        carDailyRentalPrice: '',
        carWeeklyRentalPrice: '',
        carMonthlyRentalPrice: ''
    });

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCar(car);
            alert('Car added successfully');
        } catch (error) {
            console.error('Error adding car:', error);
            alert('Failed to add car');
        }
    };

    return (
        <div>
            <h2>Add a New Car</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="carNo" placeholder="Car No" value={car.carNo} onChange={handleChange} required />
                <input type="number" name="carYear" placeholder="Car Year" value={car.carYear} onChange={handleChange} required />
                {/* Add input fields for other properties */}
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};

export default AddCar;
