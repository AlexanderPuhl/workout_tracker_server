const express = require('express');

const router = express.Router();

const { exerciseController } = require('../controllers');

router.route('/')
  .get(exerciseController.getAllExercises)
  .post(exerciseController.createExercise);

router.route('/:exerciseId')
  .get(exerciseController.getOneExercise)
  .put(exerciseController.updateExercise)
  .delete(exerciseController.deleteExercise);

module.exports = router;
