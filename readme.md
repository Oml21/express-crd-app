# Lab_M Node.js Express App with MongoDB

## Overview

This is a simple Node.js Express application using MongoDB as the database. The application is structured to handle HTTP requests, render views using EJS, and interact with MongoDB through Mongoose. It includes necessary dependencies such as Express, EJS, Mongoose, and others.

## Installation

Before running the application, make sure you have Node.js and MongoDB installed on your system.

1. Clone the repository:

   ```bash
   git clone https://github.com/Oml21/express-crd-app
   ```

2. Navigate to the project directory:

   ```bash
   cd lab_m
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/lab_m
   ```

   Adjust the values according to your preferences.

## Usage

### Development Mode

Run the following command to start the application in development mode using Nodemon:

```bash
npm run dev
```

The server will be running at `http://localhost:3000`. Changes to the code will automatically trigger a server restart.

### Production Mode

For production, you can run the application using:

```bash
npm start
```

## Project Structure

- `index.js`: Main entry point for the application.
- `views/`: Contains EJS templates for rendering views.
- `models/`: Mongoose models for interacting with MongoDB.
- `controllers/`: Business logic for handling different parts of the application.
- `.env`: Environment variables file.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [EJS](https://ejs.co/): Embedded JavaScript templating.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
- [Body-Parser](https://www.npmjs.com/package/body-parser): Middleware to parse incoming request bodies.
- [Dotenv](https://www.npmjs.com/package/dotenv): Load environment variables from a .env file.
- [Nodemon](https://nodemon.io/): Monitor for changes and automatically restart the server.

## Contributing

Feel free to contribute by opening issues or creating pull requests. Your feedback and contributions are welcome!

Happy coding!