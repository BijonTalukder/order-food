import { createSlice } from "@reduxjs/toolkit";
import { store } from "../../store";


const initialState={
    items:[],
    storeId:null

}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        addItemToCart:(state,action)=>{
            const {item,storeId} = action.payload;
            if (state.storeId && state.storeId !== storeId) {
                state.items = [];
                state.storeId = storeId;
                
              }
              const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

              if (existingItem) {
                // Increment the quantity of the existing item
                existingItem.quantity += item.quantity;
              } else {
                // Add the new item to the cart
                state.items.push(item);
              }
        
        
        
        },
        removeItemFromCart:(state,action)=>{
            const {_id}= action.payload;
            state.items= state.items.filter((item) => item.id !== itemId);
        }

    }
})

export const {} = cartSlice.actions
export default cartSlice.reducer