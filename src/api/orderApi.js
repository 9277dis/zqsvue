import axios from 'axios';
function myOrder(userId){
    return axios.get(`http://localhost:8080/shop/order/${userId}`)
}
function submitOrder(data) {
    return axios.post("http://localhost:8080/shop/order/", data);
}
export default {myOrder,submitOrder}