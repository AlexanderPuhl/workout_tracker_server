const express = require('express');

const router = express.Router();

const { setController } = require('../controllers');

router.route('/')
  .get(setController.getAllSets)
  .post(setController.createSet);

router.route('/:setId')
  .get(setController.getOneSet)
  .put(setController.updateSet)
  .delete(setController.deleteSet);

module.exports = router;
