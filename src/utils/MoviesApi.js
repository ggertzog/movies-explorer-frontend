const MOVIES_URL = 'https://api.nomoreparties.co'

const getAllMovies = () => {
    return fetch(`${MOVIES_URL}/beatfilm-movies`, {
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

export {getAllMovies, MOVIES_URL};