import { createSlice } from '@reduxjs/toolkit';
import { amountToCoins } from '../../helpers/convertAmount';

const initialState = [];

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        initializeCoins: (state, action) => {
            const [amount, currency] = action.payload;
            const convertWalletInCoins = amountToCoins(amount, currency);
           
            return convertWalletInCoins;
        },
        decrementCoins: (state, action) => {
            const value = action.payload;
            const coinIndex = state.findIndex((coin) => coin[0] === value);
            
            state[coinIndex][1] -= 1;
        },
        incrementCoins: (state, action) => {
            const convertAmountInCoins = amountToCoins(action.payload);
            
            convertAmountInCoins.forEach((coin, index) => {
                state[index][1] += coin[1];
            })
        }
    }
});

export const { 
    initializeCoins,
    decrementCoins,
    incrementCoins,
} = coinsSlice.actions;

export default coinsSlice.reducer;

export const selectAllCoins = (state) => state.coins;