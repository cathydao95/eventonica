const EventCard = ({ title, location, eventtime, id }) => {
  return (
    <div style={{ width: "18rem" }}>
      <div>
        <div>{title}</div>
        <div>Date: {!eventtime ? "TBD" : null}</div>
        <div>Location: {location}</div>
      </div>
    </div>
  );
};

export default EventCard;
