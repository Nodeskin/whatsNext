import React from "react";
import Task from "./Task";

const Tasks = ({
  tasks,
  onDelete,
  editTask,
  showFiltered,
  todayTasks,
  onToggle,
}) => {
  return (
    <>
      {(showFiltered ? todayTasks : tasks).map((task) => (
        <div className="task-container">
          <Task
            key={task}
            task={task}
            onDelete={onDelete}
            editTask={editTask}
            onToggle={onToggle}
          />
        </div>
      ))}
    </>
  );
};

export default Tasks;
