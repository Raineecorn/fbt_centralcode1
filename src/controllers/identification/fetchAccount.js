const fetchAccount = ({ useCaseFetchAccount }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const { userId } = httpRequest; // Retrieved from middleware
  
        const result = await useCaseFetchAccount({  });
        if (!result) {
          return {
            headers,
            statusCode: 404,
            body: { error: 'Account not found' },
          };
        }
  
        return {
          headers,
          statusCode: 200,
          body: { account: result },
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
  
  module.exports = fetchAccount;
  