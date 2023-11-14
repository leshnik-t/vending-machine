import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';
import { itemsInitialState } from './itemsInitialState';

const initialState = {
    items: itemsInitialState,
    status: 'idle',
    error: null
}

// export const fetchItems = createAsyncThunk('items/fetchItem', async () => {
//     const response = await client.get('/items');
//     return response.data;
// })
export const fetchItemBySlotLabel = createAsyncThunk('items/fetchItemBySlotLabel', async (slotLabel) => {
    const response = await client.get(`/items/${slotLabel}`);
    return response.data;
})

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: { 
        itemQuantityDecrement(state, action) {
            const { 
                slotLabel,
                quantity
            } = action.payload;

            const existingItem = state.items.find(item => item.slotLabel === slotLabel)
            if (existingItem) {
                existingItem.quantity = quantity - 1;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItemBySlotLabel.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchItemBySlotLabel.fulfilled, (state, action) => {
            state.status = 'succeeded'
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
        builder.addCase(fetchItemBySlotLabel.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        // builder.addCase(fetchItems.pending, (state, action) => {
        //     state.status = 'loading'
        // })
        // builder.addCase(fetchItems.fulfilled, (state, action) => {
        //     state.status = 'succeeded'
        //     // Add any fetched posts to the array
        //     state.items = state.items.concat(action.payload)
        // })
        // builder.addCase(fetchItems.rejected, (state, action) => {
        //     state.status = 'failed'
        //     state.error = action.error.message
        // })
    }
});

export default itemsSlice.reducer;

export const selectAllItems = state => state.items.items
export const selectItemBySlotLabel = (state, slotLabel) =>
  state.items.find(item => item.slotLabel === slotLabel)