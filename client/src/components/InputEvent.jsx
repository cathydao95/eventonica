import { useState } from "react";

const InputEvent = () => {
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
      // console.log(body);
      const response = await fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(event);

  return (
    <div>
      <form onSubmit={createNewEvent}>
        <div>
          <label htmlFor="title">Event Name: </label>
          <input
            id="title"
            type="text"
            placeholder="Event Name"
            name="title"
            onChange={setEventInfo}
          />
        </div>
        <div>
          <label htmlFor="location"> Location: </label>
          <input
            id="location"
            type="text"
            placeholder="location"
            name="location"
            onChange={setEventInfo}
          />
        </div>
        <div>
          <label htmlFor="date"> Date: </label>
          <input
            id="date"
            type="datetime-local"
            name="date"
            onChange={setEventInfo}
          />
        </div>
        <button>Add Event</button>
      </form>
    </div>
  );
};

export default InputEvent;
