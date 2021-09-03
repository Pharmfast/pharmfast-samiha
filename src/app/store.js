import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import productDetailReducer from "../features/productDetailSlice";
import alltestReducer from "../features/allltestSlice";
import prescriptionReducer from "../features/prescriptionSlice";

export default configureStore({
    reducer: {
        product: productReducer,
        detail: productDetailReducer,
        alltest: alltestReducer,
        prescription: prescriptionReducer,
    }
})