// src/use-cases/entry/useCaseEntry.js
const useCaseEntry = ({ searchEntrys, query }) => {
  return Object.freeze({
    getEntryByTrackingNumber, // Use a descriptive name for clarity
    getAllEntries,
  });

  // Define getEntryByTrackingNumber function
  async function getEntryByTrackingNumber(trackingNumber) {
    const result = await query.findData(trackingNumber); // Fetch by trackingNumber
    if (!result) {
      throw new Error(`Entry with tracking number ${trackingNumber} not found`);
    }
    return result;
  }

  // Optional: Define getAllEntries function to fetch all entries
  async function getAllEntries() {
    return await query.fetchAllData();
  }
};

module.exports = useCaseEntry;
