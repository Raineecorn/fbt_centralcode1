
const registerAccount = ({ useCaseRegisterAccount, validationSchemas }) => {
    return async function post(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        // Validate registration input data
        const { error } = validationSchemas.registerSchema.validate(httpRequest.body);
        if (error) {
          return {
            headers,
            statusCode: 400,
            body: { error: error.details[0].message },
          };
        }
  
        const accountData = httpRequest.body;
  
        // Execute the register use case
        const result = await useCaseRegisterAccount(accountData);
        return {
          headers,
          statusCode: 201,
          body: { message: 'Account registered successfully', account: result },
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
  
  module.exports = registerAccount;
  