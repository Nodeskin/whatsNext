import TaskButtons from "./TaskButtons";

const Header = ({ showAdd, showList, showTodayTask }) => {
  return (
    <>
      <h1>TaskNodes</h1>
      <div className="task-buttons">
        <TaskButtons
          showList={showList}
          showAdd={showAdd}
          showTodayTask={showTodayTask}
        />
      </div>
    </>
  );
};

export default Header;
