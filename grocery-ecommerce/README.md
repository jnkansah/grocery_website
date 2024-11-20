# Grocery E-commerce Website

A full-stack MERN application for buying and selling groceries online.

## Prerequisites

- Node.js (LTS version)
- MongoDB
- npm or yarn

## Project Structure

```
grocery-ecommerce/
├── backend/           # Express server, API, and database
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   └── server.js     # Server configuration
└── frontend/         # React frontend
    ├── src/          # Source files
    ├── public/       # Static files
    └── package.json  # Frontend dependencies
```

## Setup Instructions

1. Install Node.js from https://nodejs.org/

2. Backend Setup:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. Frontend Setup:
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. Create a .env file in the backend directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

## Features

- User Authentication (Register/Login)
- Product Browsing and Search
- Shopping Cart
- Checkout Process
- Order Management
- Seller Dashboard
- Product Management for Sellers

## Tech Stack

- MongoDB: Database
- Express.js: Backend framework
- React.js: Frontend framework
- Node.js: Runtime environment
- Additional libraries:
  - JWT for authentication
  - Bcrypt for password hashing
  - Mongoose for MongoDB object modeling
