import {Product_List, Remove_To_Cart,Empty_Cart, Set_Product_list, Search_Product} from './constant'


export const productListing= ()=>{
    return{
        type:Product_List,
        // data:'apple'
    }
}
export const searchProduct= (query)=>{
    return{
        type:Search_Product,
        query,
    }
}

// export const setProductListing= (data)=>{
//     console.log("set action")
//     return{
//         type:Set_Product_list,
//         data:data
//     }
// }