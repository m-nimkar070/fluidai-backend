const taskController = require('src/controllers/taskController');
const taskService = require('src/services/taskService');

// Mock the taskService
jest.mock('src/services/taskService.js');

describe('Task Controller', () => {
  describe('createTask', () => {
    it('should create a task and return status 201', async () => {
      const req = {
        body: { title: 'New Task', dueDate: '2024-07-20' },
        user: { id: 'userId' }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const task = { ...req.body, user: req.user.id };
      taskService.createTask.mockResolvedValue(task);

      await taskController.createTask(req, res);

      expect(taskService.createTask).toHaveBeenCalledWith(req.user.id, req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith(task);
    });

    it('should handle errors and return status 400', async () => {
      const req = {
        body: { title: 'New Task', dueDate: '2023-07-20' },
        user: { id: 'userId' }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const errorMessage = 'Date should be greater than current date';
      await taskController.createTask(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(errorMessage);
    });
  });

  describe('getTasks', () => {
    it('should return all tasks for a user', async () => {
      const req = { user: { id: 'userId' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const tasks = [{ title: 'Task 1' }, { title: 'Task 2' }];
      taskService.getTasks.mockResolvedValue(tasks);

      await taskController.getTasks(req, res);

      expect(taskService.getTasks).toHaveBeenCalledWith(req.user.id);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(tasks);
    });

    it('should handle errors and return status 400', async () => {
      const req = { user: { id: 'userId' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const errorMessage = 'Error message';
      taskService.getTasks.mockRejectedValue(new Error(errorMessage));

      await taskController.getTasks(req, res);

      expect(taskService.getTasks).toHaveBeenCalledWith(req.user.id);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(errorMessage);
    });
  });
});
