import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:{}//items as key and quantity as value
    },
    reducers:{
        addItem: (state, action) => {
          console.log("action",action.payload)
           
            const itemId = action.payload.item[0]?.card?.info?.id;
             const itemData={...action.payload.item[0],dbid:action.payload._id}
             console.log("itemDta",itemData)
            
              state.items[itemId] = { ...action.payload.item,dbid:action.payload._id, quantity: action.payload.quantity };
              
            // }
          },
          decitem: (state, action) => {
           
            const itemId = action.payload.card.info.id;
      
            if (state.items[itemId]) {
             
              state.items[itemId].quantity -= 1;
      
             
              if (state.items[itemId].quantity === 0) {
                delete state.items[itemId];
              }
            }
          },
          incitem: (state, action) => {
             const itemId = action.payload.card.info.id;
             if (state.items[itemId]) {
             state.items[itemId].quantity += 1;
      
            
            }
          },
       
        emptycart:(state,action)=>{
          state.items = {};
         }
    }
})

export default cartSlice.reducer;
export const{addItem,decitem,incitem,emptycart}=cartSlice.actions;