const getAllMovies = () => {
    return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        console.log(err)
    })
}

export default getAllMovies;