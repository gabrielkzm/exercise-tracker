# Exercise Tracker

Exercise Tracker is a web based project build on MERN (MongoDB, Express, React, Node.js). This project serves as a platform for me to gain exposure and familarity with the MERN stack, it is **not** meant for production purposes, and does **not** include your usual standard practices.

Should you wish to find out more, please contact me at my email (gabrielkoh@live.com) or via [linkedin](https://www.linkedin.com/in/gabrielkohzm).

## Pre-requisites

- MongoDB Atlas account with a configured database cluster.
- Credentials for the database cluster.

## Getting Started

In order to start the application, please follow the subsequent steps:

1. cd into /exercise-tracker.

### `npm i`
- Install all relevant dependencies.

### `npm start`
- Starts the frontend application of **Exercise Tracker** application.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. In a new terminal, cd into exercise-tracker/backend.

3. Create a .env file and fill in appropriate key-pair value for:

- `ATLAS_URI=[credentials for database cluster from MongoAtlas]`

### `npm i`
- Install all relevant dependencies

### `nodemon server`
- Starts the backend application of **Exercise Tracker** application.

## Other Notes

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

*Credits: This project was inspired by [Beau Carnes](https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1).*
