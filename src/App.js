import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landing/LandingPage";
import SignUpPage from "./components/signUp/SignUpPage";
import TaskLandingPage from "./components/taskpage/TaskLandingPage";
import Task from "./components/taskpage/Task";

function App() {
  //  const [task, setTask]= useState([])

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signUp" element={<SignUpPage />} />
      </Routes> */}

      <TaskLandingPage />
    </div>
  );
}

export default App;
