// import axios from 'axios';

// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,
//   deleteContactsRequest,
//   deleteContactsSuccess,
//   deleteContactsError,
//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
// } from './contacts-actions.js';

// // GET @ /contacts
// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     console.log(data);
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };
// // POST @ /contacts
// const addContact = description => dispatch => {
//   const contacts = {
//     description,
//     completed: false,
//   };

//   dispatch(addContactsRequest());
//   axios
//     .post('/contacts', contacts)
//     .then(({ data }) => dispatch(addContactsSuccess(data)))
//     .catch(error => dispatch(addContactsError(error.message)));
// };
// // DELETE @ /contacts/:id
// const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactsRequest());
//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactsSuccess(contactId)))
//     .catch(error => dispatch(deleteContactsError(error.message)));
// };
// // PATCH @ /contacts/:id
// const toggleContact = ({ id, completed }) => dispatch => {
//   const update = { completed };
//   dispatch(toggleCompletedRequest());
//   axios
//     .delete(`/contacts/${id}`, update)
//     .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//     .catch(error => dispatch(toggleCompletedError(error.message)));
// };

// const contactsOperations = {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   toggleContact,
// };
// export default contactsOperations;
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('./contacts');
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      const { data } = await axios.post('./contacts', contact);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    try {
      await axios.delete(`./contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log(error.message);
    }
  },
);
