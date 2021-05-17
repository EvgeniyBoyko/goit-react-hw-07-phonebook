import shortid from 'shortid';
import { ADD_CONTACT, FILTER, DELETE_CONTACT } from './constants';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const filter = createAction(FILTER);

export const deleteContact = createAction(DELETE_CONTACT);