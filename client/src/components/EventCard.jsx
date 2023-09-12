import "./EventCard.css";

const EventCard = ({ title, location, eventtime, id }) => {
  const deleteEvent = async (id) => {
    try {
      const deleteEvent = await fetch(
        `http://localhost:8080/api/events/${id}`,
        { method: "DELETE" }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="eventContainer">
      <div>{title}</div>
      <div>Date: {!eventtime ? "TBD" : null}</div>
      <div>Location: {location}</div>
      <div>
        <button>Edit</button>
        <button onClick={() => deleteEvent(id)}>Delete</button>
      </div>
    </div>
  );
};

export default EventCard;
