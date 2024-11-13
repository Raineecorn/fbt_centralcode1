// src/use-cases/app.js
const { entryQuery } = require('../../data-access/connection/entry/app');  // Ensure entryQuery is imported correctly
const { makeEntrys, searchEntrys, makeUpdateEntrys } = require('../../entities/entry/app');

const addEntrys = require('../entry/useCaseAddEntry');
const editEntrys = require('../entry/useCaseEditEntry');
const getEntrys = require('../entry/useCaseEntry');

// Instantiate each use case with required dependencies
const useCaseAddEntry = addEntrys({ makeEntrys, query: entryQuery });
const useCaseEditEntry = editEntrys({ makeUpdateEntrys, query: entryQuery });
const useCaseEntry = getEntrys({ searchEntrys, query: entryQuery });

const services = Object.freeze({
    useCaseAddEntry,
    useCaseEditEntry,
    useCaseEntry
});

module.exports = services;
module.exports = {
    useCaseAddEntry,
    useCaseEditEntry,
    useCaseEntry
};
