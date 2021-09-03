import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productId: null,
    },
    reducers: {
        enterProduct: (state, action) => {
            state.productId = action.payload.productId;
        },
    },
});

export const { enterProduct } = productSlice.actions;

export const selectProductId = state => state.product.productId;

export default productSlice.reducer;