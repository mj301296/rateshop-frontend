import React, { useState } from 'react';
import { predictRent } from '../services/carService';

const PredictRent = () => {
    const [carDetails, setCarDetails] = useState({
        carYear: '',
        carMake: '',
        carTrim: '',
        carBody: '',
        carCondition: '',
        carOdometer: '',
        carTransmission: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarDetails({
            ...carDetails,
            [name]: value
        });
    };
    const [rentPrediction, setRentPrediction] = useState(null);

    const handlePredict = async () => {
        try {
            const prediction = await predictRent(carDetails);
            setRentPrediction(prediction.data);
        } catch (error) {
            console.error('Error predicting rent:', error);
        }
    };

    return (
        <div>
            <h2>Predict Rent</h2>
            <form>
                <input type="number" name="carYear" placeholder="Year" value={carDetails.carYear} onChange={handleInputChange} />
                <input type="text" name="carMake" placeholder="Make" value={carDetails.carMake} onChange={handleInputChange} />
                <input type="text" name="carTrim" placeholder="Trim" value={carDetails.carTrim} onChange={handleInputChange} />
                <input type="text" name="carBody" placeholder="Body" value={carDetails.carBody} onChange={handleInputChange} />
                <input type="text" name="carTransmission" placeholder="Transmission" value={carDetails.carTransmission} onChange={handleInputChange} />
                <input type="number" name="carCondition" placeholder="Condition" value={carDetails.carCondition} onChange={handleInputChange} />
                <input type="number" name="carOdometer" placeholder="Odometer" value={carDetails.carOdometer} onChange={handleInputChange} />
                <button type="button" onClick={handlePredict}>Predict Rent</button>
            </form>
            {rentPrediction && (
                <div>
                    <p>Selling Price: {rentPrediction.sellingprice}</p>
                    <p>Hourly: {rentPrediction.hourly}</p>
                    <p>Daily: {rentPrediction.daily}</p>
                    <p>Weekly: {rentPrediction.weekly}</p>
                    <p>Monthly: {rentPrediction.monthly}</p>
                </div>
            )}
        </div>
    );
};

export default PredictRent;
