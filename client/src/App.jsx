import { useState, useEffect } from "react";
import "./App.css";
import Events from "./components/UpcomingEvents";
import { useGlobalContext } from "./utils/context";

function App() {
  const [event, setEvent] = useState({
    title: "",
    location: "",
    eventtime: "",
  });

  const { createNewEvent } = useGlobalContext();

  // FUNCTION TO CALL CREATE EVENT FUNCTION AND CLEAR STATE ONCE CLICKED
  const handleBtnClick = async (e) => {
    e.preventDefault();
    createNewEvent(event);
    setEvent({ title: "", location: "", eventtime: "" });
  };

  // FUNCTION TO HANDLE USER INPUT AND SET EVENT STATE
  const handleEventInput = (e) => {
    setEvent((prevEvent) => {
      return { ...prevEvent, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="App">
      <h1>Eventonica</h1>
      <form className="formContainer" onSubmit={handleBtnClick}>
        <div className="formRow">
          <label htmlFor="title">Event Name:</label>
          <input
            id="title"
            type="text"
            placeholder="Name"
            name="title"
            autoComplete="off"
            onChange={handleEventInput}
            value={event.title}
          />
        </div>
        <div className="formRow">
          <label htmlFor="location">Event Location:</label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            name="location"
            autoComplete="off"
            onChange={handleEventInput}
            value={event.location}
          />
        </div>
        <div className="formRow">
          <label htmlFor="eventtime">Event Date:</label>
          <input
            id="eventtime"
            type="date"
            name="eventtime"
            autoComplete="off"
            value={event.eventtime}
            onChange={handleEventInput}
          />
        </div>

        <button className="btn">Add Event</button>
      </form>
      <Events />
    </div>
  );
}

export default App;
