import { useState } from "react";
import "./App.css";
import Events from "./components/Events";

function App() {
  const [event, setEvent] = useState({});

  const setEventInfo = (e) => {
    setEvent((prevEvent) => {
      return { ...prevEvent, [e.target.name]: e.target.value };
    });
  };

  const createNewEvent = async (e) => {
    e.preventDefault();
    try {
      const body = event;
      const response = await fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  console.log(event);

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
            onChange={setEventInfo}
          />
        </div>
        <div>
          <label htmlFor="location">Event Name:</label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            name="location"
            onChange={setEventInfo}
          />
        </div>
        <div>
          <label htmlFor="eventtime">Event Time:</label>
          <input
            id="eventtime"
            type="datetime-local"
            placeholder="Event Time"
            name="eventtime"
            onChange={setEventInfo}
          />
        </div>

        <button>Add Event</button>
      </form>
      <Events setEventInfo={setEventInfo} />
    </div>
  );
}

export default App;
