import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Number,
    required: true,
  },
});

const Task = mongoose.model("tasks", taskSchema);
export default Task;
