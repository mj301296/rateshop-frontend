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
        carGasReading: '',
        carFleetNo: '',
        carStatus: '',
        carSelllingPrice: '',
        carHourlyRentalPrice: '',
        carDailyRentalPrice: '',
        carWeeklyRentalPrice: '',
        carMonthlyRentalPrice: ''
    });

    const handleChange = (e) => {
        setCar({ ...car, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const addParams = Object.fromEntries(
                Object.entries(car).filter(([_, value]) => value !== ''));
            await addCar(addParams);
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
            <div className="form-group">
                    <label htmlFor="carNo">Car No</label>
                    <input type="text" id="carNo" placeholder="ABC4252" value={car.carNo} onChange={handleChange} />
            </div>
            <div className="form-group">
                    <label htmlFor="carYear">Car Year</label>
                    <input type="number" id="carYear" placeholder="2015" value={car.carYear} onChange={handleChange} />
                </div> 
                <div className="form-group">
                    <label htmlFor="carMake">Make</label>
                    <input type="text" id="carMake" placeholder="Kia" value={car.carMake} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carModel">Model</label>
                    <input type="text" id="carModel" placeholder="Corolla" value={car.carModel} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carTrim">Trim</label>
                    <input type="text" id="carTrim" placeholder="LX" value={car.carTrim} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carBody">Body</label>
                    <input type="text" id="carBody" placeholder="SUV" value={car.carBody} onChange={handleChange} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="carTransmission">Transmission</label>
                    <input type="text" id="carTransmission" placeholder="automatic/manual" value={car.carTransmission} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="carCondition">Condition</label>
                    <input type="number" id="carCondition" placeholder="1-9" value={car.carCondition} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carOdometer">Odometer</label>
                    <input type="number" id="carOdometer" placeholder="Odometer" value={car.carOdometer} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carGasReading">Gas Reading</label>
                    <input type="text" id="carGasReading" placeholder="0-8" value={car.carGasReading} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carFleetNo">Fleet No</label>
                    <input type="text" id="carFleetNo" placeholder="A123" value={car.carFleetNo} onChange={handleChange} />
                </div> 
                <div className="form-group">
                    <label htmlFor="carStatus">Status</label>
                    <input type="text" id="carStatus" placeholder="available/in-use/on-hold" value={car.carStatus} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carSelllingPrice">Selling price</label>
                    <input type="number" id="carSelllingPrice" placeholder="20000.0" value={car.carSelllingPrice} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="carHourlyRentalPrice">Hourly Rental Price</label>
                    <input type="number" id="carHourlyRentalPrice" placeholder="1.5" value={car.carHourlyRentalPrice} onChange={handleChange} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="carDailyRentalPrice">Daily Rental Price</label>
                    <input type="number" id="carDailyRentalPrice" placeholder="10.2" value={car.carDailyRentalPrice} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="carWeeklyRentalPrice">Weekly Rental Price</label>
                    <input type="number" id="carWeeklyRentalPrice" placeholder="70.5" value={car.carWeeklyRentalPrice} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carMonthlyRentalPrice">Monthly Rental Price</label>
                    <input type="number" id="carMonthlyRentalPrice" placeholder="240.5" value={car.carMonthlyRentalPrice} onChange={handleChange} />
                </div>
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};

export default AddCar;
