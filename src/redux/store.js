import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts/contactsReducer';
import authReducer from './authorization/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: { auth: persistReducer(authPersistConfig, authReducer) },
});

export const persistor = persistStore(store);
