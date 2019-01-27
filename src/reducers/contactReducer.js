import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './../actions/types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '555-555-5555'
    },
    {
      id: 2,
      name: 'Karen Williams',
      email: 'karen@gmail.com',
      phone: '444-444-4444'
    },
    {
      id: 3,
      name: 'Henry Johnson',
      email: 'henry@gmail.com',
      phone: '333-333-333'
    }
  ]
};

export default function(state = initialState, action) {
  const { type, payload: p } = action;
  const { contacts } = state;

  switch (type) {
    case GET_CONTACTS:
      return { ...state };
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
    default:
      return state;
  }
}
