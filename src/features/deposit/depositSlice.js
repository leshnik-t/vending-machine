import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "amount": "0.00",
}

const depositSlice = createSlice({
    name: 'deposit',
    initialState,
    reducers: {
       incrementDeposit: (state, action) => {
            const deposit = +state.amount + +action.payload;
            state.amount = deposit.toFixed(2).toString();
        },
        deleteDeposit: (state, action) => {
            state.amount = "0.00";
        },
    }
});

export const { 
    incrementDeposit,
    deleteDeposit,
} = depositSlice.actions;

export default depositSlice.reducer;

export const selectDeposit = (state) => state.deposit.amount;