<script>
export default {
  name: "index",
  data() {
    return {
      orders: [
        {
          id: 1,
          name: "订单1",
          total: 100,
          createdAt: "2022-01-01",
          status: "1"
        },
        {
          id: 2,
          name: "订单2",
          total: 200,
          createdAt: "2022-01-02",
          status: "2"
        },
        {
          id: 3,
          name: "订单3",
          total: 300,
          createdAt: "2022-01-03",
          status: "3"
        }
      ]
    }
  },
  filters: {
    statusFilter(status) {
      return ["未支付", "已支付", "已签收"][status - 1]
    },
    caozhuoFilter(status) {
      return ["删除订单", "申请退款", "确认收货"][status - 1]
    }
  }, created() {
    this.creat(10)
    document.title = '订单列表'
  },
  methods: {
    creat(x) {
      this.orders = []
      //   创建随机x个订单
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
          <td><input type="checkbox"/></td>
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
        <input type="checkbox" id="selectAll"/>
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
  margin: 20px auto;
  width: 80%;
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
  width:15%;
  padding: 10px;
  text-align: center;
  border: 1px solid #e9e9e9;
}
td:first-child , th:first-child {
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