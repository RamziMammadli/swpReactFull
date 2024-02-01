import { configureStore } from "@reduxjs/toolkit";
import  getDataSlice  from "./reducers/getSlice";

export const store = configureStore({
    reducer:{
        getData: getDataSlice
    }
})