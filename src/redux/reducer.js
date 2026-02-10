import { Add_To_Cart, Empty_Cart, Remove_To_Cart } from './constant'

export const cartData = (data = [], action) => {
    switch (action.type) {
        case Add_To_Cart:
            console.log("Add_To_Cart Condition", action)
            return [action.data,...data];
              case Remove_To_Cart:
            console.log("Remove_to_cart Condition", action)
            // data.length=data.length?data.length-1:[];
            const remainingItem=data.filter((item)=>item.id!=action.data)
            return [...remainingItem];
              case Empty_Cart:
            console.log("emptycart Condition", action)
            data=[]
            return [...data];
        default:
            return data;
    }

}