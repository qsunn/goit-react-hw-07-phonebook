import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        onFilter(_, action) {
            return action.payload;
        },
    }
})

export const { onFilter } = filterSlice.actions;