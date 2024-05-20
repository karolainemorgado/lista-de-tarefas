import { getTasksByUser } from "../services/tasksService.js";

export const getTasks = async (req, res) => {
 const userId = req.query.id
    
if (!userId) {
    return res.status(400).json({ error: "ID de usuário inválido"})
}

 const task = await getTasksByUser(userId)
    
     return res.json(task);
}

