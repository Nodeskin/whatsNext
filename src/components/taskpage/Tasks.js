import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, editTask}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete= {onDelete} editTask={editTask} />
      ))}
    </div>
  );
};

export default Tasks;
