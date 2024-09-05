// src/components/SearchCars.js

import React, { useState } from 'react';
import { searchCars } from '../services/carService';

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
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
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
                <input type="text" name="carNo" placeholder="Car No" value={searchParams.carNo} onChange={handleInputChange} />
                <input type="number" name="carYear" placeholder="Year" value={searchParams.carYear} onChange={handleInputChange} />
                <input type="text" name="carMake" placeholder="Make" value={searchParams.carMake} onChange={handleInputChange} />
                <input type="text" name="carModel" placeholder="Model" value={searchParams.carModel} onChange={handleInputChange} />
                <input type="text" name="carTrim" placeholder="Trim" value={searchParams.carTrim} onChange={handleInputChange} />
                <input type="text" name="carBody" placeholder="Body" value={searchParams.carBody} onChange={handleInputChange} />
                <input type="text" name="carTransmission" placeholder="Transmission" value={searchParams.carTransmission} onChange={handleInputChange} />
                <input type="number" name="carCondition" placeholder="Condition" value={searchParams.carCondition} onChange={handleInputChange} />
                <input type="number" name="carOdometer" placeholder="Odometer" value={searchParams.carOdometer} onChange={handleInputChange} />
                <input type="text" name="carFleetNo" placeholder="Fleet No" value={searchParams.carFleetNo} onChange={handleInputChange} />
                <button type="button" onClick={handleSearch}>Search</button>
            </form>

            {cars.length > 0 && (
                <div>
                    <h3>Search Results</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Car No</th>
                                <th>Year</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Trim</th>
                                <th>Body</th>
                                <th>Transmission</th>
                                <th>Condition</th>
                                <th>Odometer</th>
                                <th>Fleet No</th>
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
                                    <td>{car.carBody}</td>
                                    <td>{car.carTransmission}</td>
                                    <td>{car.carCondition}</td>
                                    <td>{car.carOdometer}</td>
                                    <td>{car.carFleetNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SearchCars;
