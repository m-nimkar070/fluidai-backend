# Node.js, Express.js, and MongoDB Backend API

This is a backend API built with Node.js, Express.js, and MongoDB. It provides endpoints for user registration, login, and task management with  CRUD(CREATE, READ, UPDATE, DELETE) operation on Tasks.

## Postman Collection
-[Postman Colloection Link](https://drive.google.com/file/d/1NaMqwA9OUHvvaTOR0xFgxB3DFYV2Qa0A/view?usp=sharing)

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
  - [Create User](#create-user)
  - [Login User](#login-user)
  - [Create Task](#create-task)
  - [Get All Tasks](#get-all-tasks)
  - [Get Specific Task](#get-specific-task)
  - [Update Task](#update-task)
  - [Delete Task](#delete-task)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the App

1. Ensure MongoDB is running on your system.
2. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:
    ```env
    MONGO_URI=mongodb://localhost:27017/yourdbname
    JWT_SECRET=your_jwt_secret
    ```
3. Start the server:
    ```sh
    npm start
    ```
    The server will be running at `http://localhost:5000`.

## API Endpoints
Make sure to replace `{Base_URL}` with the actual base URL of your running server. For local development, it would typically be `http://localhost:5000`.

Make Sure to add Headers with `'Content-Type':'application/json' & 'Authorization': 'Your_Token_Value'`
### Create User

- **Endpoint:** `{Base_URL}/api/auth/register`
- **Method:** POST
- **Body:**
    ```json
    {
        "username": "testuser",
        "password": "password123"
    }
    ```
- **Description:** Registers a new user.

### Login User

- **Endpoint:** `{Base_URL}/api/auth/login`
- **Method:** POST
- **Body:**
    ```json
    {
        "username": "testuser",
        "password": "password123"
    }
    ```
- **Response:**
    ```json
    {
        "token": "{token_value}"
    }
    ```
- **Description:** Logs in an existing user and returns a JWT token.

### Create Task

- **Endpoint:** `{Base_URL}/api/tasks`
- **Method:** POST
- **Headers:**
    ```json
    {
        "Content-Type": "application/json",
        "Authorization": "Bearer {Token_value}"
    }
    ```
- **Body:**
    ```json
    {
        "title": "trying date 3",
        "description": "Description for the new task 6",
        "dueDate": "2024-07-19",
        "priority": "high"
    }
    ```
- **Description:** Creates a new task.

### Get All Tasks

- **Endpoint:** `{Base_URL}/api/tasks`
- **Method:** GET
- **Response:**
    ```json
    [
        {
            "_id": "66966eaf5bca0b58b0bcfd98",
            "title": "New Task",
            "description": "Description for the new task",
            "dueDate": "2024-07-20T00:00:00.000Z",
            "priority": "high",
            "status": "pending",
            "user": "66966bd849c466a9c0350ea6",
            "__v": 0
        },
        {
            "_id": "6696c130e614c9aa2312d891",
            "title": "New Task 3",
            "description": "Description for the new task 3",
            "priority": "high",
            "status": "pending",
            "user": "66966bd849c466a9c0350ea6",
            "dueDate": "2024-07-20T18:51:28.380Z",
            "__v": 0
        }
    ]
    ```
- **Description:** Retrieves all tasks for the logged-in user.

### Get Specific Task

- **Endpoint:** `{Base_URL}/api/tasks/:id`
- **Method:** GET
- **Response:**
    ```json
    [
        {
            "_id": "66966eaf5bca0b58b0bcfd98",
            "title": "New Task",
            "description": "Description for the new task",
            "dueDate": "2024-07-20T00:00:00.000Z",
            "priority": "high",
            "status": "pending",
            "user": "66966bd849c466a9c0350ea6",
            "__v": 0
        }
    ]
    ```
- **Description:** Retrieves a specific task by its ID.

### Update Task

- **Endpoint:** `{Base_URL}/api/tasks/:id`
- **Method:** PUT
- **Body:**
    ```json
    {
        "title": "New Task 3 Updated",
        "description": "Description for the new task 3 updating task",
        "priority": "high",
        "status": "pending"
    }
    ```
- **Response:**
    ```json
    [
        {
            "_id": "6696c130e614c9aa2312d891",
            "title": "New Task",
            "description": "Description for the new task",
            "dueDate": "2024-07-20T00:00:00.000Z",
            "priority": "high",
            "status": "pending",
            "user": "66966bd849c466a9c0350ea6",
            "__v": 0
        }
    ]
    ```
- **Description:** Updates an existing task by its ID.

### Delete Task

- **Endpoint:** `{Base_URL}/api/tasks/:id`
- **Method:** DELETE
- **Response:** `Item Deleted.`
- **Description:** Deletes a task by its ID.

---
