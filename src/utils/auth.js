import { checkResponse } from "./checkResponse";

const BASE_URL = 'https://api.romamovie.nomoredomainsmonster.ru';

function _request(url, method, body, token) {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (token) {
        const token = localStorage.getItem('jwt');
        headers.Authorization = `Bearer ${token}`;
    };

    const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    };

    return fetch(url, options)
            .then(checkResponse);
}

export const register = ({name, email, password}) => {
    return _request(`${BASE_URL}/signup`, 'POST', {name, email, password}, null);
}

export const authorize = ({email, password}) => {
    return _request(`${BASE_URL}/signin`, 'POST', {email, password}, null);
}

export const getContent = (token) => {
    return _request(`${BASE_URL}/users/me`, 'GET', null, token);
}