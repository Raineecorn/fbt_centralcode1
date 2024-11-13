// src/controllers/tracker/addTracking.js
const addTracking = ({ useCaseTracking, validationSchemas }) => {
    return async function post(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        // Validate input data using Joi
        const { error } = validationSchemas.trackingSchema.validate(httpRequest.body);
        if (error) {
          return {
            headers,
            statusCode: 400,
            body: { error: error.details[0].message },
          };
        }
  
        // Extract data from httpRequest
        const trackingData = httpRequest.body;
        const result = await useCaseTracking.createTracking(trackingData);
  
        // Return success response
        return {
          headers,
          statusCode: 201,
          body: { message: 'Tracking created successfully', data: result },
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
  
  module.exports = addTracking;
  