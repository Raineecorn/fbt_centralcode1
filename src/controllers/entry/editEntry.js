// src/controllers/entry/editEntry.js
const editEntry = ({ useCaseEditEntry, validationSchemas }) => {
  return async function put(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      // Validate input data using Joi
      const { error } = validationSchemas.entrySchema.validate(httpRequest.body);
      if (error) {
        return {
          headers,
          statusCode: 400,
          body: { error: error.details[0].message },
        };
      }

      // Extract data from httpRequest
      const entryData = httpRequest.body;
      const { id } = httpRequest.params; // Use id as the trackingNumber

      // Attempt to update the entry
      const result = await useCaseEditEntry(id, entryData); // Pass both id and entryData
      if (!result) {
        return {
          headers,
          statusCode: 404,
          body: { error: 'Entry not found' },
        };
      }

      // Return success response
      return {
        headers,
        statusCode: 200,
        body: { message: 'Entry updated successfully', data: result },
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

module.exports = editEntry;
