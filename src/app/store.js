import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import itemsReducer from '../features/items/itemsSlice';
import depositReducer from '../features/deposit/depositSlice';
import ordersReducer from '../features/orders/ordersSlice';
import coinsReducer from '../features/coins/coinsSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        items: itemsReducer,
        deposit: depositReducer,
        orders: ordersReducer,
        coins: coinsReducer,
    }
});