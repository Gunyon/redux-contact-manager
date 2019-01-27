import {
  GET_CONTACTS,
  GET_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT
} from './types';
import UserService from './../services/contact-service';

const userService = new UserService();

export const getContacts = () => async dispatch => {
  const contacts = await userService.getUsers();
  dispatch({
    type: GET_CONTACTS,
    payload: contacts
  });
};

export const getContact = id => async dispatch => {
  const contact = await userService.getUser(id);
  dispatch({
    type: GET_CONTACT,
    payload: contact
  });
};

export const deleteContact = id => async dispatch => {
  await userService.deleteUser(id);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = contact => async dispatch => {
  const newContact = await userService.addUser(contact);
  dispatch({
    type: ADD_CONTACT,
    payload: newContact
  });
};

export const updateContact = contact => async dispatch => {
  const updatedContact = await userService.updateUser(contact);
  dispatch({
    type: UPDATE_CONTACT,
    payload: updatedContact
  });
};
