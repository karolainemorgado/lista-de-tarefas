export const getTasksByUser = async (userId) => {
  const tasks = [
    {
      id: 1,
      userId: 1,
      title: "Primeiro task do usuário 1",
      completed: true,
    },
    {
      id: 2,
      userId: 2,
      title: "Primeiro task do usuário 2",
      completed: true,
    },
    {
      id: 3,
      userId: 2,
      title: "Segunda task do usuário",
      completed: true,
    },
  ];

  const userTasks = tasks.filter((task) => task.userId === Number(userId));

  return userTasks;
};
