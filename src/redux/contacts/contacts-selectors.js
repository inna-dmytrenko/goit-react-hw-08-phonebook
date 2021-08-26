import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
// const getLoading = (state) => console.log(state)
const contactsSelectors = {
  getLoading,
};
export default contactsSelectors;
