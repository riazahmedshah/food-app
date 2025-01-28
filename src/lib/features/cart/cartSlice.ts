import { CartState, ItemList } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: CartState = []

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItemToCart: (state, action: PayloadAction<ItemList>) => {
            state.push(action.payload);
          },
          removeItemFromCart: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.card.info.id !== action.payload);
          },
          clearCart: () => {
            return [];
          },
    }
})

export const {addItemToCart, clearCart, removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer;