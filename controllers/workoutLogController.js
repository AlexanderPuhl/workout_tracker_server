const knex = require('../db/knex');
const pg = require('../db/pg');

const { workoutLogFields } = require('../library/tableFields');
const {
  validateRequestBody,
  gatherTableUpdateableFields,
} = require('../utilities/requestBodyUtilities');

const updateableWorkoutLogFields = gatherTableUpdateableFields(workoutLogFields);

// @desc Create a workout log
// @route POST /api/workoutlog
// @access Private
exports.createWorkoutLog = async (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, workoutLogFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const { userId } = request.user;
    const newWorkoutLog = { user_id: userId };

    for (const [key, value] of Object.entries(request.body)) {
      newWorkoutLog[key] = value;
    }

    knex
      .insert(newWorkoutLog)
      .into('workout_log')
      .returning('*')
      .then((result) => {
        const results = result[0];
        response
          .status(201)
          .location(`${request.originalUrl}/${results.workout_log_id}`)
          .json(results);
      })
      .catch((databaseError) => {
        next(databaseError);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Get all workout logs
// @route Get /api/workoutlog
// @access Private
exports.getAllWorkoutLogs = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { rows } = await pg.query('SELECT * FROM workout_log WHERE user_id = $1', [userId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a workout log
// @route Get /api/workoutlog/:workoutLogId
// @access Private
exports.getOneWorkoutLog = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { workoutLogId } = request.params;
    const { rows } = await pg.query('SELECT * FROM workout_log WHERE user_id = $1 AND workout_log_id = $2', [userId, workoutLogId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a workout log
// @route Put /api/workoutlog/:workoutLogId
// @access Private
exports.updateWorkoutLog = (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, workoutLogFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const { userId } = request.user;
    const { workoutLogId } = request.params;
    const toUpdate = {};

    updateableWorkoutLogFields.forEach((field) => {
      if (field in request.body) {
        toUpdate[field] = request.body[field];
      }
    });

    toUpdate.modified_on = new Date(Date.now()).toISOString();

    knex('workout_log')
      .returning('*')
      .where({
        user_id: userId,
        workout_log_id: workoutLogId,
      })
      .update(toUpdate)
      .then((results) => {
        const result = results[0];
        response
          .status(200)
          .location(`${request.originalUrl}/${result.workout_log_id}`)
          .json(result);
      })
      .catch((databaseError) => {
        next(databaseError);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a workout log
// @route Delete /api/workoutlog/:workoutLogId
// @access Private
exports.deleteWorkoutLog = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { workoutLogId } = request.params;

    // //CHECK TO MAKE SURE WORKOUT_LOG_ID IS A NUMBER
    if (Number.isNaN(workoutLogId)) {
      const error = new Error('Invalid workout log id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM workout_log WHERE user_id = $1 AND workout_log_id = $2', [userId, workoutLogId]);
    if (rowCount === 1) {
      response.sendStatus(204);
    } else {
      const error = new Error(
        `Could not find a workout log with workout_log_id: ${workoutLogId}.`,
      );
      error.status = 406;
      return next(error);
    }
  } catch (error) {
    next(error);
  }
};
