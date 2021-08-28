// import { createSelector } from '@reduxjs/toolkit';

const getLoggedIn = state => state.auth.isLoggedIn;
const getFilter = state => state.phonebook.filter;
const getContacts = state => state.phonebook.contacts;
// const getLoading = state => console.log(state);
const contactsSelectors = {
  getLoggedIn,
  getFilter,
  getContacts,
};
export default contactsSelectors;
