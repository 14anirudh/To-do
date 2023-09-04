import React from "react";

//  interface for TaskItem
interface TaskItem {
  id: number;
  text: string;
  priority: string;
  isComplete: boolean;
}

// interface for props of Task component
interface TaskProps {
  tasks: TaskItem[];
  onToggleComplete: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
}

const Task: React.FC<TaskProps> = ({
  tasks,
  onToggleComplete,
  onRemoveTask,
}) => {
  const currentDate = new Date();

  return (
    <div>
      <div className="tasks_list_full">
        {tasks.length === 0 ? (
          <h4>
            No Tasks as of now.You can add a task by adding description through
            input field, selecting priority and then click on the add task
            button
          </h4>
        ) : (
          tasks.map((task: TaskItem) => (
            <div key={task.id} className="task_items">
              <div>
                <input
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={() => onToggleComplete(task.id)}
                />
                <span
                  className={
                    task.isComplete
                      ? "completed_tasklist_items"
                      : "incomplete_tasklist_items"
                  }
                >
                  {task.text}
                </span>
              </div>
              <div
                className={
                  task.priority === "High"
                    ? "bg_high"
                    : task.priority === "Medium"
                    ? "bg_med"
                    : "bg_low"
                }
              >
                <div className="items_right">
                  <span className="task_priority">
                    {task.priority} Priority
                  </span>
                  <span className="task_date">
                    {currentDate.toString().slice(0, 16)}
                  </span>
                  <button className="btn" onClick={() => onRemoveTask(task.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Task;
