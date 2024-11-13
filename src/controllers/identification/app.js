const { useCaseLoginAccount, useCaseRegisterAccount, useCaseFetchAccount, useCaseDeleteAccount } = require('../../use-case/identification/app');
const { encrypt, decrypt, tokens, hash, validationSchemas } = require('../../function/app');
    
const loginAccountController = require('./loginAccount');
const registerAccountController = require('./registerAccount');
const fetchAccountController = require('./fetchAccount');
const deleteAccountController = require('./deleteAccount');

const loginAccount = loginAccountController({ useCaseLoginAccount, validationSchemas });
const registerAccount = registerAccountController({ useCaseRegisterAccount, validationSchemas });
const fetchAccount = fetchAccountController({ useCaseFetchAccount });
const deleteAccount = deleteAccountController({ useCaseDeleteAccount });

const services = Object.freeze({
  loginAccount,
  registerAccount,
  fetchAccount,
  deleteAccount
});

module.exports = services;
module.exports = {
  loginAccount,
  registerAccount,
  fetchAccount,
  deleteAccount
};
