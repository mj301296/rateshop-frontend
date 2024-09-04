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
                            {/* Add other fields as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarList;
