import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/tasks';

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
})
