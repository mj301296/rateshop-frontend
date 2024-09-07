// src/components/Tabs.js

import React, { useState } from 'react';
import CarList from './carList';
import AddCar from './AddCar';
import SearchCars from './SearchCars';
import UpdateCar from './UpdateCar';
import PredictRent from './PredictRent';
// Import other components like SearchCars and PredictRent

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('all-cars');

    const renderContent = () => {
        switch (activeTab) {
            case 'all-cars':
                return <CarList />;
            case 'add-car':
                return <AddCar />;
            case 'search-car':
                    return <SearchCars />;
            case 'update-car':
                    return <UpdateCar />;
            case 'predict-rent':
                    return <PredictRent />;
            
            default:
                return <CarList />;
        }
    };

    return (
        <div>
            <nav className="tab-nav">
                <button onClick={() => setActiveTab('all-cars')}>View All Cars</button>
                <button onClick={() => setActiveTab('add-car')}>Add a New Car</button>
                <button onClick={() => setActiveTab('search-car')}>Search Cars</button>
                <button onClick={() => setActiveTab('update-car')}>Update Car</button>
                <button onClick={() => setActiveTab('predict-rent')}>Predict Rent</button>
            </nav>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Tabs;
