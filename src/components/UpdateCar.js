// src/components/UpdateCar.js

import React, { useState } from 'react';
import axios from 'axios';

const UpdateCar = () => {
    const [carNo, setCarNo] = useState('');
    const [carDetails, setCarDetails] = useState({
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarDetails({
            ...carDetails,
            [name]: value
        });
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/fleet/update/${carNo}`, carDetails);
            alert('Car updated successfully!');
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    return (
        <div>
            <h2>Update Car</h2>
            <form>
                <input
                    type="text"
                    name="carNo"
                    placeholder="Car No"
                    value={carNo}
                    onChange={(e) => setCarNo(e.target.value)}
                />
                <input type="number" name="carYear" placeholder="Year" value={carDetails.carYear} onChange={handleInputChange} />
                <input type="text" name="carMake" placeholder="Make" value={carDetails.carMake} onChange={handleInputChange} />
                <input type="text" name="carModel" placeholder="Model" value={carDetails.carModel} onChange={handleInputChange} />
                <input type="text" name="carTrim" placeholder="Trim" value={carDetails.carTrim} onChange={handleInputChange} />
                <input type="text" name="carBody" placeholder="Body" value={carDetails.carBody} onChange={handleInputChange} />
                <input type="text" name="carTransmission" placeholder="Transmission" value={carDetails.carTransmission} onChange={handleInputChange} />
                <input type="number" name="carCondition" placeholder="Condition" value={carDetails.carCondition} onChange={handleInputChange} />
                <input type="number" name="carOdometer" placeholder="Odometer" value={carDetails.carOdometer} onChange={handleInputChange} />
                <input type="text" name="carFleetNo" placeholder="Fleet No" value={carDetails.carFleetNo} onChange={handleInputChange} />
                <input type="number" name="carSelllingPrice" placeholder="Selling Price" value={carDetails.carSelllingPrice} onChange={handleInputChange} />
                <input type="number" name="carHourlyRentalPrice" placeholder="Hourly Rental Price" value={carDetails.carHourlyRentalPrice} onChange={handleInputChange} />
                <input type="number" name="carDailyRentalPrice" placeholder="Daily Rental Price" value={carDetails.carDailyRentalPrice} onChange={handleInputChange} />
                <input type="number" name="carWeeklyRentalPrice" placeholder="Weekly Rental Price" value={carDetails.carWeeklyRentalPrice} onChange={handleInputChange} />
                <input type="number" name="carMonthlyRentalPrice" placeholder="Monthly Rental Price" value={carDetails.carMonthlyRentalPrice} onChange={handleInputChange} />
                <button type="button" onClick={handleUpdate}>Update Car</button>
            </form>
        </div>
    );
};

export default UpdateCar;
