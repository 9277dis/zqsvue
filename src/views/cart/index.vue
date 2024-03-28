<script>
export default {
  name: "index",
  data() {
    return {
      orders: [
        {
          id: 1,
          name: '商品1',
          price: 10,
          count: 1
        },
        {
          id: 2,
          name: '商品2',
          price: 20,
          count: 2
        },
        {
          id: 3,
          name: '商品3',
          price: 30,
          count: 3
        }
      ]
    }
  }
}
</script>

<template>
  <div class="cart-container">
    <div>我的购物车</div>
    <div class="clear">
      <button class="btn btn-danger" @click="clean">清空购物车</button>
    </div>

    <div>
      <table>
        <!--        <thead>-->
        <tbody>
        <tr>
          <th>选择</th>
          <th>编号</th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>小计</th>
        </tr>

        <tr v-for="order in orders" :key="order.id">
          <td><input type="checkbox"/></td>
          <td>{{ order.id }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.price }}</td>
          <td>
            <span class="cut" @click="reduce">-</span>
            <span class="num">{{ order.count }}</span>
            <span class="plus" @click="add">+</span>
          </td>
          <td>{{ order.price * order.count }}</td>
        </tr>

        </tbody>
        <!--        </thead>-->
      </table>
    </div>
    <div class="footer">
      <div class="summary">
        <span>已选商品<span class="count">0</span>件</span>&nbsp;
        <span>总价：<span class="total">0.00</span>元</span>
      </div>
      <div class="submit-area">
        <button class="btn btn-primary" @click="sum">结算</button>
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

.summary {
  font-size: 16px;
  font-weight: bold;
}

.submit-area {
  text-align: right;
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

.clear {
  margin-bottom: 20px;
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: right;
}

.btn {
  border-radius: 10px;
}

.cut, .plus {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  vertical-align: middle;
}

.cut:hover, .plus:hover {
  background-color: #ddd;
  color: #fff;
  border-color: #ddd;
  font-weight: bold;
  cursor: pointer;
}

.cut:active,
.plus:active {
  background-color: #bbb;
  border-color: #bbb;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

.num {
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
  outline: none;
  font-size: 14px;
  background-color: #fff;
  cursor: pointer;
}
</style>