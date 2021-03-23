const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('../config');
const pg = require('../db/pg');

const options = {
  secretOrKey: JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  algorithms: ['HS256'],
};

const verifyCallBack = async (payload, done) => {
  const { userId, username } = payload;

  const { rows } = await pg.query('SELECT * FROM public.user WHERE user_id = $1 AND username = $2', [userId, username]);
  if (rows.length === 0) {
    return done(null, false, { message: 'Incorrect user' });
  }
  const row = rows[0];
  const user = {
    userId: row.user_id,
    username: row.username,
  };
  return done(null, user);
};

const jwtStrategy = new JwtStrategy(options, verifyCallBack);

module.exports = jwtStrategy;
