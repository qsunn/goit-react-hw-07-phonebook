import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        onFilter(state, action) {
            return action.payload.filter;
        },
    }
})

export const { onFilter } = filterSlice.actions;

export const getFilter = state => state.filter;
