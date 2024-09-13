import { useState } from "react";

export default function TaskInput({addTask}) {
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask({name:newTask, compleate:false});

      setNewTask("");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Введите задачу"
        value={newTask}
        className="in"
        onChange={(e) => {
          console.log(e.target.value);
          setNewTask(e.target.value);
        }}
      />
      <button onClick={handleAddTask}>Добавить</button>
    </>
  );
}
