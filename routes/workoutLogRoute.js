const express = require('express');

const router = express.Router();

const { workoutLogController } = require('../controllers');

router.route('/')
  .get(workoutLogController.getAllWorkoutLogs)
  .post(workoutLogController.createWorkoutLog);

router.route('/:workoutLogId')
  .get(workoutLogController.getOneWorkoutLog)
  .put(workoutLogController.updateWorkoutLog)
  .delete(workoutLogController.deleteWorkoutLog);

module.exports = router;
