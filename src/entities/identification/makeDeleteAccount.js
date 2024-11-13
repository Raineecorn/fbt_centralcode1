// src/entities/makeDeleteAccount.js

const makeDeleteAccount = ({}) => {
    return function make({ userId } = {}) {
      if (!userId) {
        throw new Error("User ID must be provided!");
      }
  
      return Object.freeze({
        getUserId: () => userId,
      });
    };
  };
  
  module.exports = makeDeleteAccount;
  