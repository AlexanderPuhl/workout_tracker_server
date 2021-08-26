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
exports.createExercise = async (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, exerciseFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    knex
      .insert(request.body)
      .into('exercise')
      .returning('*')
      .then((result) => {
        const results = result[0];
        response
          .status(201)
          .location(`${request.originalUrl}/${results.exercise_id}`)
          .json(results);
      })
      .catch((databaseError) => {
        next(databaseError);
      });
  } catch (error) {
    next(error);
  }
};
// @desc Get all workouts
// @route Get /api/exercise
// @access Private
exports.getAllExercises = async (request, response, next) => {
  try {
    const { rows } = await pg.query('SELECT * FROM exercise');
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a exercise
// @route Get /api/exercise/:exerciseId
// @access Private
exports.getOneExercise = async (request, response, next) => {
  try {
    const { exerciseId } = request.params;
    const { rows } = await pg.query('SELECT * FROM exercise WHERE exercise_id = $1', [exerciseId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a exercise
// @route Put /api/exercise/:exerciseId
// @access Private
exports.updateExercise = (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, exerciseFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const { exerciseId } = request.params;
    const toUpdate = {};

    updateableExerciseFields.forEach((field) => {
      if (field in request.body) {
        toUpdate[field] = request.body[field];
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
        response
          .status(200)
          .location(`${request.originalUrl}/${result.exercise_id}`)
          .json(result);
      })
      .catch((databaseError) => {
        next(databaseError);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a exercise
// @route Delete /api/exercise/:exerciseId
// @access Private
exports.deleteExercise = async (request, response, next) => {
  try {
    const { exerciseId } = request.params;

    // //CHECK TO MAKE SURE WORKOUT_ID IS A NUMBER
    if (Number.isNaN(exerciseId)) {
      const error = new Error('Invalid exercise id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM exercise WHERE exercise_id = $1', [exerciseId]);
    if (rowCount === 1) {
      response
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
