import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './actions';

axios.defaults.baseURL = "http://localhost:1488";

export const fetchContact = () => {
    return async (dispatch) => {
        dispatch(fetchContactRequest());
        try {
            const { data } = await axios.get('/contacts');
            dispatch(fetchContactSuccess(data));
        } catch (error) {
            dispatch(fetchContactError(error));
        }
    };
};

export const addContact = (name, number) => {
    return async (dispatch) => {
        dispatch(addContactRequest());
        try {
            const { data } = await axios.post('/contacts', { name, number });
            dispatch(addContactSuccess(data));
        } catch (error) {
            dispatch(addContactError(error));
        }
    };
};

export const deleteContact = (id) => {
    return async (dispatch) => {
        dispatch(deleteContactRequest());
        try {
            await axios.delete(`/contacts/${id}`);
            dispatch(deleteContactSuccess(id));
        } catch (error) {
            dispatch(deleteContactError(error));
        }
    };
};
