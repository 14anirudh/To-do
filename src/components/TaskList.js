import React, { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  useEffect(() => {
    console.log("TaskList component updated");
  }, [tasks]);

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Handle form submission to add a new task
  const addTask = (e) => {
    e.preventDefault();

    //task object
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      priority: taskPriority,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
    setTaskPriority("Low");
  };
  // const highPriorityTasks = tasks.filter((task) => task.priority === "high");

  return (
    <div>
      <div className="container">
        <form onSubmit={addTask} className="tasks_form">
          <input
            type="text"
            value={taskText}
            className="input_note"
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Take a task..."
            required
          />
          <div className="tasklist_notes_left">
            <label>
              Priority : &nbsp;
              <select
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <button type="submit" className="btn">
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div>
        <Task
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
};

export default TaskList;
