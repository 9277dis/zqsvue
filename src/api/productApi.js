import axios from "axios";

function listAll() {
    return axios.get("http://zqs.0cs.cc:9000/shop/product");
}

function detail(id) {
    return axios.get("http://zqs.0cs.cc:9000/shop/product/" + id);
}

export default {listAll, detail};
