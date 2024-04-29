import axios from 'axios';
function myOrder(userId){
    return axios.get(`http://localhost:8080/shop/order/${userId}`)
}
export default {myOrder}