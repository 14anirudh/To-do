import "./App.css";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskList />
    </div>
  );
}

export default App;
