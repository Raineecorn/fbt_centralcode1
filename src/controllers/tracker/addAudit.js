// src/controllers/tracker/addAudit.js
const addAudit = ({ useCaseAudit, validationSchemas }) => {
    return async function post(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        // Validate input data using Joi
        const { error } = validationSchemas.auditSchema.validate(httpRequest.body);
        if (error) {
          return {
            headers,
            statusCode: 400,
            body: { error: error.details[0].message },
          };
        }
  
        // Extract data from httpRequest
        const auditData = httpRequest.body;
        const result = await useCaseAudit.createAudit(auditData);
  
        // Return success response
        return {
          headers,
          statusCode: 201,
          body: { message: 'Audit created successfully', data: result },
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
  
  module.exports = addAudit;
  