# Rateshop Frontend

This repository is part of the **Car Rental Front Office Operations** application, which consists of the following components:

- [**CarRentalPricingPrediction**](https://github.com/mj301296/CarRentalPricingPrediction): A Python package for predicting car rental prices.
- [**CarRentalPredictionApi**](https://github.com/mj301296/CarRentalPredictionApi): A FastAPI microservice that provides car rental price predictions.
- [**Rateshop Backend**](https://github.com/mj301296/RateShop): A Spring Boot application that handles car fleet management.
- [**Rateshop Frontend**](https://github.com/mj301296/rateshop-frontend): A React application offering an interactive user interface for managing car fleet operations.

## Rateshop Frontend

This is the **React** frontend of the Car Rental application, providing the user interface to interact with the car fleet system. Users can:

- View a list of cars
- Add a new car
- Update existing car details
- Search for cars
- Predict car rental prices

## Explanation of Files and Directories

- **`src/`**: Source code for the React frontend application.
  - **`App.js`**: The main component that renders the application, managing navigation between different features.
  - **`App.css`**: Global styles for the application.
  - **`index.js`**: Entry point for the React app, rendering the root component into the DOM.
  - **`components/`**: Contains the main components for the application.
    - **`AddCar.js`**: A form component that allows users to add a new car to the fleet.
    - **`CarCard.js`**: A component that displays the details of a single car.
    - **`CarList.js`**: Displays a list of cars available in the fleet.
    - **`PredictRent.js`**: Provides an interface for users to input car details and predict rental prices.
    - **`SearchCars.js`**: A search bar for filtering cars by various attributes.
    - **`Tabs.js`**: A navigation component for switching between different functionalities (add, search, predict, etc.).
    - **`UpdateCar.js`**: A form for updating car details.
  - **`services/`**: Contains services for making API calls to the backend.
    - **`carService.js`**: Handles all interactions with the backend API, such as fetching car data, adding new cars, and predicting rent.
- **`rateshop-frontend-deployment.yaml`**: Kubernetes deployment file for deploying the React app to a cluster.
- **`package.json`**: Lists dependencies and scripts for running the application.

## Installation

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Building for Production

1. Build the project:

    ```bash
    npm run build
    ```

    This will generate a `build/` folder containing the production-ready files.

## Steps to Run the App via Docker

1. Build the Docker image:

    ```bash
    docker build -t rateshop-frontend .
    ```

2. Run the application in a Docker container:

    ```bash
    docker run -p 3000:3000 rateshop-frontend
    ```

    The application will be accessible at `http://localhost:3000`.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **CSS**: For styling the components and the overall layout.
- **Docker**: Containerization of the frontend application for consistent and scalable deployment.
- **Kubernetes**: For deploying and managing the application in a cloud environment.

## Kubernetes Deployment

To deploy the application to a Kubernetes cluster, use the provided `rateshop-frontend-deployment.yaml` file.

1. Apply the Kubernetes configuration:

    ```bash
    kubectl apply -f rateshop-frontend-deployment.yaml
    ```

2. The frontend application will be exposed via a LoadBalancer, and you can access it using the external IP provided by the LoadBalancer service.


