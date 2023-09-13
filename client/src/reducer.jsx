import {
  SHOW_MODAL,
  CLOSE_MODAL,
  ADD_EVENT,
  DELETE_EVENT,
  GET_ALL_EVENTS,
  HANDLE_CHANGE,
  EDIT_EVENT,
} from "./actions";

const reducer = (state, action) => {
  console.log({ action });
  const { showModal, editJobId } = state;
  if (action.type === SHOW_MODAL) {
    return { ...state, showModal: true, editJobId: action.payload.id };
  }
  if (action.type === CLOSE_MODAL) {
    return { ...state, showModal: false, editJobId: action.payload.id };
  }

  if (action.type === HANDLE_CHANGE) {
    const event = state.event;
    const newEvent = { ...event, [action.payload.name]: action.payload.value };
    console.log("newEvent", newEvent);

    return { ...state, event: newEvent };
  }

  if (action.type === GET_ALL_EVENTS) {
    const events = action.payload.eventsData;
    return { ...state, events: events };
  }

  if (action.type === ADD_EVENT) {
    console.log("hello romain");
    const events = state.events;
    const newEvent = action.payload.event;
    return { ...state, events: [...events, newEvent] };
  }

  if (action.type === EDIT_EVENT) {
    const events = state.events;
    const updatedEvent = action.payload.event;
    const update = events.map((event) => {
      if (event.id === action.payload.id) {
        return action.payload.event;
      }
      return event;
    });

    return { ...state, events: update };
  }

  if (action.type === DELETE_EVENT) {
    const events = state.events;
    const eventId = action.payload.id;
    const updatedEvents = events.filter((event) => event.id !== eventId);
    return { ...state, events: updatedEvents };
  }
};

export default reducer;
