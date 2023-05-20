import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const result = state.items.findIndex(item => item.id === payload.id);
      if (result === -1) {
        state.items.push(payload);
      } else {
        state.items[result].totalAmount += 1;
      }
    }
  }
});

export const { addItem } = ordersSlice.actions;