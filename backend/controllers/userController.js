const asyncHandler = require('express-async-handler');

// @desc Register user baru
// Routenya /api/users
// aksesnya Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Tolong dilengkapi');
  }
  res.send('ini register');
});

// @desc login user
// Routenya /api/users/login
// aksesnya Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('ini Login');
});

module.exports = {
  registerUser,
  loginUser,
};
