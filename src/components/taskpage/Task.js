import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, editTask }) => {
  console.log(task);
  return (
    <div className="task-container">
      <div className="tasks">
        <div className="tasky">
          <h3>
            {task.text}{" "}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />{" "}
          </h3>

          <p>
            {" "}
            {task.date} &nbsp; at &nbsp; {task.time}{" "}
          </p>
          <button onClick={() => editTask(task)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
