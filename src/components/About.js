import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Our To-Do List Application</h1>
      <p>
        To-Do List application is designed to help you manage your tasks
        effectively. You can add, mark as complete, and remove tasks with ease,
        all while organizing them by priority.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Add new tasks with priority levels (low, medium, high).</li>
        <li>Mark tasks as complete or incomplete.</li>
        <li>Remove tasks from the list.</li>
      </ul>
      <h2>Developer </h2>
      <p>
        This application is developed by Anirudh Gautam. You can find more of
        his work on his website. <Link to ="https://anirudh.vercel.app/">click here</Link>
      </p>
    </div>
  );
};

export default About;
