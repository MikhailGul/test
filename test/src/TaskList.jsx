export default function TaskList({ taskList, deleteTask, editTask }) {
  console.log(taskList);
  return (
    <>
      <ul>
        {taskList.map((task, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                value={task.compleate}
                onChange={(e) => {
                  console.log(e);
                }}
              />
              {task.name}
              <button onClick={()=>deleteTask(index)}>Удалить</button>
              <button onClick={()=>editTask(index)}>Изменить</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
