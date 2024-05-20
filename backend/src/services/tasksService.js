import Task from "../models/tasksModel.js";

export const getTasksByUser = async (userId) => {
  const tasks = await Task.find({ userId: Number(userId) });
  return tasks;
};
