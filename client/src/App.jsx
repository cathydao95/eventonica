import "./App.css";
import Events from "./components/Events";
import InputEvent from "./components/InputEvent";

function App() {
  return (
    <div className="App">
      <h1>Eventonica</h1>
      <InputEvent />
      <Events />
    </div>
  );
}

export default App;
