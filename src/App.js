import logo from "./logo.svg";
import "./App.css";
import Counter from "./componets/counter";
import Display from "./componets/display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Display />
      </header>
    </div>
  );
}

export default App;
