require('dotenv').config({ path: `${__dirname}/.env` });

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  SERVER_PORT: process.env.SERVER_PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',

  DB_CLIENT: process.env.DB_CLIENT || 'pg',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USERNAME: process.env.DB_USERNAME || 'postgres',
  DB_DATABASE: process.env.DB_DATABASE || 'workout_tracker',
  DB_TEST_DATABASE: process.env.DB_TEST_DATABASE || 'workout_tracker_test',
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT || 5432,
};
