const makeAdmin = require('./makeAdmin.js');
const makeFetchAccount = require('./makeFetchAccount.js');
const makeDeleteAccount = require('./makeDeleteAccount.js');

// Initialize entities
const makeAdmins = makeAdmin({});
const fetchAccounts = makeFetchAccount({});
const deleteAccounts = makeDeleteAccount({});

const services = Object.freeze({
  makeAdmins,
  fetchAccounts,
  deleteAccounts,
});

module.exports = services;
module.exports = { makeAdmins, fetchAccounts, deleteAccounts };
