import React, { useEffect, useState } from 'react';
import { getAllCars } from '../services/carService';
import CarCard from './CarCard';

const CarList = () => {
    const [cars, setCars] = useState([]);
    
    // Assuming each car has a 'status' field that determines if it's "on hold", "in use", or "available"
    const [onHoldCars, setOnHoldCars] = useState([]);
    const [inUseCars, setInUseCars] = useState([]);
    const [availableCars, setAvailableCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await getAllCars();
            const allCars = response.data;
            setCars(allCars);
            // Filter cars based on status
            setOnHoldCars(allCars.filter(car => car.carStatus === 'on-hold'));
            setInUseCars(allCars.filter(car => car.carStatus === 'in-use'));
            setAvailableCars(allCars.filter(car => car.carStatus === 'available'));
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    return (
        <div>       
            <div className="car-section">
                <h3>On Hold</h3>
                {onHoldCars.length > 0 ? (
                    onHoldCars.map(car => (
                        <CarCard key={car.carNo} car={car} />
                    ))
                ) : (
                    <p>No cars on hold</p>
                )}
            </div>

            <div className="car-section">
                <h3>In Use</h3>
                {inUseCars.length > 0 ? (
                    inUseCars.map(car => (
                        <CarCard key={car.carNo} car={car} />
                    ))
                ) : (
                    <p>No cars in use</p>
                )}
            </div>

            <div className="car-section">
                <h3>Available</h3>
                {availableCars.length > 0 ? (
                    availableCars.map(car => (
                        <CarCard key={car.carNo} car={car} />
                    ))
                ) : (
                    <p>No available cars</p>
                )}
            </div>
        </div>
    );
};

export default CarList;
