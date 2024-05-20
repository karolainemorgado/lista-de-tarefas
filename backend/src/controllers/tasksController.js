import { getTasksByUser } from "../services/tasksService.js";

export const getTasks = async (req, res) => {
  const userId = req.query.id;

  if (!userId) {
    return res.status(400).json({ error: "Id de usuário inválido" });
  }

  const tasks = await getTasksByUser(userId);
  return res.status(200).json(tasks);
};
