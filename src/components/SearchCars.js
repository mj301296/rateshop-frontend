// src/components/SearchCars.js

import React, { useState } from 'react';
import { searchCars } from '../services/carService';
import CarCard from './CarCard';

const SearchCars = () => {
    const [searchParams, setSearchParams] = useState({
        carNo: '',
        carYear: '',
        carMake: '',
        carModel: '',
        carTrim: '',
        carBody: '',
        carTransmission: '',
        carCondition: '',
        carOdometer: '',
        carFleetNo: ''
    });
    const [cars, setCars] = useState([]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setSearchParams({
            ...searchParams,
            [id]: value
        });
    };

    const handleSearch = async () => {
        try {
            const searchParamsApi = Object.fromEntries(
                Object.entries(searchParams).filter(([_, value]) => value !== '')
            );
            const result = await searchCars(searchParamsApi);
            setCars(result.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    return (
        <div>
            <h2>Search Cars</h2>
            <form>
                <input type="text" id="carNo" placeholder="Car No" value={searchParams.carNo} onChange={handleInputChange} />
                <input type="number" id="carYear" placeholder="Year" value={searchParams.carYear} onChange={handleInputChange} />
                <input type="text" id="carMake" placeholder="Make" value={searchParams.carMake} onChange={handleInputChange} />
                <input type="text" id="carModel" placeholder="Model" value={searchParams.carModel} onChange={handleInputChange} />
                <input type="text" id="carTrim" placeholder="Trim" value={searchParams.carTrim} onChange={handleInputChange} />
                <input type="text" id="carBody" placeholder="Body" value={searchParams.carBody} onChange={handleInputChange} />
                <input type="text" id="carTransmission" placeholder="Transmission" value={searchParams.carTransmission} onChange={handleInputChange} />
                <input type="number" id="carCondition" placeholder="Condition" value={searchParams.carCondition} onChange={handleInputChange} />
                <input type="number" id="carOdometer" placeholder="Odometer" value={searchParams.carOdometer} onChange={handleInputChange} />
                <input type="text" id="carFleetNo" placeholder="Fleet No" value={searchParams.carFleetNo} onChange={handleInputChange} />
                <button type="button" onClick={handleSearch}>Search</button>
            </form>

            {cars.length > 0 && (
                cars.map(car=>(
                    <CarCard key={car.carNo} car={car}/>
                ))
            )}
        </div>
    );
};

export default SearchCars;
