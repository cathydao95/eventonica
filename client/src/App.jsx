import { useState, useReducer } from "react";
import "./App.css";
import Events from "./components/Events";
import { useGlobalContext } from "./context";

function App() {
  const [event, setEvent] = useState({});
  const { createNewEvent } = useGlobalContext();

  const handleBtnClick = (e) => {
    e.preventDefault();
    createNewEvent(event);
  };
  const handleEventInput = (e) => {
    console.log(e.target.name, e.target.value);
    setEvent((prevEvent) => {
      return { ...prevEvent, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="App">
      <h1>Eventonica</h1>
      <form onSubmit={handleBtnClick}>
        <div>
          <label htmlFor="title">Event Name:</label>
          <input
            id="title"
            type="text"
            placeholder="Event Name"
            name="title"
            onChange={handleEventInput}
          />
        </div>
        <div>
          <label htmlFor="location">Event Name:</label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            name="location"
            onChange={handleEventInput}
          />
        </div>
        <div>
          <label htmlFor="eventtime">Event Date:</label>
          <input
            id="eventtime"
            type="date"
            placeholder="Event Date"
            name="eventtime"
            onChange={handleEventInput}
          />
        </div>

        <button>Add Event</button>
      </form>
      <Events />
    </div>
  );
}

export default App;
