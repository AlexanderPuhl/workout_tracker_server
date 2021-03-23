const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcryptjs');
const pg = require('../db/pg');

const customFields = {
  username: '',
  password: '',
};

const verifyCallback = async (username, password, done) => {
  const { rows } = await pg.query('SELECT * FROM public.user WHERE username = $1', [username]);
  const user = rows[0];
  if (rows.length === 0) {
    return done(null, false, { message: 'Incorrect username' });
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return done(null, false, { message: 'Incorrect password.' });
  }
  const tempUser = {
    userId: user.user_id,
    username: user.username,
  };
  return done(null, tempUser);
};

const localStrategy = new LocalStrategy((customFields), verifyCallback);

module.exports = localStrategy;
