import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice';
import userReducer from '../features/users/usersSlice';

export default configureStore({
    reducer: {
        items: itemsReducer,
        user: userReducer
    }
});