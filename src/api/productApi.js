import axios from "axios";

function listAll() {
    return axios.get("http://localhost:8080/shop/product");
}

function detail(id) {
    return axios.get("http://localhost:8080/shop/product/" + id);
}

export default {listAll, detail};
