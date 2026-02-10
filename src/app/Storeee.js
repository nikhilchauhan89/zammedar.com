import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "./counterSlice";


 const storeee = configureStore({
    reducer:{
        counter: counterReducer,
    }
});

export default storeee;
