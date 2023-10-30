import TaskButtons from "./TaskButtons";

const Header = ({ showAdd, showList, showTodayTask }) => {
  return (
    <div className="button-container">
      <div className="button-section">
          <h1>taskNodes</h1>
          <div className="task-buttons">
            <TaskButtons
              showList={showList}
              showAdd={showAdd}
              showTodayTask={showTodayTask}
            />
        </div>
      </div>
    </div>
  );
};

export default Header;
