import express from "express";
import tasksRouter from "./routes/tasksRouter.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 8000;

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/tarefas")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao MongoDB:", error);
  });

app.use("/tasks", tasksRouter);

app.listen(port, () => console.log(`Servidor executando na porta ${port}`));
