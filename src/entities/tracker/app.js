// src/entities/app.js
const makeTracking = require('./makeTracking');
const makeAudit = require('./makeAudit');

// Initialize entities
const makeTrackings = makeTracking({});
const makeAudits = makeAudit({});

const services = Object.freeze({
  makeTrackings,
  makeAudits,
});

module.exports = services;
module.exports = { makeTrackings, makeAudits };
