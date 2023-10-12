import React, { useState } from "react";
import TaskButtons from "./TaskButtons";

const Header = ({ showAdd, showList }) => {
  // const [showList, setShowList] = useState(false)

  return (
    <div className="button-container">
      <div className="button-section">
        <div className="task-buttons">
          <h1>TASKS</h1>
          <div>
            <TaskButtons showList={showList} showAdd={showAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
