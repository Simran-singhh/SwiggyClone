import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"//sice we are exporting by default we can give any name here
const appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default appStore