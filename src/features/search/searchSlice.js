import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./photosAPI";

export const getApiPhotos = createAsyncThunk(
    "search/fetchPhotos",
    async (query) => {
        return await fetchPhotos(query);
    }
)

const initialState = {
    images: [],
    status: "",
}

export const searchSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        sayHello: (state) => {
            console.log("hello");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getApiPhotos.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getApiPhotos.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.images = action.payload;
            })
            .addCase(getApiPhotos.rejected, (state) => {
                state.status = "rejected";
            });
    }
});

export const { sayHello } = searchSlice.actions;
export default searchSlice.reducer;
