const authMiddleware = ({ decrypt }) => {
  return async function (req, res, next) {
      const BearerHeader = req.headers['authorization'];

      // Check if the Authorization header is present
      if (!BearerHeader) {
          return res.status(403).json({ message: 'Access Forbidden: No token provided' });
      }

      // Extract the token from the Authorization header
      const token = BearerHeader.split(' ')[1];
      if (!token) {
          return res.status(403).json({ message: 'Access Forbidden: Invalid token format' });
      }

      try {
          // Use decrypt function to verify and decode token
          const decoded = await decrypt(token); // Pass only the token and await the result
          req.userId = decoded.id; // Assuming `id` is in the token payload
          next();
      } catch (error) {
          return res.status(401).json({ message: 'Unauthorized: ' + error.message });
      }
  };
};

module.exports = authMiddleware;
