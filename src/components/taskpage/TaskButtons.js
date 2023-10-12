const TaskButtons = ({showAdd, showList }) => {
  const style = {
    marginRight: "20px",
  };
  return (
    <div>
      <button style={style} onClick={showList}>Task List</button>
      <button style={style}>Today's Task</button>
      <button onClick={showAdd} > New Task </button>
    </div>
  );
};

export default TaskButtons;
