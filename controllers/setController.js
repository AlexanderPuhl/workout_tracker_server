const knex = require('../db/knex');
const pg = require('../db/pg');

const { setFields } = require('../library/tableFields');
const {
  validateRequestBody,
  gatherTableUpdateableFields,
} = require('../utilities/requestBodyUtilities');

const updateableSetFields = gatherTableUpdateableFields(setFields);

// @desc Create a set
// @route POST /api/set
// @access Private
exports.createSet = async (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, setFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const { userId } = request.user;
    const newSet = { user_id: userId };

    for (const [key, value] of Object.entries(request.body)) {
      newSet[key] = value;
    }

    knex
      .insert(newSet)
      .into('set')
      .returning('*')
      .then((result) => {
        const results = result[0];
        response
          .status(201)
          .location(`${request.originalUrl}/${results.set_id}`)
          .json(results);
      })
      .catch((databaseError) => {
        next(databaseError);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Get all sets
// @route Get /api/set
// @access Private
exports.getAllSets = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { rows } = await pg.query('SELECT * FROM set WHERE user_id = $1', [userId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a set
// @route Get /api/set/:setId
// @access Private
exports.getOneSet = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { setId } = request.params;
    const { rows } = await pg.query('SELECT * FROM set WHERE user_id = $1 AND set_id = $2', [userId, setId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a set
// @route Put /api/set/:setId
// @access Private
exports.updateSet = (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, setFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const { userId } = request.user;
    const { setId } = request.params;
    const toUpdate = {};

    updateableSetFields.forEach((field) => {
      if (field in request.body) {
        toUpdate[field] = request.body[field];
      }
    });

    toUpdate.modified_on = new Date(Date.now()).toISOString();

    knex('set')
      .returning('*')
      .where({
        user_id: userId,
        set_id: setId,
      })
      .update(toUpdate)
      .then((results) => {
        const result = results[0];
        response
          .status(200)
          .location(`${request.originalUrl}/${result.set_id}`)
          .json(result);
      })
      .catch((databaseError) => {
        next(databaseError);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a set
// @route Delete /api/set/:setId
// @access Private
exports.deleteSet = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { setId } = request.params;

    // //CHECK TO MAKE SURE SET_ID IS A NUMBER
    if (Number.isNaN(setId)) {
      const error = new Error('Invalid set id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM set WHERE user_id = $1 AND set_id = $2', [userId, setId]);
    if (rowCount === 1) {
      response
        .status(204)
        .json({ message: 'set deleted.' });
    } else {
      const error = new Error(
        `Could not find a set with set_id: ${setId}.`,
      );
      error.status = 406;
      return next(error);
    }
  } catch (error) {
    next(error);
  }
};
