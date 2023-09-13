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
  HANDLE_CHANGE,
} from "./actions";

const AppContext = createContext();

const initialState = {
  events: [],
  event: { title: "", location: "", eventtime: "" },
  showModal: false,
  editJobId: "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // SHOW MODAL
  const showEditModal = (id) => {
    dispatch({ type: SHOW_MODAL, payload: { id } });
  };

  // CLOSE MODAL
  const closeEditModal = (id) => {
    dispatch({ type: CLOSE_MODAL, payload: { id } });
  };

  // HANDLE INPUT CHANGES
  const handleChange = (name, value) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  // GET ALL EVENTS
  const getEvents = async () => {
    const response = await fetch("http://localhost:8080/api/events");
    const eventsData = await response.json();

    dispatch({ type: GET_ALL_EVENTS, payload: { eventsData } });
    // console.log("Events fetched...", eventsData);
  };

  useEffect(() => {
    getEvents();
  }, []);

  // CREATE EVENT
  const createNewEvent = async (e) => {
    e.preventDefault();
    console.log("hi cathy");
    try {
      const { event } = state;
      const response = await fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });
      console.log("response", response);

      // if
      console.log("before");
      dispatch({ type: ADD_EVENT, payload: { event } });
      console.log("after");
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT EVENT
  const updateEvent = async (id) => {
    console.log(id);
    try {
      const { event } = state;
      const response = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });

      dispatch({ type: EDIT_EVENT, payload: { event, id } });
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE EVENT
  const deleteEvent = async (id) => {
    try {
      const deleteEvent = await fetch(
        `http://localhost:8080/api/events/${id}`,
        { method: "DELETE" }
      );
      // if response.ok {

      // if not ok
    } catch (error) {
      console.log(error);
    }

    dispatch({ type: DELETE_EVENT, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteEvent,
        handleChange,
        createNewEvent,
        showEditModal,
        closeEditModal,
        updateEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
