import { createReducer } from '@reduxjs/toolkit';
import { filter } from '../actions';

const filterReducer = createReducer('', {
    [filter]: (_, { payload }) => payload
});

export default filterReducer;