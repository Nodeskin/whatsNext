import React, { useEffect, useState } from "react";
import moment from "moment";
import Header from "./Header";
import NewTask from "./NewTask";
import Tasks from "./Tasks";

const TaskLandingPage = () => {
  const [newTask, setNewTask] = useState({
    text: "",
    reminder: false,
    date: "",
    time: "",
  });
  const [showFiltered, setShowFiltered] = useState(false);
  const [showAddNew, setShowAddNew] = useState(false);
  const [showLists, setShowLists] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const showAdd = () => {
    setShowAddNew(!showAddNew);
    setShowFiltered(false);
  };

  const showList = () => {
    setShowLists(!showLists);
    setShowAddNew(false);
    setShowFiltered(false);
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const onAdd = async (task) => {
    const taskIndex = tasks.findIndex((el) => el.id === task.id);
    console.log(task.id);
    let method = "POST";
    if (taskIndex >= 0) {
      method = "PUT";
      // Splice Method modifies the original arrayby removing and replace.
      return tasks.splice(taskIndex, 1, task);
    }

    const res = await fetch("http://localhost:5000/tasks", {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };

  const editTask = (task) => {
    setShowAddNew(true);
    const date = moment(task.date).format("YYYY-MM-DD");
    setNewTask({ ...task, date });
  };

  const todayTasks = tasks.filter((task) =>
    moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
      moment(task.date).format("MM/DD/YYYY")
    )
  );
  const showTodayTask = () => {
    setShowAddNew(false);
    setShowFiltered(!showFiltered);
  };

  return (
    <div className="main-container">
      <div className="landing-container">
        <div className="landing-header">
          <Header
            showAdd={showAdd}
            showList={showList}
            showTodayTask={showTodayTask}
          />
        </div>

        {showAddNew && (
          <div className="landig-mid">
            <NewTask
              onAdd={onAdd}
              newTask={newTask}
              setNewTask={setNewTask}
              
            />
          </div>
        )}
        {(showLists || showFiltered) && (
          <div className="landing-bottom">
            <Tasks
              tasks={tasks}
              onDelete={onDelete}
              editTask={editTask}
              todayTasks={todayTasks}
              showFiltered={showFiltered}
              onToggle={toggleReminder}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskLandingPage;
