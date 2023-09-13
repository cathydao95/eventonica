import { useState, useReducer } from "react";
import "./App.css";
import Events from "./components/Events";
import { useGlobalContext } from "./context";

function App() {
  const { handleChange, createNewEvent } = useGlobalContext();

  const handleEventInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange(name, value);
  };

  return (
    <div className="App">
      <h1>Eventonica</h1>
      <form onSubmit={createNewEvent}>
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
