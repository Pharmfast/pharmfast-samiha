import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
    name: 'detail',
    initialState: {
        productDetailId: null,
    },
    reducers: {
        enterProductDetail: (state, action) => {
            state.productDetailId = action.payload.productDetailId;
        },
    },
});

export const { enterProductDetail } = productDetailSlice.actions;

export const selectProductDetailId = state => state.detail.productDetailId;

export default productDetailSlice.reducer;