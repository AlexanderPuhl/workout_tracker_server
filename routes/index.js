const express = require('express');

const router = express.Router();
const passport = require('passport');

const localStrategy = require('../passport/localStrategy');
const jwtStrategy = require('../passport/jwt');

passport.use(localStrategy);
passport.use(jwtStrategy);

// Protect endpoints using JWT Strategy
const jwtAuth = passport.authenticate('jwt', {
  session: false,
  failWithError: true,
});

router.use('/api/user', require('./userRoute'));
router.use('/api/get_all', jwtAuth, require('./getAllRoute'));
router.use('/api/exercise', jwtAuth, require('./exerciseRoute'));
router.use('/api/set', jwtAuth, require('./setRoute'));
router.use('/api/workout', jwtAuth, require('./workoutRoute'));
router.use('/api/workoutlog', jwtAuth, require('./workoutLogRoute'));

module.exports = router;
