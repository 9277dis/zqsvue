<script>
export default {
  name: "index",
  data() {
    return {
      carts: [
        {id: 1, name: '商品1', price: 10.95, count: 1},
        {id: 2, name: '商品2', price: 20.48, count: 2},
        {id: 3, name: '商品3', price: 30.18, count: 3}
      ],
      selectedItems: [],// 选中的商品全部信息，id，name，price，count等
      checkedNames: false,//选择状态
      checkAll: false,//全选状态
      selectedCount: 0,//选中的商品数量
      totalPrice: 0.00//选中的商品总价
    }
  }, created() {
    this.creat(15)
    document.title = '购物车'
  }, methods: {
    creat(x) {
      // 创建x个随机订单
      this.clean()// 清除之前的数据

      // 创建订单商品
      for (var i = 0; i < x; i++) {
        var id = i + 1
        var name = '商品' + id
        // 随机小数价格，如6.66
        var price = Math.floor(Math.random() * 100) + 1
        // 随机数量，如1,2,3,4,5
        var count = Math.floor(Math.random() * 10) + 1
        price = price.toFixed(2)
        this.carts.push({id: id, name: name, price: price, count: count})
      }
    },
    clean() {
      this.carts = []
      this.selectedItems = []
      this.checkedNames = false
      this.checkAll = false
      this.selectedCount = 0
      this.totalPrice = 0.00
      this.sum()
    },
    sum() {
      // 计算总数
      this.selectedCount = 0
      for (var i = 0; i < this.selectedItems.length; i++) {
        this.selectedCount += this.selectedItems[i].count
      }
      // 计算总价
      this.totalPrice = 0.00
      for (var j = 0; j < this.selectedItems.length; j++) {
        this.totalPrice += this.selectedItems[j].price * this.selectedItems[j].count
      }
      //   保留两位小数
      this.totalPrice = this.totalPrice.toFixed(2)
    },
    checkOneChange() {
      // 检查所有复选框的状态
      this.checkAll = this.ifAllSelected();
      this.sum()
    },
    checkAllChange() {
      if (this.checkAll) {
        // 全选
        this.carts.forEach(cart => {
          if (!this.selectedItems.includes(cart)) {
            cart.checked = true;
            this.selectedItems.push(cart);
          }
        })
      } else {
        this.selectedItems = this.selectedItems.filter(item => {
          // 移除每个购物车项的选中状态，并从 selectedItems 中过滤掉
          item.checked = false;
          // 不返回任何项，这将导致 filter 方法创建一个空数组
          return false;
        })
      }
      this.sum()
    },
    ifAllSelected() {
      // 判断是否全选
      return this.selectedItems.length === this.carts.length;
    },
    plus(cart) {
      // 增加商品数量
      cart.count++
      this.sum()
    },
    minus(cart) {
      // 减少商品数量
      if (cart.count > 1) {
        cart.count--
        this.sum()
      }
    },
  }
}
</script>

<template>
  <div class="cart-container">
    <div class="cart-header">
      <div class="my-cart" @click="creat(10)" style="cursor: pointer;user-select: none">我的购物车</div>
      <div class="clear">
        <button class="btn btn-danger" @click="clean">清空购物车</button>
      </div>
    </div>

    <div>
      <table>
        <thead>
        <tr>
          <th>选择</th>
          <th>编号</th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>小计</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cart in carts" :key="cart.id">
          <td><input type="checkbox" :value="cart" v-model="selectedItems" @change="checkOneChange()" checked/></td>
          <td>{{ cart.id }}</td>
          <td>{{ cart.name }}</td>
          <td>{{ cart.price }}</td>
          <td>
            <span class="cut" @click="minus(cart)" :class="{ disabled: cart.count === 1 }">-</span>
            <span class="num">{{ cart.count }}</span>
            <span class="plus" @click="plus(cart)" :class="{ disabled: cart.count === 100 }">+</span>
          </td>
          <td>{{ (cart.price * cart.count).toFixed(2) }}</td>
        </tr>

        </tbody>
      </table>
    </div>
    <div class="footer">
      <div class="all-check">
        <input type="checkbox" v-model="checkAll" id="selectAll" @change="checkAllChange"/>
        <label for="selectAll">{{ checkAll ? '取消全选' : '全选' }}</label>

      </div>
      <div class="summary">
        <span>已选商品<span class="count">{{ selectedCount }}</span>件</span>&nbsp;
        <span>总价：<span class="total">{{ totalPrice }}</span>元</span>
      </div>
      <div class="submit-area">
        <button class="btn btn-primary" @click="sum">结算</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.cart-header {
  display: flex;
  justify-content: space-between;
}

.my-cart {
  width: 300px;
  margin: auto;
}

.cart-container {
  position: absolute;
  margin-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  height: 100%;
  overflow-x: unset;
  overflow-y: unset;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: 20%;
  min-width: 105px;
  padding: 10px;
  text-align: center;
  border: 1px solid #e9e9e9;
}

td:first-child, th:first-child {
  width: 8%;
  min-width: 60px
}

td:nth-child(2), th:nth-child(2) {
  width: 8%;
  min-width: 60px;
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

.cut, .plus {
  cursor: pointer;
  user-select: none; /* 防止文本被选中 */
}

.disabled {
  pointer-events: none; /* 禁用点击事件 */
  opacity: 0.5; /* 可视化地表示按钮被禁用 */
}

.disabled:hover {
  background-color: #f2f2f2;
  border-color: #ccc;
  color: #333;
  cursor: not-allowed;
}
</style>