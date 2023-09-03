import React from "react";

const Task = ({ tasks, onToggleComplete, onRemoveTask }) => {
  const currentDate = new Date();
  // console.log(currentDate);

  return (
    <div>
      <div className="tasks_list_full">
        {tasks.length === 0 ? (
          <h2>
            No Tasks.You can add a task by adding description through input
            field ,selecting priority and then click on add task button
          </h2>
        ) : (
          tasks.map((task) => (
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
