import express from "express";
import tasksRouter from "./routes/tasksRouter.js";
import cors from "cors"
import mongoose from "mongoose"

const app = express();
const port = 8000;

app.use(cors())

mongoose.connect("")

app.listen(port, () => console.log(`Servidor executando na porta ${port}`));

app.use("/tasks", tasksRouter)

