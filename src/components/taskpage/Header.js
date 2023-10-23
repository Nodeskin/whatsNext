import TaskButtons from "./TaskButtons";

const Header = ({ showAdd, showList, showTodayTask }) => {
  return (
    <div className="button-container">
      <div className="button-section">
        <div className="task-buttons">
          <h1>TASKS</h1>
          <div>
            <TaskButtons
              showList={showList}
              showAdd={showAdd}
              showTodayTask={showTodayTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
