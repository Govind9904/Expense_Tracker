import { configureStore } from '@reduxjs/toolkit';

import authReducer from "./slices/authSlice";
import expenseReducer from './slices/expenseSlice';
import categoryReducer from './slices/categorySlice';

export const store = configureStore({
    reducer : {
        auth : authReducer,
        expense : expenseReducer,
        category : categoryReducer,
    },

    middleware : getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck:false
        }),
    
    devTools:__DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;