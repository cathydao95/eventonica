import "./EventCard.css";
import EditEvent from "./EditEvent";
import { useGlobalContext } from "../context";

const EventCard = ({ singleEvent }) => {
  const { deleteEvent } = useGlobalContext();
  const { title, location, eventtime, id } = singleEvent;

  const date = new Date(eventtime);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");

  const formattedDate = `${month}/${day}/${year}`;

  return (
    <div className="eventContainer">
      <div>Title:{title}</div>
      <div>Date: {eventtime ? formattedDate : "TBD"}</div>
      <div>Location: {location}</div>
      <div className="btnContainer">
        <EditEvent singleEvent={singleEvent} />

        <button onClick={() => deleteEvent(id)}>Delete</button>
      </div>
    </div>
  );
};

export default EventCard;
