import { useState } from "react";
import "./EditEvent.css";
import { useGlobalContext } from "../context";
import { MdModeEdit, MdClose } from "react-icons/md";

const EditEvent = ({ singleEvent }) => {
  const {
    showEditModal,
    showModal,
    closeEditModal,
    editJobId,
    updateEvent,
    formatEventTime,
  } = useGlobalContext();
  const { id } = singleEvent;

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
    if (e.target.name === "eventtime") {
      setFormattedDate(e.target.value);
    }
  };

  return (
    <div>
      <button className="iconBtn" onClick={() => showEditModal(id)}>
        <MdModeEdit className="editBtn" />
      </button>
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
            <button className="iconBtn" onClick={() => closeEditModal(id)}>
              <MdClose className="closeBtn" />
            </button>
          </div>
          <form className="editForm">
            <div className="formRow">
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
            <div className="formRow">
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
            <div className="formRow">
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
            <button
              className="btn edit"
              onClick={() => {
                updateEvent(id, eventInfo);
                closeEditModal(id);
              }}
            >
              Edit
            </button>
            <button className="btn cancel" onClick={() => closeEditModal(id)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
