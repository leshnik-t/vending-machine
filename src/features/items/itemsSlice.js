import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';
import { itemsInitialState } from './itemsInitialState';

const initialState = {
    items: itemsInitialState,
    numberOfProducts: null,
}

export const fetchItemBySlotLabel = createAsyncThunk('items/fetchItemBySlotLabel', async (slotLabel) => {
    const response = await client.get(`/items/${slotLabel}`);
    return response.data;
})

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        updateNumberOfProducts: (state, action) => {
            const quantity = state.items.reduce((quantity, currentItem) => quantity + +currentItem.quantity, 0);
            state.numberOfProducts = quantity;
        },
        decrementItemQuantity(state, action) {
            const existingItem = state.items.find((item) => item.slotLabel === action.payload)

            if (existingItem) {
                existingItem.quantity -= 1;
                state.numberOfProducts -= 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItemBySlotLabel.fulfilled, (state, action) => {
            const { 
                slotLabel,
                name,
                imageUrl,
                sku,
                price,
                quantity
            } = action.payload;

            const existingItem = state.items.find(item => item.slotLabel === slotLabel)
            if (existingItem) {
                existingItem.name = name;
                existingItem.imageUrl = imageUrl;
                existingItem.sku = sku;
                existingItem.price = price;
                existingItem.quantity = quantity;
            }
        })
    }
});

export const { 
    updateNumberOfProducts,
    decrementItemQuantity,
} = itemsSlice.actions;

export default itemsSlice.reducer;

export const selectAllItems = (state) => state.items.items;
export const selectNumberOfProducts = (state) => state.items.numberOfProducts;

