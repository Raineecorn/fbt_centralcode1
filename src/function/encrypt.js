const encrypts = ({jwt,dotenv}) => {
    return async function(text){ 
        try {
            dotenv.config() 
            const accesstokens = jwt.sign(text,process.env.ACCESS_TOKEN_KEY,{
                expiresIn: '1h', // Set token expiration time as needed
              }); 
            return accesstokens 
        } catch (error) {
          throw new Error("Invalid or expired token"); // Throw an error for the middleware to handle
        }
    }
}

module.exports = encrypts