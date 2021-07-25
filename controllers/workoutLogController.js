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
exports.createWorkoutLog = async (req, res, next) => {
  try {
    validateRequestBody(req, workoutLogFields, next);

    const { userId } = req.user;
    const newWorkoutLog = { user_id: userId };

    for (const [key, value] of Object.entries(req.body)) {
      newWorkoutLog[key] = value;
    }

    knex
      .insert(newWorkoutLog)
      .into('workout_log')
      .returning('*')
      .then((result) => {
        const results = result[0];
        res
          .status(201)
          .location(`${req.originalUrl}/${results.workout_log_id}`)
          .json(results);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Get all workout logs
// @route Get /api/workoutlog
// @access Private
exports.getAllWorkoutLogs = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { rows } = await pg.query('SELECT * FROM workout_log WHERE user_id = $1', [userId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a workout log
// @route Get /api/workoutlog/:workoutLogId
// @access Private
exports.getOneWorkoutLog = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { workoutLogId } = req.params;
    const { rows } = await pg.query('SELECT * FROM workout_log WHERE user_id = $1 AND workout_log_id = $2', [userId, workoutLogId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a workout log
// @route Put /api/workoutlog/:workoutLogId
// @access Private
exports.updateWorkoutLog = (req, res, next) => {
  try {
    validateRequestBody(req, workoutLogFields, next);

    const { userId } = req.user;
    const { workoutLogId } = req.params;
    const toUpdate = {};

    updateableWorkoutLogFields.forEach((field) => {
      if (field in req.body) {
        toUpdate[field] = req.body[field];
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
        res
          .status(200)
          .location(`${req.originalUrl}/${result.workout_log_id}`)
          .json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a workout log
// @route Delete /api/workoutlog/:workoutLogId
// @access Private
exports.deleteWorkoutLog = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { workoutLogId } = req.params;

    // //CHECK TO MAKE SURE WORKOUT_LOG_ID IS A NUMBER
    if (Number.isNaN(workoutLogId)) {
      const error = new Error('Invalid workout log id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM workout_log WHERE user_id = $1 AND workout_log_id = $2', [userId, workoutLogId]);
    if (rowCount === 1) {
      res
        .status(204)
        .json({ message: 'Workout log deleted.' });
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
