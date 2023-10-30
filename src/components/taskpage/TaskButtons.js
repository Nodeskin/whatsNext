const TaskButtons = ({ showAdd, showList, showTodayTask }) => {
  const style = {
    marginRight: "20px",
  };
  return (
    <div>
      <button className="task-butts"  style={style} onClick={showList}>
        Task List
      </button>
      <button style={style} onClick={showTodayTask}>
        Today's Task
      </button>
      <button onClick={showAdd}> New Task </button>
    </div>
  );
};

export default TaskButtons;
