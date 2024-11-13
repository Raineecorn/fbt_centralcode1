// src/use-cases/account/app.js

const { accountQuery } = require('../../data-access/connection/identification/app'); // Ensure accountQuery is imported correctly
const { makeAdmins, fetchAccounts, deleteAccounts } = require('../../entities/identification/app'); // Entities from your entities app.js
const { jwtSecret, jwtExpiration } = require('../../function/config'); // Load JWT config

const loginAccount = require('./useCaseLoginAccount.js');
const registerAccount = require('./useCaseRegisterAccount.js');
const fetchAccount = require('./useCaseFetchAccount.js');
const deleteAccount = require('./useCaseDeleteAccount.js');

// Instantiate each use case with required dependencies
const useCaseLoginAccount = loginAccount({ accountRepository: accountQuery, makeAdmin: makeAdmins, jwtSecret, jwtExpiration });
const useCaseRegisterAccount = registerAccount({ accountRepository: accountQuery, makeAdmin: makeAdmins });
const useCaseFetchAccount = fetchAccount({ accountRepository: accountQuery});
const useCaseDeleteAccount = deleteAccount({ accountRepository: accountQuery, makeDeleteAccount: deleteAccounts });

const services = Object.freeze({
    useCaseLoginAccount,
    useCaseRegisterAccount,
    useCaseFetchAccount,
    useCaseDeleteAccount
});

module.exports = services;
module.exports = {
    useCaseLoginAccount,
    useCaseRegisterAccount,
    useCaseFetchAccount,
    useCaseDeleteAccount
};
