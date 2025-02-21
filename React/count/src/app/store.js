import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/counter/counterSlice";
import todoSlice from "../features/Todo/todoSlice";

export const store = configureStore({
    // reducer slice
    reducer:{
        counter : counterSlice,
        todos : todoSlice
    },
})