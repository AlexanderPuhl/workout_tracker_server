const exerciseFields = {
  exercise_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  user_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  default: {
    required: false,
    updateable: false,
    dataType: 'BOOLEAN',
    fieldSize: 'null',
  },
  exercise: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  focus: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  image_url: {
    required: false,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  created_on: {
    required: false,
    updateable: false,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  modified_on: {
    required: false,
    updateable: true,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
};

const roleFields = {
  rold_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  name: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  created_on: {
    required: false,
    updateable: false,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  modified_on: {
    required: false,
    updateable: true,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
};

const setFields = {
  set_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  user_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  workout_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  number_of_sets: {
    required: true,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  number_of_reps: {
    required: true,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  weight: {
    required: true,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  note: {
    required: false,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  created_on: {
    required: false,
    updateable: false,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  modified_on: {
    required: false,
    updateable: true,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
};

const userFields = {
  user_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  roleId: {
    required: true,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  username: {
    required: true,
    updateable: false,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 35 },
  },
  email: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 3, MAX: 70 },
  },
  name: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 70 },
  },
  password: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 8, MAX: 72 },
  },
  last_login: {
    required: false,
    updateable: true,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  created_on: {
    required: false,
    updateable: false,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  modified_on: {
    required: false,
    updateable: true,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  reset_token: {
    required: false,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  reset_token_expiration: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
};

const workoutFields = {
  workout_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  user_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  workout_log_id: {
    required: true,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  exercise_id: {
    required: true,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  note: {
    required: false,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  created_on: {
    required: false,
    updateable: false,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  modified_on: {
    required: false,
    updateable: true,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
};

const workoutLogFields = {
  workout_log_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  user_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  note: {
    required: false,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 255 },
  },
  created_on: {
    required: false,
    updateable: false,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
  modified_on: {
    required: false,
    updateable: true,
    dataType: 'DATETIME',
    fieldSize: 'null',
  },
};

module.exports = {
  exerciseFields,
  roleFields,
  setFields,
  userFields,
  workoutFields,
  workoutLogFields,
};
