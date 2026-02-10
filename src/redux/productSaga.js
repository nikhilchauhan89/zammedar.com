import { put, takeEvery } from 'redux-saga/effects'
import { Product_List, Search_Product, Set_Product_list } from './constant';
import { searchProduct } from './productAction';


function* getProduct() {
    let data = yield fetch("http://localhost:3500/product")
    data = yield data.json();
   
    yield put({ type: Set_Product_list, data })
}

function* productSearch(data) {
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`)
    result = yield result.json();
    console.log(result)
   
    yield put({ type: Set_Product_list, data:result })
}
 
function* productSaga() {

    yield takeEvery(Product_List, getProduct)
    yield takeEvery(Search_Product, productSearch)

}

export default productSaga;