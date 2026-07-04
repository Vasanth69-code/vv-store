import { createSlice } from "@reduxjs/toolkit";

// const initialState = localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : {cardItem:[]};
const storedCard = localStorage.getItem('card');

const initialState = storedCard
  ? JSON.parse(storedCard)
  : {
      cardItem: [],
      itemprice: 0,
      shippingprice: 0,
      taxprice: 0,
      totalprice: 0,
    };

const cardSlice = createSlice({
    name: 'card',
    initialState: initialState,   
    reducers: {
        addtoCard :(state,action)=>{
            const item = action.payload;
            console.log(item);
            const existItem = state.cardItem.find((x) => x._id === item._id);
            if(existItem){
                state.cardItem = state.cardItem.map((x) => x._id === existItem._id ? item : x);
            }else{
                state.cardItem = [...state.cardItem,item];  

            }

            //calculate total price 
            state.itemprice  = state.cardItem.reduce((acc,item) => acc + item.price * item.qty,0)
            // shipping price 
            state.shippingprice = state.itemprice > 100 ? 0 : 10;
            // GST + tax value 
            state.taxprice = Number((0.15 * state.itemprice).toFixed(2));
            //total price
            state.totalprice = (state.itemprice + state.shippingprice + state.taxprice).toFixed(2);
            
            localStorage.setItem('card',JSON.stringify(state));
        },
        removefromtecard:(state,action) =>{
            const id = action.payload;
            state.cardItem = state.cardItem.filter((x) => x._id !== id);
            localStorage.setItem('card',JSON.stringify(state));

            
           
            //calculate total price 
            state.itemprice  = state.cardItem.reduce((acc,item) => acc + item.price * item.qty,0)
            // shipping price 
            state.shippingprice = state.itemprice > 100 ? 0 : 10;
            // GST + tax value 
            state.taxprice = Number((0.15 * state.itemprice).toFixed(2));
            //total price
            state.totalprice = (state.itemprice + state.shippingprice + state.taxprice).toFixed(2);
            
            localStorage.setItem('card',JSON.stringify(state));
        }
    }
})
export const {addtoCard, removefromtecard} = cardSlice.actions;
export default cardSlice.reducer;

