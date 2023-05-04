import { useState } from "react";

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 5231, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "watch Lectures", completed: false },
  ]);
  //? set bool to true
  const [show, setShow] = useState(true);

  //? HANDLE DELETE
  function handleDelete(taskId) {
    console.log(taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // const updatedTasks = tasks.
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }
  return (
    <>
      <h1> Task List </h1>{" "}
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          {" "}
          Toggle{" "}
        </button>{" "}
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>
                {" "}
                {task.id} - {task.name}{" "}
              </span>{" "}
              <button onClick={() => handleDelete(task.id)} className="delete">
                {" "}
                Delete{" "}
              </button>{" "}
            </li>
          ))}{" "}
      </ul>{" "}
    </>
  );
};
