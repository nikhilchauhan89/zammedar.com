import { Product_List, Set_Product_list} from './constant'

export const productData = (data = [], action) => {
    switch (action.type) {
        // case Product_List:
        //     console.log("Product_List Condition", action)
        //     return [action.data];
        case Set_Product_list:
            console.log("Product_List Condition", action)
            return [...action.data];
            default:
                return data
    }
}