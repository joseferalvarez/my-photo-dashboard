export const fetchPhotos = async () => {
    return await fetch(`${process.env.REACT_APP_API_RANDOM}?client_id=${process.env.REACT_APP_CLIENT_ID}&count=24`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data
        });
}
