import axios from 'axios';

function regist(user) {
    return axios.post('http://localhost:8080/shop/user', user);
}

function login(user) {
    return axios.get('http://localhost:8080/shop/user', {
        params: user
    });
}

export default {
    regist,
    login
}