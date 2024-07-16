const authService = require("../services/authService");

// Auth controller for Registration of User
/*
 Response:
  "User Created"
*/
exports.register = async (req, res) => {
  try {
    await authService.register(req.body);
    res.status(201).send("User registered");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Auth controller for Login of User
/*
 Response:
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTY2YmQ4NDljNDY2YTljMDM1MGVhNiIsImlhdCI6MTcyMTE0ODg3NCwiZXhwIjoxNzIxMTUyNDc0fQ.ZnwmWN1vTKgcf84qVfVWw9OcVubINEthBrAAO6Bugcw"
}
*/
exports.login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
