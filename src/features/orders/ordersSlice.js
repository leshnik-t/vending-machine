import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentOrderId: null,
    currentOrder: null,
    orders: []
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        updateOrder: (state, action) => {
            const existingOrder = state.orders.find((order)=> order.id === action.payload.id);

            if (existingOrder) {
                existingOrder.status = action.payload.status;
            }
        },
        addCurrentOrder: (state, action) => {
            state.currentOrder = action.payload;
        },
        deleteCurrentOrder: (state, action) => {
            state.currentOrder = null;
        }
    },
});

export const { 
    addOrder,
    updateOrder,
    addCurrentOrder,
    deleteCurrentOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;

export const selectAllOrders = (state) => state.orders.orders;
export const selectCurrentOrder = (state) => 
    state.orders.currentOrder;
