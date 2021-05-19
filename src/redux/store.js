import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

const persistedReducer = rootReducer

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

// export const parsistor = persistStore(store);