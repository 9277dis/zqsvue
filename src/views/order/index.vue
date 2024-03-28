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
          status: "已完成"
        },
          {
            id: 2,
            name: "订单2",
            total: 200,
            createdAt: "2022-01-02",
            status: "进行中"
          },
          {
            id: 3,
            name: "订单3",
            total: 300,
            createdAt: "2022-01-03",
            status: "已取消"
          }
      ]
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
        </tr>

        <tr v-for="order in orders" :key="order.id">
          <td><input type="checkbox"/></td>
          <td>{{ order.id }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.total }}</td>
          <td>{{ order.createdAt }}</td>
          <td>{{ order.status }}</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      <div class="select-area">
        <input type="checkbox" id="selectAll" @change="selectAll"/>
        <label for="selectAll">全选</label>
        <button class="btn btn-danger" @click="deleteOrder">删除</button>
      </div>
      <div class="submit-area">
        <button class="btn btn-primary">返回</button>
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
  padding: 10px;
  text-align: center;
  border: 1px solid #e9e9e9;
}


.btn {
  border-radius: 5px;
}


</style>