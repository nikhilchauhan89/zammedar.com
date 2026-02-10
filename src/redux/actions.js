import {Add_To_Cart, Remove_To_Cart,Empty_Cart} from './constant'
export const addToCart=(data)=>{

    console.log("action called",data)
    return{
        type:Add_To_Cart,
        data:data
    }
}
export const removeFromCart=(data)=>{

    console.log("action RemoveCart",data)
    return{
        type:Remove_To_Cart,
        data:data
    }
}
export const EmptyCart=()=>{

    console.log("action emptyCart")
    return{
        type: Empty_Cart
        
    }
}