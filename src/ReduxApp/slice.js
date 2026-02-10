// import { createSlice } from "@reduxjs/toolkit"

import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     value: 0
// }

// const addToCart = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addItem: (state,action) => {
//             state.value += action.payload; ;
//         }
//     }
// })[]

// export const { addItem } = addToCart.actions
// export default addToCart.reducer

const initialState = {
    items:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

const addToCart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.items.push (action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
           removeItem:(state,action)=>{
           const cardData = state.items.filter(item=>item.id!=action.payload.id);
           state.items=cardData;
           localStorage.setItem('cart',JSON.stringify(cardData))
            // if(state.items>0){
            //     state.items -= 1;
            // }
        //    state.value> 0 ? state.value -= 1:null
        },
           clearAllItem:(state)=>{
            state.items = 0;
        }
    }
})

export const{addItem,removeItem,clearAllItem}=addToCart.actions;
// export default addToCart.reducer