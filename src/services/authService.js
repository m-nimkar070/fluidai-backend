const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require("../config/config");


/*
  Expected to Create USer and Save in Database
  Else Throw error : 'User is already with this Username'
*/

exports.register = async ({ username, password }) => {
  const userNameExits = await User.findOne({ username });
  if(!userNameExits){
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
  }else{
    throw new Error('User is already with this Username');
  }
};

/*
  Expected to Login user and send a response with created Token
  Else throw Error : 'Invalid credentials'
*/

exports.login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid credentials');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  return jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
};
