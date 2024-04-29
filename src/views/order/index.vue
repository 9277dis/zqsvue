<script>
import orderApi from '@/api/orderApi'

export default {
  name: "index",
  data() {
    return {
      orders: []
    }
  },
  filters: {
    statusFilter(status) {
      return ["未支付", "已支付", "已签收"][status - 1]
    },
    caozhuoFilter(status) {
      return ["删除订单", "申请退款", "确认收货"][status - 1]
    }
  },
  mounted() {
    const userId2 = localStorage.getItem("user")
    let userId = this.$store.getters.loginUserId;
    console.log(userId2)
    orderApi.myOrder(userId).then(res => this.orders = res.data.data)
  },
  created() {
    document.title = '订单列表'
  },
  methods: {
    checkOneChange() {
      this.checkAll = this.ifAllSelected();
    },
    checkAllChange() {
      if (this.checkAll) {
      }
    },
    creat(x) {
      this.orders = []
      for (let i = 0; i < x; i++) {
        this.orders.push({
          id: Math.floor(Math.random() * 10000),
          name: "订单" + Math.floor(Math.random() * 10000),
          total: Math.floor(Math.random() * 1000),
          createdAt: new Date().toLocaleString(),
          status: Math.floor(Math.random() * 3) + 1
        })
      }
    },
    ifAllSelected() {

    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<template>
  <div class="cart-container">
    <div>我的订单</div>
    <div>
      <table>
        <tr>
          <th>选择</th>
          <th>编号</th>
          <th>订单名称</th>
          <th>总价</th>
          <th>创建时间</th>
          <th>状态</th>
          <th>操作</th>
        </tr>

        <tr v-for="order in orders" :key="order.id">
          <td><input @click="checkOneChange" type="checkbox"/></td>
          <td>{{ order.id }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.total }}</td>
          <td>{{ order.createdAt }}</td>
          <td>{{ order.status|statusFilter }}</td>
          <td>
            <button class="caozuo">{{ order.status|caozhuoFilter }}</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="footer">
      <div class="select-area">
        <input type="checkbox" id="selectAll" @click="checkAllChange"/>
        <label for="selectAll">全选</label>
      </div>
      <div class="submit-area">
        <button class="btn btn-primary" @click="back">返回</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  position: absolute;
  margin-top: 50px;
  width: 80%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.select-area {
  display: flex;
  align-items: center;
}

.select-area input {
  margin-right: 10px;
}

.submit-area {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  font-family: Arial, sans-serif;
  text-align: center;
  border: 1px solid #e9e9e9;
  margin-bottom: 20px;
}

table, th, td {
  border: 1px solid #e9e9e9;
}

td, th {
  width: 15%;
  padding: 10px;
  text-align: center;
  border: 1px solid #e9e9e9;
}

td:first-child, th:first-child {
  width: 10%;
}

.btn {
  border-radius: 5px;
}

.caozuo {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.caozuo:hover {
  background-color: #45a049;
}

.caozuo:active {
  background-color: #3e8e41;
}

</style>