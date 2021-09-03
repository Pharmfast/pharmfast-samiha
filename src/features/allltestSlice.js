import { createSlice } from "@reduxjs/toolkit";


export const alltestSlice = createSlice({
    name: 'alltest',
    initialState: {
        alltestId: null,
    },
    reducers: {
        enterAlltest: (state, action) => {
            state.alltestId = action.payload.alltestId;
        },
    },
});

export const { enterAlltest } = alltestSlice.actions;
export const selectAlltestId = state => state.alltest.alltestId;
export default alltestSlice.reducer;