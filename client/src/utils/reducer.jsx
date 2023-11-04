import {
  SHOW_MODAL,
  CLOSE_MODAL,
  ADD_EVENT,
  DELETE_EVENT,
  GET_ALL_EVENTS,
  EDIT_EVENT,
} from "./actions";

const reducer = (state, action) => {
  // SHOW EDIT MODAL
  if (action.type === SHOW_MODAL) {
    return { ...state, showModal: true, editJobId: action.payload.id };
  }

  // CLOSE EDIT MODAL
  if (action.type === CLOSE_MODAL) {
    return { ...state, showModal: false, editJobId: action.payload.id };
  }

  // GET ALL EVENTS
  if (action.type === GET_ALL_EVENTS) {
    const events = action.payload.eventsData;
    return { ...state, events: events };
  }

  // CREATE NEW EVENT
  if (action.type === ADD_EVENT) {
    const { events } = state;
    const { newEvent } = action.payload;
    const updatedEvents = [...events, newEvent];
    return { ...state, events: updatedEvents };
  }

  // UPDATE AN EVENT
  if (action.type === EDIT_EVENT) {
    const { events } = state;
    const { updatedEvent, id } = action.payload;
    const updatedEvents = events.map((event) => {
      return event.id === id ? updatedEvent : event;
    });
    return { ...state, events: updatedEvents };
  }

  // DELETE AN EVENT
  if (action.type === DELETE_EVENT) {
    const events = state.events;
    const eventId = action.payload.id;
    const updatedEvents = events.filter((event) => event.id !== eventId);
    return { ...state, events: updatedEvents };
  }
};

export default reducer;
