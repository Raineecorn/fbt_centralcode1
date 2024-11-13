// src/controllers/entry/addEntry.js
const addEntry = ({ useCaseAddEntry, validationSchemas }) => {
    return async function post(httpRequest) {
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
        const result = await useCaseAddEntry(entryData);
  
        // Return success response
        return {
          headers,
          statusCode: 201,
          body: { message: 'Entry created successfully', data: result },
        };
      } catch (e) {
        // Log error and return error response
        console.error(e);
        return {
          headers,
          statusCode: 500,
          body: { error: e.message || 'Internal Server Error' },
        };
      }
    };
  };
  
  module.exports = addEntry;
  