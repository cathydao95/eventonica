import {
  SHOW_MODAL,
  CLOSE_MODAL,
  ADD_EVENT,
  DELETE_EVENT,
  GET_ALL_EVENTS,
  EDIT_EVENT,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SHOW_MODAL) {
    const { showModal, editJobId } = state;
    return { ...state, showModal: true, editJobId: action.payload.id };
  }
  if (action.type === CLOSE_MODAL) {
    return { ...state, showModal: false, editJobId: action.payload.id };
  }

  if (action.type === GET_ALL_EVENTS) {
    const events = action.payload.eventsData;
    return { ...state, events: events };
  }

  if (action.type === ADD_EVENT) {
    const { events } = state;
    console.log(action.payload);
    const { newEvent } = action.payload;
    const updatedEvents = [...events, newEvent];
    return { ...state, events: updatedEvents };
  }

  if (action.type === EDIT_EVENT) {
    const { events } = state;
    const { updatedEvent, id } = action.payload;
    const updated = events.map((event) => {
      if (event.id === id) {
        return updatedEvent;
      }
      return event;
    });

    return { ...state, events: updated };
  }

  if (action.type === DELETE_EVENT) {
    const events = state.events;
    const eventId = action.payload.id;
    const updatedEvents = events.filter((event) => event.id !== eventId);
    return { ...state, events: updatedEvents };
  }
};

export default reducer;
