import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contactsReducer';
import authReducer from './authorization/authReducer';

const store = configureStore({
  reducer: {  auth: authReducer },
});

export default store;
