const express = require('express');

const router = express.Router();
const passport = require('passport');

const jwtStrategy = require('../passport/jwt');
const { userController } = require('../controllers');

passport.use(jwtStrategy);

const localAuth = passport.authenticate('local', {
  session: false,
  failWithError: true,
});

const jwtAuth = passport.authenticate('jwt', {
  session: false,
  failWithError: true,
});

router.route('/create').post(userController.createUser);
router.route('/login').post(localAuth, userController.loginUser);
router.route('/refresh').post(jwtAuth, userController.refreshToken);
router.route('/update').put(jwtAuth, userController.updateUser);
router.route('/delete').delete(jwtAuth, userController.deleteUser);

module.exports = router;
