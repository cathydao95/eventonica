import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./Events.css";
import { useGlobalContext } from "../context";

function Events() {
  const { events } = useGlobalContext();

  return (
    <div>
      <div className="eventsContainer">
        {events.map((singleEvent) => {
          const { id } = singleEvent;
          return (
            <EventCard events={events} key={id} singleEvent={singleEvent} />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
