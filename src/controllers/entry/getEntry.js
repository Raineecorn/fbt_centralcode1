// src/controllers/entry/getEntry.js
const getEntry = ({ useCaseEntry }) => {
  return async function get(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { id } = httpRequest.params;

      if (id) {
        // Fetch a single entry by trackingNumber (id)
        const result = await useCaseEntry.getEntryByTrackingNumber(id);
        if (!result) {
          return {
            headers,
            statusCode: 404,
            body: { error: 'Entry not found' },
          };
        }
        return {
          headers,
          statusCode: 200,
          body: { data: result },
        };
      }

      // Fetch all entries if no id is provided
      const results = await useCaseEntry.getAllEntries();
      return {
        headers,
        statusCode: 200,
        body: { data: results },
      };
    } catch (e) {
      console.error(e);
      return {
        headers,
        statusCode: 500,
        body: { error: e.message || 'Internal Server Error' },
      };
    }
  };
};

module.exports = getEntry;
