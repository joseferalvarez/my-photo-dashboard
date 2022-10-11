export const fetchPhotos = async (query) => {
    if (!query || query === "") {
        return await fetch(`${process.env.REACT_APP_API_RANDOM}?client_id=${process.env.REACT_APP_CLIENT_ID}&count=24`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data
            });
    } else {
        return await fetch(`${process.env.REACT_APP_API_SEARCH}?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${query}&per_page=24`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.results
            });
    }
}
