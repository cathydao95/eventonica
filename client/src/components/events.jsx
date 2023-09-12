import { useState, useEffect } from "react";
import EventCard from "./EventCard";

function Events() {
  const [events, setEvents] = useState([]);

  const getRequest = () => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
        console.log("Events fetched...", events);
      });
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div>
      <div className="Events">
        {events.map((event) => {
          const { id, title, location, eventtime } = event;
          return (
            <EventCard
              key={id}
              title={title}
              location={location}
              time={eventtime}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
