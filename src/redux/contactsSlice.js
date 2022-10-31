import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import { INITIAL_CONTACTS } from "data/initialContacts";
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { data: INITIAL_CONTACTS },
    reducers: {
        addContact(state, action) {
            state.data.push(action.payload.contact);
        },
        deleteContact(state, action) {
            state.data = state.data.filter(contact => contact.id !== action.payload.id);
        },
    }
})

const persistConfig = {
    key: 'contacts',
    storage
}

export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.data;