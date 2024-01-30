import { createSlice} from "@reduxjs/toolkit";

const restrauntSlice=createSlice({
    name:"restraunts",
    initialState:{
        items:{
           restrauntData:null,
        }
    },
    reducers:{
        addResData: (state, action) => {
            // Assuming action.payload is the item to be added
            state.restrauntData = action.payload; // Assuming 'id' is a property of the item
      
            
          },
          removeResData: (state, action) => {
            return [];
        }
    }
})

export default restrauntSlice.reducer;
export const{addResData,removeResData}=restrauntSlice.actions;