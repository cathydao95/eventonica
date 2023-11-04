import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import {
  SHOW_MODAL,
  CLOSE_MODAL,
  ADD_EVENT,
  EDIT_EVENT,
  SET_EDIT_EVENT,
  DELETE_EVENT,
  GET_ALL_EVENTS,
} from "./actions";

const AppContext = createContext();

const initialState = {
  events: [],
  showModal: false,
  editJobId: "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function formatEventTime(eventTime) {
    const date = new Date(eventTime);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // SHOW MODAL
  const showEditModal = (id) => {
    dispatch({ type: SHOW_MODAL, payload: { id } });
  };

  // CLOSE MODAL
  const closeEditModal = (id) => {
    dispatch({ type: CLOSE_MODAL, payload: { id } });
  };

  // GET ALL EVENTS
  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/events");

      if (response.ok) {
        const eventsData = await response.json();
        dispatch({ type: GET_ALL_EVENTS, payload: { eventsData } });
      } else if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error occured while fetching data", error);
    }
  };

  // RUN GET EVENTS WHEN APP LOADS
  useEffect(() => {
    getEvents();
  }, []);

  // CREATE EVENT
  const createNewEvent = async (newEvent) => {
    try {
      const response = await fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const eventData = await response.json();
        const { newEvent } = eventData;
        dispatch({ type: ADD_EVENT, payload: { newEvent } });
      } else if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error occured while creating event", error);
    }
  };

  // EDIT EVENT
  const updateEvent = async (id, updatedEvent) => {
    console.log("eventId", id, "updatedevent", updatedEvent);
    try {
      const response = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });

      if (response.ok) {
        const eventData = await response.json();
        const { updatedEvent } = eventData;

        console.log("eventData", eventData);
        dispatch({ type: EDIT_EVENT, payload: { id, updatedEvent } });
      } else if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error occured while updating event", error);
    }
  };

  // DELETE EVENT
  const deleteEvent = async (id) => {
    console.log("test", id);
    try {
      const response = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error occured while deleting event", error);
    }

    dispatch({ type: DELETE_EVENT, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteEvent,
        createNewEvent,
        showEditModal,
        closeEditModal,
        updateEvent,
        formatEventTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
