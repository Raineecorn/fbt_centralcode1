// src/data-access/connection/tracker/query.js
const Query = ({ connections, Model, Op, buildCondition }) => {
  // Insert Data
  async function createData({ data }) {
    try {
      const result = await Model.create(data);
      return result;
    } catch (error) {
      console.error("Error on Creating Data: ", error.message);
      throw new Error("Error on inserting data!");
    }
  }

  // Fetch Data by conditions
  async function fetchData(condition = {}) {
    try {
      // Build condition for fetching data based on provided attributes
      const whereCondition = await buildCondition.opConditions(condition);
      if (Object.keys(whereCondition).length === 0) {
        return [];
      }

      const result = await Model.findAll({
        where: {
          [Op.or]: whereCondition
        }
      });

      return result;
    } catch (error) {
      console.error("Error on fetching Data: ", error.message);
      throw new Error("Error on fetching data!");
    }
  }

  // Update Data by condition
  async function updateData(id, data) {
    try {
      const [updated] = await Model.update(data, { where: { trackingNumber: id } });
      if (updated) {
        return await findData(id); // Return updated data
      }
      throw new Error("Data not found for update!");
    } catch (error) {
      console.error("Error on updating Data: ", error.message);
      throw new Error("Error on updating data!");
    }
  }

  // Fetch all Data (without condition)
  async function fetchAllData() {
    try {
      const result = await Model.findAll();
      return result;
    } catch (error) {
      console.error("Error on fetching all Data: ", error.message);
      throw new Error("Error on fetching all data!");
    }
  }

  // Find Data by Primary Key
  async function findData(id) {
    try {
      const result = await Model.findOne({ where: { trackingNumber: id } });
      return result;
    } catch (error) {
      console.error("Error on fetching Data by ID: ", error.message);
      throw new Error("Error on fetching data by ID!");
    }
  }

  // Return all functions as part of the Query object
  return Object.freeze({
    fetchData,
    createData,
    updateData,
    fetchAllData,
    findData,
  });
};

module.exports = Query;
