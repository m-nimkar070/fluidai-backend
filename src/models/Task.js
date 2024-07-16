const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  dueDate: {
    type: Date,
    default: () => {
      let date = new Date();
      date.setDate(date.getDate() + 4);
      return date;
    },
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});


module.exports = mongoose.model("Tasks", TasksSchema);