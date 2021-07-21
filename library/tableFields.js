const userTableFields = {
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

const workoutTableFields = {
  workout_id: {
    required: false,
    updateable: false,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  focus: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 100 },
  },
  workout: {
    required: true,
    updateable: true,
    dataType: 'STRING',
    fieldSize: { MIN: 1, MAX: 100 },
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

const workoutLogTableFields = {
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
  workout_id: {
    required: true,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_one_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_one_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_two_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_two_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_three_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_three_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_four_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_four_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_five_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_five_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_six_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_six_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_seven_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_seven_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_eight_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_eight_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_nine_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_nine_weights: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_ten_reps: {
    required: false,
    updateable: true,
    dataType: 'NUMBER',
    fieldSize: 'null',
  },
  set_ten_weights: {
    required: false,
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

module.exports = {
  userTableFields,
  workoutTableFields,
  workoutLogTableFields,
};
