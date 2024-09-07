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
        const { id, value } = e.target;
        setCarDetails({
            ...carDetails,
            [id]: value
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
                <div className="form-group">
                    <label htmlFor="carYear">Year</label>
                    <input type="number" id="carYear" placeholder="2015" value={carDetails.carYear} onChange={handleInputChange} />
                </div> 
                <div className="form-group">
                    <label htmlFor="carMake">Make</label>
                    <input type="text" id="carMake" placeholder="Kia" value={carDetails.carMake} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carTrim">Trim</label>
                    <input type="text" id="carTrim" placeholder="LX" value={carDetails.carTrim} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carBody">Body</label>
                    <input type="number" id="carBody" placeholder="SUV" value={carDetails.carBody} onChange={handleInputChange} />
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
                    <label htmlFor="carOdometer">Condition</label>
                    <input type="number" id="carOdometer" placeholder="Odometer" value={carDetails.carOdometer} onChange={handleInputChange} />
                </div>
            </form>
            <button type="button" onClick={handlePredict}>Predict Rent</button>
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
