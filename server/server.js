//This is the minimal express server.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const db = require("./db/db-connection.js");

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello Techtonica 2023 H2 to your Server for Eventonica");
});

app.get("/api/events", async (req, res) => {
  // //real connection with the DB eventonica
  try {
    const { rows: events } = await db.query("SELECT * FROM events");
    res.send(events);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

app.get("/api/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await db.query("SELECT * FROM events WHERE id = $1", [id]);
    res.json(event.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/events", async (req, res) => {
  try {
    const { title, location, eventtime } = req.body;
    const newEvent = await db.query(
      "INSERT INTO events (title, location, eventtime) VALUES($1, $2, $3) RETURNING *",
      [title, location, eventtime]
    );
    res.json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, location, eventtime } = req.body;
    const updateEvent = await db.query(
      "UPDATE events SET (title, location, eventtime) = ($1,$2,$3) WHERE id=$4",
      [title, location, eventtime, id]
    );
    res.json("Event Updated");
  } catch (error) {
    console.log(error);
    res.json({ status: "failure" });
  }
});

app.delete("/api/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEvent = await db.query("DELETE FROM events WHERE id = $1", [
      id,
    ]);
    res.json("Event deleted");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () =>
  console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);
