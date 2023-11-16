import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import itemsReducer from '../features/items/itemsSlice';
import depositReducer from '../features/deposit/depositSlice';
import ordersReducer from '../features/orders/ordersSlice';

export default configureStore({
    reducer: {
        items: itemsReducer,
        user: userReducer,
        orders: ordersReducer,
        deposit: depositReducer
    }
});