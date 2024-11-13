// src/entities/makeFetchAccount.js

const makeFetchAccount = ({}) => {
    return function make({ userId } = {}) {
      if (!userId) {
        throw new Error("User ID must be provided!");
      }
  
      return Object.freeze({
        getUserId: () => userId,
      });
    };
  };
  
  module.exports = makeFetchAccount;
  