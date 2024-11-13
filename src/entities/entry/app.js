// src/entities/app.js
const makeEntry = require('./makeEntry.js');
const searchEntry = require('./searchEntry.js');
const makeUpdateEntry = require('./updateEntry.js');

// Initialize entities
const makeEntrys = makeEntry({});
const searchEntrys = searchEntry({});
const makeUpdateEntrys = makeUpdateEntry({});


const services = Object.freeze({
    makeEntrys,
    searchEntrys,
    makeUpdateEntrys
});

module.exports = services;
module.exports = { makeEntrys, searchEntrys, makeUpdateEntrys };
