const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { encrypt, decrypt, tokens } = require('../function/app');

// Import the authorization middleware
const authMiddleware = require('./authorization'); // Adjust path if necessary

// Load environment variables once
dotenv.config();

// Initialize the auth middleware with dependencies
const auth = authMiddleware({ decrypt }); // Use decrypt from your app functions

// Define and export middlewares as an object
const middlewares = {
  auth,
};

module.exports = middlewares;
