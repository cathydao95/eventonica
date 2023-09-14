import EventCard from "./EventCard";
import "./Events.css";
import { useGlobalContext } from "../context";

function Events() {
  const { events } = useGlobalContext();

  return (
    <div>
      <h2 className="header">Upcoming Events</h2>
      <div className="eventsContainer">
        {events.map((singleEvent, index) => {
          const { id } = singleEvent;
          return (
            <EventCard events={events} key={index} singleEvent={singleEvent} />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
