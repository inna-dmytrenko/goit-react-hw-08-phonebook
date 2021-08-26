import axios from "axios";

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from "./contacts-actions.js";

// GET @ /contacts
const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};
// POST @ /contacts
const addContact = (description) => (dispatch) => {
  const contacts = {
    description,
    completed: false,
  };
  dispatch(addContactsRequest());
  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error.message)));
};
// DELETE @ /contacts/:id
const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch((error) => dispatch(deleteContactsError(error.message)));
};
// PATCH @ /contacts/:id
const toggleContact =
  ({ id, completed }) =>
  (dispatch) => {
    const update = { completed };
    dispatch(toggleCompletedRequest());
    axios
      .delete(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch((error) => dispatch(toggleCompletedError(error.message)));
  };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  toggleContact,
};
export default contactsOperations;
