const express = require('express');
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const { taskValidation } = require('../validation/taskValidation');

const router = express.Router();

/*
    Route:Create Task
*/
router.post('/', auth, taskValidation, taskController.createTask);
/*
    Route: Get all Task
*/
router.get('/', auth, taskController.getTasks);
/*
    Route: Get Specific Task with taskId
*/
router.get('/:id', auth, taskController.getTask);
/*
    Route: Update Existing Task
*/
router.put('/:id', auth, taskValidation, taskController.updateTask);
/*
    Route: Delete Task
*/
router.delete('/:id', auth, taskController.deleteTask);


module.exports = router;
