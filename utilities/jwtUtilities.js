const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRATION } = require('../config');

exports.createAuthToken = (user) => {
  const payload = {
    userId: user.userId,
    username: user.username,
    iat: Date.now(),
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION, algorithm: 'HS256' });
};
