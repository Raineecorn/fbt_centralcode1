const express = require('express');
const { encrypt, decrypt, tokens } = require('../../function/app');
const middlewares = require('../../middleware/app'); // Import middlewares directly as an object
const router = express.Router();
const makeExpressCallback = require('../../express-callback/app');
const route = require('./routes');

// Configure routes with dependencies
const routes = route({
  router,
  makeExpressCallback,
  middlewares, // Pass middlewares correctly here
  decrypt,
  encrypt,
});

const services = Object.freeze({
  routes,
});

module.exports = services;
module.exports = routes;
