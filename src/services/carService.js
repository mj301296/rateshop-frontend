// src/services/carService.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_RATESHOP_BACKEND_URL; // Replace with your Spring Boot backend URL

export const getAllCars = async () => {
    return await axios.get(`${API_BASE_URL}/all-cars`);
};

export const addCar = async (car) => {
    return await axios.put(`${API_BASE_URL}/add-car`, car);
};

export const deleteCar = async (carNo) => {
    return await axios.delete(`${API_BASE_URL}/delete-car`, {params: { carNo }});
};

export const searchCars = async (params) => {
    return await axios.get(`${API_BASE_URL}/search`, { params });
};

export const predictRent = async (request) => {
    return await axios.post(`${API_BASE_URL}/predict-rent`, request);
};

export const checkHealth = async () => {
    return await axios.get(`${API_BASE_URL}/health`);
};

