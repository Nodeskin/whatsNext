const TaskButtons = ({ showAdd, showList, showTodayTask }) => {
  const style = {
    marginRight: "20px",
  };
  return (
    <div className="task-buttons">
      <button className="task-button" style={style} onClick={showList}>
        Task List
      </button>
      <button className="task-button" style={style} onClick={showTodayTask}>
        Today's Task
      </button>
      <button className="task-button" onClick={showAdd}>
        {" "}
        New Task{" "}
      </button>
    </div>
  );
};

export default TaskButtons;
