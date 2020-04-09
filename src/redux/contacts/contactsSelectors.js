import { createSelector } from "@reduxjs/toolkit";

const getLoadingContact = state => state.contacts.loader;

const getContact = state => state.contacts.items;

const getFilterContact = state => state.contacts.filter;

const getErrorServer = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [getContact, getFilterContact],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
);

const getContactsById = createSelector(
  [(_, contactId) => contactId, getContact],
  (contactId, contacts) => contacts.find(contact => contact.id === contactId)
);

export {
  getLoadingContact,
  getContact,
  getFilterContact,
  getErrorServer,
  getVisibleContacts,
  getContactsById
};
