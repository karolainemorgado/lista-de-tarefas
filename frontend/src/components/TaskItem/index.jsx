export default function TaskItem({
  taskName,
  isDone,
  onDelete,
  onEdit,
  toggleTask,
}) {
  return (
    <li
      className={`flex justify-between ${isDone ? "text-zinc-400 line-through" : "text-black"}`}
    >
      <label className="flex items-center ">
        <input
          type="checkbox"
          value={taskName}
          onChange={toggleTask}
          className="mr-2"
          checked={isDone}
        />
        <span>{taskName}</span>
      </label>
      <div>
        <button
          className="mr-2 text-red-500 hover:text-red-700"
          onClick={onDelete}
        >
          Delete
        </button>
        <button className="text-blue-500 hover:text-blue-700" onClick={onEdit}>
          Edit
        </button>
      </div>

    </li>
  );
}
