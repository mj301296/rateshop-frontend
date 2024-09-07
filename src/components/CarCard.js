import React from "react";

const getStatusColor = (status) => {
    switch (status) {
        case 'available':
            return 'lightgreen';
        case 'on-hold':
            return 'red';
        case 'in-use':
            return '#FFFF33';
        default:
            return '#555'; // Default color if status doesn't match
    }
};

const CarCard= ({car}) =>{
    return (
    <div className="car-card">
        <div className="car-image">    
            <img src={car.imageUrl || 'https://via.placeholder.com/300'} alt={`${car.carMake} ${car.carModel}`} />
        </div>
        <div className="car-details">
            <div className="car-specifics">
            <h3>{car.carMake} {car.carModel} {car.carTrim} {car.carBody} {car.carYear}</h3>
            <span className="fleet-status" style={{ backgroundColor: getStatusColor(car.carStatus) }}>{car.carStatus}</span>
            </div>
            <div className="car-specifics">
                <span><b>no plate:</b> {car.carNo}</span>
                <span><b>odometer:</b> {car.carOdometer}</span>
                <span><b>condition:</b> {car.carCondition}</span>
                <span><b>gas:</b> {car.carGasReading}</span>
                <span className="fleet-status">{car.carFleetNo}</span>
            </div>
            <div className="price-details">
                <span className="save-amount">Hourly: ${car.carHourlyRentalPrice}</span>
                <span className="save-amount">Daily: ${car.carDailyRentalPrice}</span>
                <span className="save-amount">Weekly: ${car.carWeeklyRentalPrice}</span>
                <span className="save-amount">Monthly: ${car.carMonthlyRentalPrice}</span>
                <span className="save-amount">Selling: ${car.carSelllingPrice}</span>
            </div>
        </div>
    </div>
    );

};

export default CarCard;