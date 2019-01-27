import {
  GET_CONTACTS,
  GET_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT
} from './../actions/types';

const initialState = {
  contacts: [],
  contact: {}
};

export default function(state = initialState, action) {
  const { type, payload: p } = action;
  const { contacts } = state;

  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: p };
    case GET_CONTACT:
      return { ...state, contact: p };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: contacts.filter(c => c.id !== p)
      };
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [p, ...contacts]
      };
    }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(c => (c.id === p.id ? p : c))
      };
    default:
      return state;
  }
}
