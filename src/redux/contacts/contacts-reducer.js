// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterItem } from './contacts-actions';

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
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   toggleCompletedRequest,
//   changeFilter,
// } from './contacts-actions.js';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterItem]: (_, { payload }) => payload,
});
export const contactsReducer = combineReducers({
  contacts,
  filter: filterReducer,
});
// const items = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactsSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactsSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [toggleCompletedSuccess]: (state, { payload }) =>
//     state.map(contact => (contact.id === payload.id ? payload : contact)),
// });

// const loading = createReducer(false, {
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,
//   [addContactsRequest]: () => true,
//   [addContactsSuccess]: () => false,
//   [addContactsError]: () => false,
//   [deleteContactsRequest]: () => true,
//   [deleteContactsSuccess]: () => false,
//   [deleteContactsError]: () => false,
//   [toggleCompletedRequest]: () => true,
//   [toggleCompletedSuccess]: () => false,
//   [toggleCompletedError]: () => false,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {});

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });
