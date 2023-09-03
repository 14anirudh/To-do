import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <h1>To-Do List Application</h1>
        <p>This is an interactive To-Do List application using React that incorporates various concepts including HTML/CSS, JavaScript, and React. The application allows users to add, mark as complete, and remove tasks. Each task can be associated with a priority level (low, medium, high).</p>
        <p>To create tasks move to the Tasks section or <Link to ="/tasks">click here</Link></p>
      </header>
    </div>
  );
};

export default Home;
