import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contactsActions';

const baseUrl = 'https://goit-phonebook-api.herokuapp.com/contacts';
const setHeaders = token => {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};
const getToken = getState => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  return persistedToken;
};

const addContact = (name, number) => (dispatch, getState) => {
  dispatch(addContactRequest());
  const persistedToken = getToken(getState);
  const contact = {
    name,
    number,
  };
  const option = {
    method: 'POST',
    headers: setHeaders(persistedToken),
    body: JSON.stringify(contact),
  };

  fetch(baseUrl, option)
    .then(response => response.json())
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const getContacts = () => (dispatch, getState) => {
  dispatch(getContactRequest());
  const persistedToken = getToken(getState);
  const option = {
    method: 'GET',
    headers: setHeaders(persistedToken),
  };

  fetch(baseUrl, option)
    .then(response => response.json())
    .then(data => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error)));
};

const removeContact = id => (dispatch, getState) => {
  dispatch(removeContactRequest());
  const persistedToken = getToken(getState);
  const option = {
    method: 'DELETE',
    headers: setHeaders(persistedToken),
  };

  fetch(`${baseUrl}/${id}`, option)
    .then(response => response.json())
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};

export { addContact, getContacts, removeContact };
