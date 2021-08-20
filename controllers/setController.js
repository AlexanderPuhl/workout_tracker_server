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
exports.createSet = async (req, res, next) => {
  try {
    const error = validateRequestBody(req, setFields, next);
    if (error instanceof Error) {
      return next(error);
    }

    const { userId } = req.user;
    const newSet = { user_id: userId };

    for (const [key, value] of Object.entries(req.body)) {
      newSet[key] = value;
    }

    knex
      .insert(newSet)
      .into('set')
      .returning('*')
      .then((result) => {
        const results = result[0];
        res
          .status(201)
          .location(`${req.originalUrl}/${results.set_id}`)
          .json(results);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Get all sets
// @route Get /api/set
// @access Private
exports.getAllSets = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { rows } = await pg.query('SELECT * FROM set WHERE user_id = $1', [userId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a set
// @route Get /api/set/:setId
// @access Private
exports.getOneSet = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { setId } = req.params;
    const { rows } = await pg.query('SELECT * FROM set WHERE user_id = $1 AND set_id = $2', [userId, setId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a set
// @route Put /api/set/:setId
// @access Private
exports.updateSet = (req, res, next) => {
  try {
    const error = validateRequestBody(req, setFields, next);
    if (error instanceof Error) {
      return next(error);
    }

    const { userId } = req.user;
    const { setId } = req.params;
    const toUpdate = {};

    updateableSetFields.forEach((field) => {
      if (field in req.body) {
        toUpdate[field] = req.body[field];
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
        res
          .status(200)
          .location(`${req.originalUrl}/${result.set_id}`)
          .json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a set
// @route Delete /api/set/:setId
// @access Private
exports.deleteSet = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { setId } = req.params;

    // //CHECK TO MAKE SURE SET_ID IS A NUMBER
    if (Number.isNaN(setId)) {
      const error = new Error('Invalid set id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM set WHERE user_id = $1 AND set_id = $2', [userId, setId]);
    if (rowCount === 1) {
      res
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
