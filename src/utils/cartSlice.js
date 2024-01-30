import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:{}//items as key and quantity as value
    },
    reducers:{
        addItem: (state, action) => {
            // Assuming action.payload is the item to be added
            const itemId = action.payload.card.info.id; // Assuming 'id' is a property of the item
      
            if (state.items[itemId]) {
              // If the item is already in the cart, update the quantity
              state.items[itemId].quantity += 1;
            } else {
              // If the item is not in the cart, add it
              state.items[itemId] = { ...action.payload, quantity: 1 };
            }
          },
          removeitem: (state, action) => {
            // Assuming action.payload is the itemId to be removed
            const itemId = action.payload.card.info.id;
      
            if (state.items[itemId]) {
              // If the item is in the cart, decrement the quantity
              state.items[itemId].quantity -= 1;
      
              // If quantity becomes zero, remove the item from the cart
              if (state.items[itemId].quantity === 0) {
                delete state.items[itemId];
              }
            }
          },
       
        emptycart:(state,action)=>{
           state.items.length=0;
           //or return[];
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeitem,emptycart}=cartSlice.actions;