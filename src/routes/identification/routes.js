const {
  loginAccount,
  registerAccount,
  fetchAccount,
  deleteAccount,
} = require('../../controllers/identification/app'); // Import account-related controllers

const route = ({ router, makeExpressCallback, middlewares }) => {
  // Open routes (do not require JWT)
  router.post('/register', makeExpressCallback(registerAccount));
  router.post('/login', makeExpressCallback(loginAccount));

  // Protected routes (require JWT)
  router.get('/get/account', middlewares.auth, makeExpressCallback(fetchAccount)); // Fetch account details
  router.delete('/remove/account', middlewares.auth, makeExpressCallback(deleteAccount)); // Delete account

  return router;
};

module.exports = route;
