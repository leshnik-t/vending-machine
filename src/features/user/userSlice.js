import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const initialState = null;

export const fetchUserByUsername = createAsyncThunk('user/fetchUserByUsername', async (username) => {
  const response = await client.get(`/users/${username}`);
  return response.data
})

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    decrementWallet: (state, action) => {
      const wallet = +state.wallet - +action.payload;
      state.wallet = wallet.toFixed(2).toString();
    },
    incrementWallet: (state, action) => {
      const wallet = +state.wallet + +action.payload;
      state.wallet = wallet.toFixed(2).toString();
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const { 
  decrementWallet, 
  incrementWallet 
} = usersSlice.actions;

export default usersSlice.reducer;

export const selectUser = (state) => state.user;
export const selectWallet = (state) => state.user.wallet;