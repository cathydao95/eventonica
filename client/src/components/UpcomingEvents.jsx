import EventCard from "./EventCard";
import "./UpcomingEvents.css";
import { useGlobalContext } from "../utils/context";

function UpcomingEvents() {
  // OBTAIN EVENTS STATE FROM CONTEXT
  const { events } = useGlobalContext();

  return (
    <div>
      <h2 className="header">Upcoming Events</h2>
      <div className="eventsContainer">
        {events.map((singleEvent, index) => {
          return (
            <EventCard events={events} key={index} singleEvent={singleEvent} />
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingEvents;
