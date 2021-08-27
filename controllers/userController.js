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
exports.createUser = async (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, userFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const {
      username, email, name, password, roleId,
    } = request.body;

    const userExists = await pg.query('SELECT * FROM public.user WHERE username = $1', [username]);
    if (userExists.rows.length === 0) {
      const query = 'INSERT INTO public.user(username, email, name, password, role_id) VALUES($1, $2, $3, $4, $5) RETURNING *';
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = [username, email, name, hashedPassword, roleId];
      const { rows } = await pg.query(query, newUser);
      const result = rows[0];
      const dbResponse = {
        user_id: result.user_id,
        role_id: result.role_id,
        username: result.username,
        email: result.email,
        name: result.name,
        reset_token: result.reset_token,
        reset_token_expiration: result.reset_token_expiration,
      };
      response
        .status(201)
        .location(`${request.originalUrl}/${dbResponse.user_id}`)
        .json(dbResponse);
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
exports.loginUser = (request, response, _next) => {
  const authToken = createAuthToken(request.user);
  response.json({ authToken });
};

// @desc Refresh a JWT Token for a logged in user
// @route POST /api/user/refresh
// @access Private
exports.refreshToken = (request, response, _next) => {
  const authToken = createAuthToken(request.user);
  response.json({ authToken });
};

// @desc Get user data
// @route GET /api/user/get_data
// @access Private
exports.getUserData = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { rows } = await pg.query('SELECT role_id, username, last_login, created_on, modified_on FROM public.user WHERE user_id = $1', [userId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a user
// @route POST /api/user/update
// @access Private
exports.updateUser = (request, response, next) => {
  const requestBodyError = validateRequestBody(request, userFields, next);
  if (requestBodyError instanceof Error) {
    return next(requestBodyError);
  }

  const { userId } = request.user;
  const toUpdate = {};

  updateableUserFields.forEach((field) => {
    if (field in request.body) {
      toUpdate[field] = request.body[field];
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
      response.status(200).json(result);
    })
    .catch((databaseError) => {
      next(databaseError);
    });
};

// @desc Delete a user
// @route POST /api/user/delete
// @access Private
exports.deleteUser = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { rowCount } = await pg.query('DELETE FROM public.user WHERE user_id = $1', [userId]);
    if (rowCount === 1) {
      response
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
