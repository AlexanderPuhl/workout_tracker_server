const knex = require('../db/knex');
const pg = require('../db/pg');

const { workoutFields } = require('../library/tableFields');
const {
  validateRequestBody,
  gatherTableUpdateableFields,
} = require('../utilities/requestBodyUtilities');

const updateableWorkoutFields = gatherTableUpdateableFields(workoutFields);

// @desc Create a workout
// @route POST /api/workout
// @access Private
exports.createWorkout = async (req, res, next) => {
  try {
    const error = validateRequestBody(req, workoutFields, next);
    if (error instanceof Error) {
      return next(error);
    }

    const { userId } = req.user;
    const newWorkout = { user_id: userId };

    for (const [key, value] of Object.entries(req.body)) {
      newWorkout[key] = value;
    }

    knex
      .insert(newWorkout)
      .into('workout')
      .returning('*')
      .then((result) => {
        const results = result[0];
        res
          .status(201)
          .location(`${req.originalUrl}/${results.workout_id}`)
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
// @route Get /api/workout
// @access Private
exports.getAllWorkouts = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { rows } = await pg.query('SELECT * FROM workout WHERE user_id = $1', [userId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a workout
// @route Get /api/workout/:workoutId
// @access Private
exports.getOneWorkout = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { workoutId } = req.params;
    const { rows } = await pg.query('SELECT * FROM workout WHERE user_id = $1 AND workout_id = $2', [userId, workoutId]);
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a workout
// @route Put /api/workout/:workoutId
// @access Private
exports.updateWorkout = (req, res, next) => {
  try {
    const error = validateRequestBody(req, workoutFields, next);
    if (error instanceof Error) {
      return next(error);
    }

    const { userId } = req.user;
    const { workoutId } = req.params;
    const toUpdate = {};

    updateableWorkoutFields.forEach((field) => {
      if (field in req.body) {
        toUpdate[field] = req.body[field];
      }
    });

    toUpdate.modified_on = new Date(Date.now()).toISOString();

    knex('workout')
      .returning('*')
      .where({
        user_id: userId,
        workout_id: workoutId,
      })
      .update(toUpdate)
      .then((results) => {
        const result = results[0];
        res
          .status(200)
          .location(`${req.originalUrl}/${result.workout_id}`)
          .json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a workout
// @route Delete /api/workout/:workoutId
// @access Private
exports.deleteWorkout = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { workoutId } = req.params;

    // //CHECK TO MAKE SURE WORKOUT_ID IS A NUMBER
    if (Number.isNaN(workoutId)) {
      const error = new Error('Invalid workout id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM workout WHERE user_id = $1 AND workout_id = $2', [userId, workoutId]);
    if (rowCount === 1) {
      res
        .status(204)
        .json({ message: 'workout deleted.' });
    } else {
      const error = new Error(
        `Could not find a workout with workout_id: ${workoutId}.`,
      );
      error.status = 406;
      return next(error);
    }
  } catch (error) {
    next(error);
  }
};
