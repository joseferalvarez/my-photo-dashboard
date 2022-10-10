import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./photosAPI";

export const getRandomPhotos = createAsyncThunk(
    "search/fetchPhotos",
    async () => {
        return await fetchPhotos();
    }
)

const initialState = {
    images: [],
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
            .addCase(getRandomPhotos.pending, (state) => {
                console.log("pending");
            })
            .addCase(getRandomPhotos.fulfilled, (state, action) => {
                console.log("fullfilled")
                state.images = action.payload;
            })
            .addCase(getRandomPhotos.rejected, (state) => {
                console.log("rejected");
            });
    }
});

export const { sayHello } = searchSlice.actions;
export default searchSlice.reducer;
