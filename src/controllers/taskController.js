const taskService = require('../services/taskService');

/*

Endpoint : {Base_URL}/api/tasks
Method:POST
Expected req:
header:{
  "Content-Type":"application/json"
  "Authorization": {Token}
}
 
  Expected Response:
  {
    "title": "New Task 2",
    "description": "Description for the new task 2",
    "dueDate": "2024-07-20T00:00:00.000Z",
    "priority": "high",
    "status": "pending",
    "user": "66966bd849c466a9c0350ea6",
    "_id": "6696ad9d5bca0b58b0bcfda5",
    "__v": 0
  }
*/

exports.createTask = async (req, res) => {
  try {
    const item = await taskService.createTask(req.user.id, req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


/*
Endpoint : {Base_URL}/api/tasks
Method:GET 
*/


exports.getTasks = async (req, res) => {
  try {
    const items = await taskService.getTasks(req.user.id);
    res.status(200).json(items);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


/*
Endpoint : {Base_URL}/api/tasks/:taskId
Method:GET 
*/

exports.getTask = async (req, res) => {
  try {
    const item = await taskService.getTask(req.user.id, req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.status(200).json(item);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

/*

Endpoint : {Base_URL}/api/tasks/:taskId
Method:PUT
Expected req:
header:{
  "Content-Type":"application/json"
  "Authorization": {Token}
}
  Body:{
    "title": "New Task 2 Updated",
    "description": "Description for the new task 2",
    "dueDate": "2024-07-20T00:00:00.000Z",
    "priority": "high",
    "status": "pending",
  }
 
  Expected Response:
  {
    "title": "New Task 2 Updated",
    "description": "Description for the new task 2",
    "dueDate": "2024-07-20T00:00:00.000Z",
    "priority": "high",
    "status": "pending",
    "user": "66966bd849c466a9c0350ea6",
    "_id": "6696ad9d5bca0b58b0bcfda5",
    "__v": 0
  }
*/

exports.updateTask = async (req, res) => {
  try {
    const item = await taskService.updateTask(req.user.id, req.params.id, req.body);
    if (!item) return res.status(404).send('Item not found');
    res.status(204).json(item);
  } catch (error) {
    if(error.code === 11000){
      res.status(400).send("If you are chnging title, Please Choose a unique Title than others")
    }else{
      res.status(400).send(error.message);
    }
  }
};

/*
Endpoint : {Base_URL}/api/tasks/:taskId
Method:DELETE 
*/

exports.deleteTask = async (req, res) => {
  try {
    const item = await taskService.deleteTask(req.user.id, req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.status(204).send('Item deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
