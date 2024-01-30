import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"//sice we are exporting by default we can give any name here
import restrauntReducer from "./restrauntSlice"

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        restraunt:restrauntReducer,
        
    }
});

export default appStore