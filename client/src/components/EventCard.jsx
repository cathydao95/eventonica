import "./EventCard.css";
import EditEvent from "./EditEvent";
import { useGlobalContext } from "../utils/context";
import { MdDateRange, MdLocationPin, MdDelete } from "react-icons/md";

const EventCard = ({ singleEvent }) => {
  const { deleteEvent, formatEventTime } = useGlobalContext();
  const { title, location, eventtime, id } = singleEvent;
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
          <div> {eventtime ? formatEventTime(eventtime) : "TBD"}</div>
        </div>
        <div className="iconBtnContainer">
          {/* BUTTON TO SHOW EDIT MODAL */}
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
