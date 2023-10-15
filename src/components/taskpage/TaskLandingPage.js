import React, { useState } from "react";
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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      date: "04/17/2023",
      time: "09:40",
      reminder: true,
    },
    {
      id: 2,
      text: "Kill a mockingbird",
      date: "09/17/2023",
      time: "16:36",
      reminder: true,
    },
  ]);

  const showAdd = () => {
    setShowAddNew(!showAddNew);
    setShowFiltered(false);
  };

  const showList = () => {
    setShowLists(!showLists);
    setShowAddNew(false);
    setShowFiltered(!showFiltered);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onAdd = (task) => {
    const taskIndex = tasks.findIndex((el) => el.id === task.id);
    if (taskIndex >= 0) {
      return tasks.splice(taskIndex, 1, task);
    }
    const id = Math.floor(Math.random() * 1000);
    const addNew = { id, ...task };
    setTasks([...tasks, addNew]);
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
    setShowFiltered(true);
  };

//TESTING DATE FORMATES
  // console.log(moment().startOf('month'))
  // console.log(tasks)
  //  console.log(moment( moment(new Date()).format("YYYY-MM-DD")).isSame(moment("10/14/2023").format("MM/DD/YYYY")))
  
  return (
    <div>
      <Header
        showAdd={showAdd}
        showList={showList}
        showTodayTask={showTodayTask}
      />
      {showAddNew && (
        <NewTask onAdd={onAdd} newTask={newTask} setNewTask={setNewTask} />
      )}
      {(showLists || showFiltered) && (
        <Tasks
          tasks={tasks}
          onDelete={onDelete}
          editTask={editTask}
          todayTasks={todayTasks}
          showFiltered={showFiltered}
        />
      )}
    </div>
  );
};

export default TaskLandingPage;
