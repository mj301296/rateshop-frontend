// src/components/UpdateCar.js

import React, { useState } from 'react';
import { addCar, searchCars, deleteCar} from '../services/carService';

const UpdateCar = () => {
    const [carNo, setCarNo] = useState('');
    const [carDetails, setCarDetails] =  useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCarDetails({
            ...carDetails,
            [id]: value
        });
    };

    const handleUpdate = async () => {
        try {
            await addCar(carDetails);

            alert('Car updated successfully!');
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await deleteCar(carDetails.carNo);
            alert(response.data);
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const searchRequest = {
                carNo : carNo
            }
            const result = await searchCars(searchRequest);
            setCarDetails(result.data[0]);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    return (
        <div>
            <h2>Update Car</h2>
            <input
                type="text" placeholder="Car No" id="carNo" value={carNo} onChange={(e) => setCarNo(e.target.value)}/>
            <button type="button" onClick={handleSearch}>Fetch Car Details</button>
            {carDetails && (
            <form>
                <div className="form-group">
                    <label htmlFor="carYear">Car Year</label>
                    <input type="number" id="carYear" placeholder="2015" value={carDetails.carYear} onChange={handleInputChange} />
                </div> 
                <div className="form-group">
                    <label htmlFor="carMake">Make</label>
                    <input type="text" id="carMake" placeholder="Kia" value={carDetails.carMake} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carModel">Model</label>
                    <input type="text" id="carModel" placeholder="Corolla" value={carDetails.carModel} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carTrim">Trim</label>
                    <input type="text" id="carTrim" placeholder="LX" value={carDetails.carTrim} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carBody">Body</label>
                    <input type="text" id="carBody" placeholder="SUV" value={carDetails.carBody} onChange={handleInputChange} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="carTransmission">Transmission</label>
                    <input type="text" id="carTransmission" placeholder="automatic/manual" value={carDetails.carTransmission} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="carCondition">Condition</label>
                    <input type="number" id="carCondition" placeholder="1-9" value={carDetails.carCondition} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carOdometer">Odometer</label>
                    <input type="number" id="carOdometer" placeholder="Odometer" value={carDetails.carOdometer} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carGasReading">Gas Reading</label>
                    <input type="text" id="carGasReading" placeholder="0-8" value={carDetails.carGasReading} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carFleetNo">Fleet No</label>
                    <input type="text" id="carFleetNo" placeholder="A123" value={carDetails.carFleetNo} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carStatus">Status</label>
                    <input type="text" id="carStatus" placeholder="available/in-use/on-hold" value={carDetails.carStatus} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carSelllingPrice">Selling price</label>
                    <input type="number" id="carSelllingPrice" placeholder="20000.0" value={carDetails.carSelllingPrice} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="carHourlyRentalPrice">Hourly Rental Price</label>
                    <input type="number" id="carHourlyRentalPrice" placeholder="1.5" value={carDetails.carHourlyRentalPrice} onChange={handleInputChange} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="carDailyRentalPrice">Daily Rental Price</label>
                    <input type="number" id="carDailyRentalPrice" placeholder="10.2" value={carDetails.carDailyRentalPrice} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="carWeeklyRentalPrice">Weekly Rental Price</label>
                    <input type="number" id="carWeeklyRentalPrice" placeholder="70.5" value={carDetails.carWeeklyRentalPrice} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carMonthlyRentalPrice">Monthly Rental Price</label>
                    <input type="number" id="carMonthlyRentalPrice" placeholder="240.5" value={carDetails.carMonthlyRentalPrice} onChange={handleInputChange} />
                </div>
                <button type="button" onClick={handleUpdate}>Update Car</button>
                <button type="button" onClick={handleDelete}>Delete Car</button>
            </form>
            )}
        </div>
    );
};

export default UpdateCar;
