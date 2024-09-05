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
                <input type="text" name="carMake" placeholder="Make" value={car.carMake} onChange={handleChange} />
                <input type="text" name="carModel" placeholder="Model" value={car.carModel} onChange={handleChange} />
                <input type="text" name="carTrim" placeholder="Trim" value={car.carTrim} onChange={handleChange} />
                <input type="text" name="carBody" placeholder="Body" value={car.carBody} onChange={handleChange} />
                <input type="text" name="carTransmission" placeholder="Transmission" value={car.carTransmission} onChange={handleChange} />
                <input type="number" name="carCondition" placeholder="Condition" value={car.carCondition} onChange={handleChange} />
                <input type="number" name="carOdometer" placeholder="Odometer" value={car.carOdometer} onChange={handleChange} />
                <input type="text" name="carFleetNo" placeholder="Fleet No" value={car.carFleetNo} onChange={handleChange} />
                <input type="number" name="carSelllingPrice" placeholder="Car Selling Price" value={car.carSelllingPrice} onChange={handleChange} />
                <input type="number" name="carHourlyRentalPrice" placeholder="Car Hourly Rental Price" value={car.carHourlyRentalPrice} onChange={handleChange} />
                <input type="number" name="carDailyRentalPrice" placeholder="Car Daily Rental Price" value={car.carDailyRentalPrice} onChange={handleChange} />
                <input type="number" name="carWeeklyRentalPrice" placeholder="Car Weekly Rental Price" value={car.carWeeklyRentalPrice} onChange={handleChange} />
                <input type="number" name="carMonthlyRentalPrice" placeholder="Car Monthly Rental Price" value={car.carMonthlyRentalPrice} onChange={handleChange} />
                {/* Add input fields for other properties */}
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};

export default AddCar;
