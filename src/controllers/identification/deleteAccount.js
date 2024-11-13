const deleteAccount = ({ useCaseDeleteAccount }) => {
    return async function del(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const { userId } = httpRequest; // Retrieved from middleware
  
        const result = await useCaseDeleteAccount({ userId });
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
          body: { message: 'Account deleted successfully' },
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
  
  module.exports = deleteAccount;
  