// src/data-access/connection/tracker/query.js
const Query = ({ connections, Model, Op, buildCondition }) => {
  return Object.freeze({
    fetchData,
    createData,
    findData
  });

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

  // Find Data by Primary Key (e.g., `id` for tracking, `audit_id` for audit)
  async function findData(id) {
    try {
      const result = await Model.findByPk(id);
      return result;
    } catch (error) {
      console.error("Error on fetching Data by ID: ", error.message);
      throw new Error("Error on fetching data by ID!");
    }
  }
};

module.exports = Query;
