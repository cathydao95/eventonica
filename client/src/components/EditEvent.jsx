import { useState } from "react";
import "./EditEvent.css";
import { useGlobalContext } from "../context";

const EditEvent = ({ singleEvent }) => {
  const {
    showEditModal,
    showModal,
    closeEditModal,
    editJobId,
    handleChange,
    updateEvent,
  } = useGlobalContext();
  const { id } = singleEvent;

  function formatEventTime(eventTime) {
    const date = new Date(eventTime);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const [eventInfo, setEventInfo] = useState({
    title: singleEvent.title,
    location: singleEvent.location,
    eventtime: singleEvent.eventtime,
  });

  const [formattedDate, setFormattedDate] = useState(
    formatEventTime(eventInfo.eventtime)
  );

  const updateEventInfo = (e) => {
    setEventInfo((prevInfo) => {
      return { ...prevInfo, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <button onClick={() => showEditModal(id)}>Edit</button>
      <div className="modalParentContainer">
        <div
          className={
            showModal && editJobId === id
              ? "show modalContainer"
              : "modalContainer"
          }
        >
          <div className="modalHeader">
            <h4>Edit Event</h4>
            <button onClick={() => closeEditModal(id)}>X</button>
          </div>
          <form>
            <div>
              <label htmlFor="title">Event Name:</label>
              <input
                id="title"
                type="text"
                placeholder="Event Name"
                name="title"
                onChange={updateEventInfo}
                value={eventInfo.title}
              />
            </div>
            <div>
              <label htmlFor="location">Event Location:</label>
              <input
                id="location"
                type="text"
                placeholder="Location"
                name="location"
                onChange={updateEventInfo}
                value={eventInfo.location}
              />
            </div>
            <div>
              <label htmlFor="eventtime">Event Date:</label>
              <input
                id="eventtime"
                type="date"
                placeholder="Event Date"
                name="eventtime"
                onChange={updateEventInfo}
                value={formattedDate}
              />
            </div>
          </form>
          <div className="btnContainer">
            <button onClick={() => updateEvent(id, eventInfo)}>Edit</button>
            <button onClick={() => closeEditModal(id)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
