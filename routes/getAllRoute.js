const express = require('express');

const router = express.Router();

const { getAllController } = require('../controllers');

router.route('/')
  .get(getAllController.getAll);

router.route('/:workoutLogId')
  .get(getAllController.getOne);

module.exports = router;
