import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favimages: JSON.parse(localStorage.getItem("items")) || [],
}

const setLocalStorage = (photos) => {
    localStorage.setItem("items", JSON.stringify(photos));
}

export const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addLocalPhoto: (state, action) => {
            state.favimages = [...state.favimages, action.payload];
            setLocalStorage(state.favimages);
        },
        deleteLocalPhoto: (state, action) => {
            state.favimages = state.favimages.filter(
                (photo) => photo.id !== action.payload
            );
            setLocalStorage(state.favimages);
        },
        editLocalDescription: (state, action) => {
            state.favimages = state.favimages.map((obj) => {
                if (obj.id === action.payload.id) {
                    obj.description = action.payload.description;
                }
                return obj;
            });
            setLocalStorage(state.favimages)
        },
        orderBy: (state, action) => {
            switch (action.payload.type) {
                case "Date":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (action.payload.order ? (new Date(a.date) - new Date(b.date)) : (new Date(b.date) - new Date(a.date)));
                    })
                    break;
                case "Width":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (action.payload.order ? (a.width - b.width) : (b.width - a.width));
                    })
                    break;
                case "Height":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (action.payload.order ? (a.height - b.height) : (b.height - a.height));
                    })
                    break;
                case "Likes":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (action.payload.order ? (a.likes - b.likes) : (b.likes - a.likes));
                    })
                    break;
                default:
                    break;
            }

            setLocalStorage(state.favimages);
        },
    }
})
export const {
    addLocalPhoto,
    deleteLocalPhoto,
    editLocalDescription,
    orderBy,
    searchByDescription
} = favouritesSlice.actions;
export default favouritesSlice.reducer;
