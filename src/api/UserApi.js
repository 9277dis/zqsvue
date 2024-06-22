import axios from 'axios';

function regist(user) {
    return axios.post('http://zqs.0cs.cc:9000/shop/user', user);
}

function login(user) {
    return axios.get('http://zqs.0cs.cc:9000/shop/user', {
        params: user
    });
}

export default {
    regist,
    login
}