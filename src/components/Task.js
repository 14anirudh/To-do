import React from "react";

const Task = ({ tasks, onToggleComplete, onRemoveTask }) => {
  const currentDate = new Date();
  // console.log(currentDate);

  return (
    <div>
      <div className="tasks_list_full">
        {tasks.map((task) => (
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
            <div className="items_right">
              <p className="task_date">{currentDate.toString().slice(0, 16)}</p>
              <button className="btn" onClick={() => onRemoveTask(task.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;