// src/data-access/connection/account/query.js
const Query = ({ connections, Model, Op, buildCondition }) => {
  // Create an Account
  async function createData(data) {
    try {
      // Log data to verify it includes username and password 
  
      const result = await Model.create(data); 
      
      return result;
    } catch (error) {
      console.error("Error on Creating Account: ", error.message);
      throw new Error("Error on inserting account data!");
    }
  }
  
  // Fetch an Account by Username
  async function findByUsername({ username }) {
    try {
      const result = await Model.findOne({
        where: { username }, // Ensure this is a valid condition object
      });
      return result;
    } catch (error) {
      console.error("Error on fetching Account: ", error.message);
      throw new Error("Error on fetching account data!");
    }
  }

  // Fetch All Accounts
  async function fetchAllData() {
    try {
      const result = await Model.findAll();
      return result;
    } catch (error) {
      console.error("Error on fetching all Accounts: ", error.message);
      throw new Error("Error on fetching all account data!");
    }
  }

  // Find Account by Primary Key (e.g., `id`)
  async function findData(id) {
    try {
      const result = await Model.findByPk(id);
      return result;
    } catch (error) {
      console.error("Error on fetching Account by ID: ", error.message);
      throw new Error("Error on fetching account by ID!");
    }
  }

  // Delete an Account by ID
  async function deleteData(id) {
    try {
      const account = await Model.findByPk(id);
      if (!account) {
        throw new Error("Account not found for deletion!");
      }
      await account.destroy();
      return { message: "Account successfully deleted" };
    } catch (error) {
      console.error("Error on deleting Account: ", error.message);
      throw new Error("Error on deleting account data!");
    }
  }

  // Return all functions as part of the Query object
  return Object.freeze({
    createData,
    findByUsername, // Updated here
    fetchAllData,
    findData,
    deleteData,
  });
};

module.exports = Query;
