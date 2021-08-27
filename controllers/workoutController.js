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
exports.createWorkout = async (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, workoutFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const { userId } = request.user;
    const newWorkout = { user_id: userId };

    for (const [key, value] of Object.entries(request.body)) {
      newWorkout[key] = value;
    }

    knex
      .insert(newWorkout)
      .into('workout')
      .returning('*')
      .then((result) => {
        const results = result[0];
        response
          .status(201)
          .location(`${request.originalUrl}/${results.workout_id}`)
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
// @route Get /api/workout
// @access Private
exports.getAllWorkouts = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { rows } = await pg.query('SELECT * FROM workout WHERE user_id = $1', [userId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a workout
// @route Get /api/workout/:workoutId
// @access Private
exports.getOneWorkout = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { workoutId } = request.params;
    const { rows } = await pg.query('SELECT * FROM workout WHERE user_id = $1 AND workout_id = $2', [userId, workoutId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Update a workout
// @route Put /api/workout/:workoutId
// @access Private
exports.updateWorkout = (request, response, next) => {
  try {
    const requestBodyError = validateRequestBody(request, workoutFields, next);
    if (requestBodyError instanceof Error) {
      return next(requestBodyError);
    }

    const { userId } = request.user;
    const { workoutId } = request.params;
    const toUpdate = {};

    updateableWorkoutFields.forEach((field) => {
      if (field in request.body) {
        toUpdate[field] = request.body[field];
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
        response
          .status(200)
          .location(`${request.originalUrl}/${result.workout_id}`)
          .json(result);
      })
      .catch((databaseError) => {
        next(databaseError);
      });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a workout
// @route Delete /api/workout/:workoutId
// @access Private
exports.deleteWorkout = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { workoutId } = request.params;

    // //CHECK TO MAKE SURE WORKOUT_ID IS A NUMBER
    if (Number.isNaN(workoutId)) {
      const error = new Error('Invalid workout id.');
      error.status = 400;
      return next(error);
    }

    const { rowCount } = await pg.query('DELETE FROM workout WHERE user_id = $1 AND workout_id = $2', [userId, workoutId]);
    if (rowCount === 1) {
      response
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
