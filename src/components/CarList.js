// src/components/CarList.js

import React, { useEffect, useState } from 'react';
import { getAllCars } from '../services/carService';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await getAllCars();
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    return (
        <div>
            <h2>All Cars</h2>
            <table>
                <thead>
                    <tr>
                        <th>Car No</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Trim</th>
                        <th>Transmission</th>
                        <th>Condition</th>
                        <th>Odometer</th>
                        <th>Fleet No</th>
                        <th>Selling Price</th>
                        <th>Hourly Rental Price</th>
                        <th>Dialy Rental Price</th>
                        <th>Weekly Rental Price</th>
                        <th>Monthly Rental Price</th>
                        {/* Add other columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => (
                        <tr key={car.carNo}>
                            <td>{car.carNo}</td>
                            <td>{car.carYear}</td>
                            <td>{car.carMake}</td>
                            <td>{car.carModel}</td>
                            <td>{car.carTrim}</td>
                            <td>{car.carTransmission}</td>
                            <td>{car.carCondition}</td>
                            <td>{car.carOdometer}</td>
                            <td>{car.carFleetNo}</td>
                            <td>{car.carSelllingPrice}</td>
                            <td>{car.carHourlyRentalPrice}</td>
                            <td>{car.carDailyRentalPrice}</td>
                            <td>{car.carWeeklyRentalPrice}</td>
                            <td>{car.carMonthlyRentalPrice}</td>
                            {/* Add other fields as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarList;
