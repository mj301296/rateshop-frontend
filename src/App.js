// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/carList';
import AddCar from './components/AddCar';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Fleet Management</h1>
                <Routes>
                    <Route path="/all-cars" element={<CarList />} />
                    <Route path="/add-car" element={<AddCar />} />
                    {/* Add other routes for search and rent prediction */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
