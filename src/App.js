import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
