import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        productsCartList: [],
        total: 0,
        deliveryAdded: false
    },
    reducers: {
        RemoveFromCart: (state, action) => {
            state.productsCartList = state.productsCartList.filter(p => p.id !== action.payload.id);
            state.total -= action.payload.itemTotal;
        },
        AddToCart: (state, action) => {
            const existingItem = state.productsCartList.find(p => p.id === action.payload.id);
            if (existingItem) {
                existingItem.amount += 1;
                existingItem.itemTotal = existingItem.price * existingItem.amount;
            } else {
                state.productsCartList.push({
                    id: action.payload.id,
                    image: action.payload.image,
                    title: action.payload.title,
                    price: action.payload.price,
                    amount: 1,
                    itemTotal: action.payload.price
                });
            }
            state.total = state.productsCartList.reduce((sum, item) => {
                return sum + (item.itemTotal || 0);
            }, 0);
        },
        RemoveFromItem: (state, action) => {
            const currentItem = state.productsCartList.find(p => p.id === action.payload.id);
            if (currentItem) {
                if (currentItem.amount === 1) {
                    state.productsCartList = state.productsCartList.filter(p => p.id !== action.payload.id);
                } else {
                    currentItem.amount -= 1;
                    currentItem.itemTotal = currentItem.price * currentItem.amount; 
                }
            }
            state.total = state.productsCartList.reduce((sum, item) => sum + item.itemTotal, 0);
        },
        Delivery: (state) => {
            if(!state.deliveryAdded){
                state.total = state.total+30;
                state.deliveryAdded = true;
            }
            else{
                state.total = state.total-30;
                state.deliveryAdded = false;
            }
        },
        FinishOrder: (state) => {
            state.productsCartList = [];
            state.total = 0;
            state.deliveryAdded = false;
        }
    }
})

export const { AddToCart, RemoveFromCart, RemoveFromItem, Delivery, FinishOrder } = CartSlice.actions;

export default CartSlice.reducer;
