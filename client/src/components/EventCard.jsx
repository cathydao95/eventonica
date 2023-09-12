import Card from "react-bootstrap/Card";

const EventCard = ({ title, location, eventtime, id }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Date: {!eventtime ? "TBD" : null}
        </Card.Subtitle>
        <Card.Text>Location: {location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
