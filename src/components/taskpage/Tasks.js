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
  console.log(showFiltered);
  return (
    <>
      {(showFiltered ? todayTasks : tasks).map((task) => (
        <div className="task-container">
        <Task
          key={task.id}
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
