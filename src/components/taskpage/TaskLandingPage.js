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
    setShowLists(false);
    setShowLists(!showLists);
  };

  const showList = () => {
    setShowLists(!showLists);
    setShowAddNew(false);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onAdd = (task) => {
    const taskIndex = tasks.findIndex((el)=> el.id === task.id )
      if(taskIndex >= 0){
        return tasks.splice(taskIndex, 1, task)
      }
    const id = Math.floor(Math.random() * 1000);
    const addNew = { id, ...task };
    setTasks([...tasks, addNew]);
  };

  const editTask = (task) => {
    setShowAddNew(true);
    const date = moment(task.date).format("YYYY-MM-DD");
    setNewTask({ ...task, date});
  };

  return (
    <div>
      <Header showAdd={showAdd} showList={showList} />
      {showAddNew && (
        <NewTask onAdd={onAdd} newTask={newTask} setNewTask={setNewTask} />
      )}
      {showLists && (
        <Tasks tasks={tasks} onDelete={onDelete} editTask={editTask} />
      )}
    </div>
  );
};

export default TaskLandingPage;
