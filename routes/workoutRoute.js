const express = require('express');

const router = express.Router();

const { workoutController } = require('../controllers');

router.route('/')
  .get(workoutController.getAllWorkouts)
  .post(workoutController.createWorkout);

router.route('/:workoutId')
  .get(workoutController.getOneWorkout)
  .put(workoutController.updateWorkout)
  .delete(workoutController.deleteWorkout);

module.exports = router;
