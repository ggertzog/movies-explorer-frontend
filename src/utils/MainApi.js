class Api {
    constructor({url}) {
        this._url = url
    }

    #onResponse(res) {
        return res.ok ? res.json() : res.json().then(errData => Promise.reject(errData))
    }

    getSavedMovies() {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(this.#onResponse)
    }

    createMovie(movie) {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._url}/movies/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then(this.#onResponse)
    }

    deleteMovie(id) {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(this.#onResponse)
    }

    editUserProfile(data) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(this.#onResponse)
    }
}

const api = new Api({
    url: 'https://api.romamovie.nomoredomainsmonster.ru'
})

export default api;