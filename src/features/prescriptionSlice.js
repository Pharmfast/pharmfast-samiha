import { createSlice } from "@reduxjs/toolkit";

export const prescriptionSlice = createSlice({
    name: 'prescription',
    initialState: {
        prescriptionImage: null,
    },
    reducers: {
        setPrescriptionImage: (state, action) => {
            state.prescriptionImage = action.payload;
        },
    },
});

export const { setPrescriptionImage } = prescriptionSlice.actions;

export const selectPrescriptionImage = (state) => state.prescription.prescriptionImage;

export default prescriptionSlice.reducer;