const NewTask = ({ onAdd, newTask, setNewTask }) => {
  const { text, reminder, date, time } = newTask;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!newTask.text) {
      alert("Add a task");
      return;
    }

    onAdd(newTask);
    setNewTask({
      text: "",
      reminder: false,
      date: "",
      time: "",
    });
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="new-task">
        <p>Hi " " Add a task</p>

        <div className="form-text">
          <textarea
            className="textarea"
            placeholder="Enter new task"
            value={text}
            onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
          ></textarea>{" "}
        </div>

        <div className="mid-input">
          <input
            type="date"
            placeholder=" Set Date"
            value={date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          />
          
          <input
            type="time"
            placeholder=" Set Time"
            value={time}
            onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
          />
        </div>

        <div className="bottom-input">

          <div className="new-task-input">
            <input
              type="checkbox"
              value={reminder}
              checked={reminder}
              onChange={(e) =>
                setNewTask({ ...newTask, reminder: e.currentTarget.value })
              }
            />
            <label>Set Reminder</label>
          </div>

          <div>
            <input type="submit" value="Save Task" />
          </div>
        </div>

      </div>
    </form>
  );
};

export default NewTask;
