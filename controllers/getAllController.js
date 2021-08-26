const pg = require('../db/pg');

// @desc Get all workouts
// @route Get /api/workout
// @access Private
exports.getAll = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { rows } = await pg.query(`SELECT
                                        u.username,
                                        wl.workout_log_id,
                                        wl.note as workout_log_note,
                                        wl.modified_on as workout_date_time,
                                        w.workout_id,
                                        w.note as workout_note,
                                        w.modified_on as workout_date_time,
                                        e.exercise,
                                        s.set_id,
                                        s.number_of_sets,
                                        s.number_of_reps,
                                        s.weight,
                                        s.note as set_note,
                                        s.modified_on as set_date_time
                                      FROM
                                        public.user u
                                      LEFT JOIN
                                        workout_log wl ON wl.user_id = u.user_id
                                      LEFT JOIN
                                        workout w ON w.workout_log_id = wl.workout_log_id
                                      LEFT JOIN
                                        set s ON s.workout_id = w.workout_id
                                      INNER JOIN
                                        exercise e ON e.exercise_id = w.exercise_id
                                      WHERE
                                        u.user_id = $1
                                      ORDER BY
                                        wl.workout_log_id,
                                        w.workout_id,
                                        e.exercise_id,
                                        s.set_id`, [userId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};

// @desc Get a workout
// @route Get /api/get_all/:workoutLogId
// @access Private
exports.getOne = async (request, response, next) => {
  try {
    const { userId } = request.user;
    const { workoutLogId } = request.params;
    const { rows } = await pg.query(`SELECT
                                        u.username,
                                        wl.workout_log_id,
                                        wl.note as workout_log_note
                                        wl.modified_on as workout_date_time
                                        w.workout_id,
                                        w.note as workout_note,
                                        w.modified_on as workout_date_time,
                                        e.exercise,
                                        s.set_id,
                                        s.number_of_sets,
                                        s.number_of_reps,
                                        s.weight,
                                        s.note as set_note,
                                        s.modified_on as set_date_time
                                      FROM
                                        public.user u
                                      LEFT JOIN
                                        workout_log wl ON wl.user_id = u.user_id
                                      LEFT JOIN
                                        workout w ON w.workout_log_id = wl.workout_log_id
                                      LEFT JOIN
                                        set s ON s.workout_id = w.workout_id
                                      INNER JOIN
                                        exercise e ON e.exercise_id = w.exercise_id
                                      WHERE
                                        u.user_id = $1
                                      AND
                                        wl.workout_log_id = $2
                                      ORDER BY
                                        wl.workout_log_id,
                                        w.workout_id,
                                        e.exercise_id,
                                        s.set_id`, [userId, workoutLogId]);
    response.status(200).json(rows);
  } catch (error) {
    next(error);
  }
};
