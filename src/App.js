import "./App.css";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
