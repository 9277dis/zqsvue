import axios from 'axios';
function myOrder(userId){
    return axios.get(`http://zqs.0cs.cc:9000/shop/order/${userId}`)
    // return axios.get(`http://localhost:8080/shop/order/${userId}`)
}
function submitOrder(data) {
    return axios.post("http://zqs.0cs.cc:9000/shop/order", data);
    // return axios.post("http://localhost:8080/shop/order", data);
}
// 删除订单
function deleteOrder(orderId) {
    return axios.delete(`http://zqs.0cs.cc:9000/shop/order/${orderId}`)
    // return axios.delete(`http://localhost:8080/shop/order/${orderId}`)
}
export default {myOrder,submitOrder,deleteOrder}