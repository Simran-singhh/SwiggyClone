import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
           state.items.push(action.payload);
        },
        removeitem:(state,action)=>{
         state.items.pop();
        },
        emptycart:(state,action)=>{
           state.items.length=0;
           //or return[];
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeitem,emptycart}=cartSlice.actions;