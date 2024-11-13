// src/entities/makeAdmin.js

const makeAdmin = ({}) => {
    return function make({ username, password } = {}) {
      // Validation for required fields
      if (!username) {
        throw new Error("Username must be provided!");
      }
      if (!password) {
        throw new Error("Password must be provided!");
      }
  
      // Return an immutable object with getter functions
      return Object.freeze({
        getUsername: () => username,
        getPassword: () => password,
      });
    };
  };
  
  module.exports = makeAdmin;
  