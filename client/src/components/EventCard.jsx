import "./EventCard.css";
import EditEvent from "./EditEvent";
import { useGlobalContext } from "../context";
import { MdDateRange, MdLocationPin, MdDelete } from "react-icons/md";

const EventCard = ({ singleEvent }) => {
  const { deleteEvent } = useGlobalContext();
  const { title, location, eventtime, id } = singleEvent;

  const date = new Date(eventtime);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");

  const formattedDate = `${month}/${day}/${year}`;

  return (
    <div className="container">
      <div className="eventContainer">
        <h3 className="eventName">{title}</h3>
        <div className="iconContainer">
          <div>
            <MdLocationPin />
          </div>
          <div>{location}</div>
        </div>
        <div className="iconContainer">
          <div>
            <MdDateRange />
          </div>
          <div> {eventtime ? formattedDate : "TBD"}</div>
        </div>

        <div className="iconBtnContainer">
          <EditEvent singleEvent={singleEvent} />

          <button className="iconBtn" onClick={() => deleteEvent(id)}>
            <MdDelete className="deleteBtn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
