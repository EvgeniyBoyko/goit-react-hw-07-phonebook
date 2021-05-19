import { createReducer } from '@reduxjs/toolkit';
import { addContactSuccess, deleteContactSuccess, fetchContactSuccess} from '../actions';

const contactsReducer = createReducer([], {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [fetchContactSuccess]: (_, {payload}) => [...payload]
});

export default contactsReducer;

