const bcrypt = require('bcryptjs');
const knex = require('../db/knex');
const pg = require('../db/pg');

const { userFields } = require('../library/tableFields');
const { createAuthToken } = require('../utilities/jwtUtilities');
const {
  validateRequestBody,
  gatherTableUpdateableFields,
} = require('../utilities/requestBodyUtilities');

const updateableUserFields = gatherTableUpdateableFields(userFields);

// @desc Create in user
// @route POST /api/user/create
// @access Public
exports.createUser = async (req, res, next) => {
  try {
    validateRequestBody(req, userFields, next);

    const {
      username, password, roleId,
    } = req.body;

    const userExists = await pg.query('SELECT * FROM public.user WHERE username = $1', [username]);
    if (userExists.rows.length === 0) {
      const query = 'INSERT INTO public.user(username, password, role_id) VALUES($1, $2, $3) RETURNING *';
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = [username, hashedPassword, roleId];
      const { rows } = await pg.query(query, newUser);
      const result = rows[0];
      const response = {
        user_id: result.user_id,
        role_id: result.role_id,
        username: result.username,
        reset_token: result.reset_token,
        reset_token_expiration: result.reset_token_expiration,
      };
      res
        .status(201)
        .location(`${req.originalUrl}/${response.user_id}`)
        .json(response);
    } else {
      const error = new Error('The username or email already exists.');
      error.status = 400;
      error.reason = 'ValidationError';
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

// @desc Login a user
// @route POST /api/user/login
// @access Public
exports.loginUser = (req, res, _next) => {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
};

// @desc Refresh a JWT Token for a logged in user
// @route POST /api/user/refresh
// @access Private
exports.refreshToken = (req, res, _next) => {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
};

// @desc Get user data
// @route GET /api/user/get_data
// @access Private
exports.getUserData = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { rows } = await pg.query('SELECT role_id, username, last_login, created_on, modified_on FROM public.user WHERE user_id = $1', [userId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a user
// @route POST /api/user/update
// @access Private
exports.updateUser = (req, res, next) => {
  validateRequestBody(req, userFields, next);

  const { userId } = req.user;
  const toUpdate = {};

  updateableUserFields.forEach((field) => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  toUpdate.modified_on = new Date(Date.now()).toISOString();

  knex('user')
    .returning('*')
    .where({ user_id: userId })
    .update(toUpdate)
    .then((results) => {
      const result = results[0];
      delete result.password;
      res.status(200).json(result);
    })
    .catch((error) => {
      next(error);
    });
};

// @desc Delete a user
// @route POST /api/user/delete
// @access Private
exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { rowCount } = await pg.query('DELETE FROM public.user WHERE user_id = $1', [userId]);
    if (rowCount === 1) {
      res
        .status(204)
        .json({ message: 'User account deleted.' });
    }
  } catch (error) {
    next(error);
  }
};

//* **********************************************************************************************//
//* *********************************//TEST UTILITY CONTROLLERS//*********************************//
//* **********************************************************************************************//
exports.findOne = async (username) => {
  try {
    const { rows } = await pg.query('select * from public.user WHERE username = $1', [username]);
    return rows[0];
  } catch (error) {
    return error;
  }
};
