const knex = require('../db/knex');
const pg = require('../db/pg');

const { exerciseFields } = require('../library/tableFields');
const {
  validateRequestBody,
  gatherTableUpdateableFields,
} = require('../utilities/requestBodyUtilities');

const updateableExerciseFields = gatherTableUpdateableFields(exerciseFields);

// @desc Create a exercise
// @route POST /api/exercise/
// @access Private
exports.createExercise = async (req, res, next) => {
  try {
    validateRequestBody(req, exerciseFields, next);

    knex
      .insert(req.body)
      .into('exercise')
      .returning('*')
      .then((result) => {
        const results = result[0];
        res
          .status(201)
          .location(`${req.originalUrl}/${results.exercise_id}`)
          .json(results);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};
// @desc Get all workouts
// @route Get /api/exercise
// @access Private
exports.getAllExercises = async (req, res, next) => {
  try {
    const { rows } = await pg.query('SELECT * FROM exercise');
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a exercise
// @route Get /api/exercise/:exerciseId
// @access Private
exports.getOneExercise = async (req, res, next) => {
  try {
    const { exerciseId } = req.params;
    const { rows } = await pg.query('SELECT * FROM exercise WHERE exercise_id = $1', [exerciseId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a exercise
// @route Put /api/exercise/:exerciseId
// @access Private
exports.updateExercise = (req, res, next) => {
  try {
    validateRequestBody(req, exerciseFields, next);

    const { exerciseId } = req.params;
    const toUpdate = {};

    updateableExerciseFields.forEach((field) => {
      if (field in req.body) {
        toUpdate[field] = req.body[field];
      }
    });

    toUpdate.modified_on = new Date(Date.now()).toISOString();

    knex('exercise')
      .returning('*')
      .where({
        exercise_id: exerciseId,
      })
      .update(toUpdate)
      .then((results) => {
        const result = results[0];
        res
          .status(200)
          .location(`${req.originalUrl}/${result.exercise_id}`)
          .json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a exercise
// @route Delete /api/exercise/:exerciseId
// @access Private
exports.deleteExercise = async (req, res, next) => {
  try {
    const { exerciseId } = req.params;

    // //CHECK TO MAKE SURE WORKOUT_ID IS A NUMBER
    if (Number.isNaN(exerciseId)) {
      const error = new Error('Invalid exercise id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM exercise WHERE exercise_id = $1', [exerciseId]);
    if (rowCount === 1) {
      res
        .status(204)
        .json({ message: 'Exercise deleted.' });
    } else {
      const error = new Error(
        `Could not find a exercise with exercise_id: ${exerciseId}.`,
      );
      error.status = 406;
      return next(error);
    }
  } catch (error) {
    next(error);
  }
};
