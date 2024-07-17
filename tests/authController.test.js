const authController = require('src/controllers/authController');
const authService = require('src/services/authService');

// Mock the authService
jest.mock('src/services/authService');

describe('Auth Controller', () => {
  describe('register', () => {
    it('should register a user and return status 201', async () => {
      const req = { body: { username: 'testuser', password: 'password123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      authService.register.mockResolvedValue();

      await authController.register(req, res);

      expect(authService.register).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith("User registered");
    });

    it('should handle errors and return status 400', async () => {
      const req = { body: { username: 'testuser', password: 'password123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const errorMessage = 'Error message';
      authService.register.mockRejectedValue(new Error(errorMessage));

      await authController.register(req, res);

      expect(authService.register).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(errorMessage);
    });
  });

  describe('login', () => {
    it('should log in a user and return a token', async () => {
      const req = { body: { username: 'testuser', password: 'password123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn()
      };
      const token = 'sampleToken';
      authService.login.mockResolvedValue(token);

      await authController.login(req, res);

      expect(authService.login).toHaveBeenCalledWith(req.body);
      expect(res.json).toHaveBeenCalledWith({ token });
    });

    it('should handle errors and return status 400', async () => {
      const req = { body: { username: 'testuser', password: 'password123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const errorMessage = 'Error message';
      authService.login.mockRejectedValue(new Error(errorMessage));

      await authController.login(req, res);

      expect(authService.login).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(errorMessage);
    });
  });
});
