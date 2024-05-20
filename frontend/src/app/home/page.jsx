"use client";

import { useEffect, useState } from "react";
import TaskItem from "../../components/TaskItem";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    console.log("Executando useEffect...");

    const getTasks = async () => {
      const response = await fetch("http://localhost:8000/tasks?id=2");

      const data = await response.json();
      setTasks(data);
    };

    getTasks();
  }, []);

  const addTask = () => {
    console.log("Adicionando nova task");

    if (!newTask) {
      return alert("Digite uma tarefa");
    }

    setTasks([
      ...tasks,
      { id: Math.random(), title: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const onDelete = (id) => {
    console.log("deletando tarefa...");

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onEdit = (taskIdToUptade) => {
    console.log("editando...");

    const updatedTaks = prompt("Edite sua tarefa");

    const newTasksArray = tasks.map((task) => {
      if (task.id === taskIdToUptade) {
        return { ...task, title: updatedTaks };
      }

      return task;
    });

    setTasks(newTasksArray);
  };

  const toggleTask = (id) => {
    const newTasksArray = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(newTasksArray);
  };

  console.log({ tasks });

  return (
    <main className=" h-screen items-center justify-center">
      <div className="container mx-auto my-10">
        <h1 className="mb-4 text-center text-3xl font-semibold">To Do List</h1>
        <div className="mx-auto md:w-1/2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex">
              <input
                type="text"
                className="mr-2 w-full rounded-lg border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Add new task"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
              />
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                onClick={addTask}
              >
                Add
              </button>
            </div>

            <ul className="flex flex-col gap-2">
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  taskName={task.title}
                  isDone={task.completed}
                  onDelete={() => onDelete(task.id)}
                  onEdit={() => onEdit(task.id)}
                  toggleTask={() => toggleTask(task.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
