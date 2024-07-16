const express = require('express');
const mongoose = require('mongoose');
const config = require("./config/config")
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/itemRoutes');


const app = express();
app.use(express.json());




app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Connecting With MongoDb If server is listinig

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
  mongoose.connect(config.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
});
