const Task = require('../models/Task');

/*
  Create a task in Database
  Else Throw a Error
*/
exports.createTask = async (userId, taskData) => {
  const taskExist =await Task.findOne({title: taskData.title});
  if(!taskExist){
    const task = new Task({ ...taskData, user: userId });
    await task.save();
    return task;
  }else{
    throw new Error('Title Should be Unique');
  }
};


exports.getTasks = async (userId) => {
  return await Task.find({ user: userId });
};

exports.getTask = async (userId, taskId) => {
  return await Task.findOne({ _id: taskId, user: userId });
};

/*
  Update a task in Database with new Values
  Else Throw a Error
*/
exports.updateTask = async (userId, taskId, taskData) => {
  return await Task.findOneAndUpdate({ _id: taskId, user: userId }, taskData, { new: true });
};

exports.deleteTask = async (userId, taskId) => {
  return await Task.findOneAndDelete({ _id: taskId, user: userId });
};
