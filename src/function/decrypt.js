const decrypts = ({ jwt, dotenv }) => {
    return async function (token) { // Expect only token as input
        dotenv.config();

        
        // Wrap jwt.verify in a Promise to allow async/await usage
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
                if (error) {
                    console.error("JWT verification error:", error.message);
                    return reject(new Error("Invalid token for Authorization"));
                }
                resolve(decoded);
            });
        });
    };
};

module.exports = decrypts;
