import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const initialState = []

export const fetchUserByUsername = createAsyncThunk('users/fetchUserByUsername', async (username) => {
  const response = await client.get(`/users/${username}`);
  return response.data
})

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // userDecrementWallet
    // userIncrementWallet
  },
  extraReducers(builder) {
    builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default usersSlice.reducer;

export const selectUser = (state) => state.user;