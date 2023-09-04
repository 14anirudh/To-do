import React, { useState, useEffect } from "react";
import Task from "./Task";

interface TaskItem {
  id: number;
  text: string;
  priority: string;
  isComplete: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [taskText, setTaskText] = useState<string>("");
  const [taskPriority, setTaskPriority] = useState<string>("Low");

  //  to get tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    ) as TaskItem[];
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  //  to set tasks in local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("TaskList component updated");
  }, [tasks]);

  //  to set title of the page as no of tasks
  useEffect(() => {
    document.title = `You have ${tasks.length} tasks`;
  });

  //  function to add task
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: TaskItem = {
      id: tasks.length + 1,
      text: taskText,
      priority: taskPriority,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
    setTaskPriority("Low");
  };

  //  function to toggle complete task
  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  //  function to remove task
  const handleRemoveTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      {/* form to add task */}
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

      {/* all tasks rendered through task component */}
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
