// src/App.jsx

import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

const App = () => {
    return (
            <div>
                <h1>Fleet Management</h1>
                <Tabs />
                {/* <Routes>
                    <Route path="/all-cars" element={<CarList />} />
                    <Route path="/add-car" element={<AddCar />} />
                    {/* Add other routes for search and rent prediction */}
                {/* </Routes> */} 
            </div>
    );
};

export default App;
