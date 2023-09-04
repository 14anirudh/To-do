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

  useEffect(() => {
    const storedTasks = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    ) as TaskItem[];
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    document.title = `You have ${tasks.length} tasks`;
  });

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleRemoveTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

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
