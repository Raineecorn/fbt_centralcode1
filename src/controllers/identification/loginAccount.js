const loginAdmin = ({ useCaseLoginAccount, validationSchemas }) => {
    return async function post(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        // Validate login input
        const { error } = validationSchemas.loginSchema.validate(httpRequest.body);
        if (error) {
          return {
            headers,
            statusCode: 400,
            body: { error: error.details[0].message },
          };
        }
  
        const { username, password } = httpRequest.body;
  
        // Execute login use case
        const result = await useCaseLoginAccount({ username, password });
        if (!result) {
          return {
            headers,
            statusCode: 401,
            body: { error: 'Invalid username or password' },
          };
        }
  
        return {
          headers,
          statusCode: 200,
          body: { message: 'Login successful', token: result.token },
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
  
  module.exports = loginAdmin;
  