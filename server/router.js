const router = require('express').Router();
const controller = require('./controller.js');

// build router here
router
  .route('/todos')
  .get(controller.get)
  .post(controller.post)

router
  .route('/todos/:_id')
  .delete(controller.delete)
  .put(controller.put)

module.exports = router