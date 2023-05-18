import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload);
    }
  }
});

export const { addItem } = ordersSlice.actions;