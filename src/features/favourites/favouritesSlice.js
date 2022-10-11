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
        /*Añade una foto que no haya sido añadida antes*/
        addNewPhoto: (state, action) => {
            if ([...state.favimages].every(obj => obj.id !== action.payload.id)) {
                state.favimages = [...state.favimages, action.payload];
                setLocalStorage(state.favimages);
            }
        },

        /*Elimina una foto de la lista*/
        deletePhoto: (state, action) => {
            state.favimages = state.favimages.filter(
                (photo) => photo.id !== action.payload
            );
            setLocalStorage(state.favimages);
        },

        /*Cambia la descripcion de una foto*/
        editPhotoDescription: (state, action) => {
            state.favimages = state.favimages.map((obj) => {
                if (obj.id === action.payload.id) {
                    obj.description = action.payload.description;
                }
                return obj;
            });
            setLocalStorage(state.favimages)
        },

        /*Ordena las fotos por fecha, anchura, altura o likes en orden ascendente o descendente*/
        orderBy: (state, action) => {
            const type = action.payload.type;
            const order = action.payload.order;

            switch (type) {
                case "Date":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (order ? (new Date(a.date) - new Date(b.date)) : (new Date(b.date) - new Date(a.date)));
                    })
                    break;
                case "Width":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (order ? (a.width - b.width) : (b.width - a.width));
                    })
                    break;
                case "Height":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (order ? (a.height - b.height) : (b.height - a.height));
                    })
                    break;
                case "Likes":
                    state.favimages = state.favimages.sort((a, b) => {
                        return (order ? (a.likes - b.likes) : (b.likes - a.likes));
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
    addNewPhoto,
    deletePhoto,
    editPhotoDescription,
    orderBy,
    searchByDescription
} = favouritesSlice.actions;
export default favouritesSlice.reducer;
