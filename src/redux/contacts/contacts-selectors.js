// import { createSelector } from '@reduxjs/toolkit';

// const getLoading = state => state.contacts.loading;
const getFilter = state => state.phonebook.filter;
const getContacts = state => state.phonebook.contacts;
// const getLoading = state => console.log(state);
const contactsSelectors = {
  // getLoading,
  getFilter,
  getContacts,
};
export default contactsSelectors;
