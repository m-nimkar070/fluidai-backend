const { check, validationResult } = require('express-validator');

/*
  Validation For Creating and Updating a Task with title/priority/status values
*/

exports.taskValidation = [
  check('title').notEmpty().withMessage('Title is required'),
  check('priority').isIn(['low', 'medium', 'high']).withMessage('Invalid priority value'),
  check('status').isIn(['pending', 'completed']).withMessage('Invalid status value'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];
